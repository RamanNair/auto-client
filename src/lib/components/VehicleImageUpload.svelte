<script>
  import { upload } from "@vercel/blob/client";

  let uploading = $state(false);
  let images = $state([]);

  async function uploadImages(event) {
    const files = Array.from(event.currentTarget.files);

    uploading = true;

    try {
      for (const file of files) {
        const blob = await upload(file.name, file, {
          access: "public",
          handleUploadUrl: "/api/upload",
        });

        images.push({
          url: blob.url,
          pathname: blob.pathname,
        });
      }
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      uploading = false;
      event.currentTarget.value = "";
    }
  }
</script>

<div class="space-y-4">
  <input
    type="file"
    accept="image/jpeg,image/png,image/webp"
    multiple
    onchange={uploadImages}
    class="file-input file-input-bordered w-full"
  />

  {#if uploading}
    <span class="loading loading-spinner loading-md"></span>
    Uploading images...
  {/if}

  <div class="grid grid-cols-3 gap-3">
    {#each images as image}
      <img
        src={image.url}
        alt="Vehicle"
        class="w-full h-32 object-cover rounded-lg"
      />
    {/each}
  </div>
</div>
