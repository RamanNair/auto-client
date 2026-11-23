<script>
  import { page } from "$app/state";
  let name = $state("");
  let email = $state("");
  let phone = $state("");
  let vehicle = $state("");
  let message = $state("");
  let sent = $state(false);
  $effect(() => {
    vehicle = page.url.searchParams.get("vehicle") || "";
  });
</script>

<svelte:head><title>Contact KM MOTOR TRADERS</title></svelte:head>
<section class="bg-neutral py-14 text-neutral-content">
  <div class="mx-auto max-w-7xl px-4">
    <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
      Get in touch
    </p>
    <h1 class="mt-2 text-4xl font-black">Contact KM MOTOR TRADERS</h1>
    <p class="mt-3 text-neutral-content/65">
      We'd love to help you find your next car.
    </p>
  </div>
</section>
<section
  class="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[.8fr_1.2fr]"
>
  <div class="space-y-5">
    <h2 class="text-2xl font-black">Visit our showroom</h2>
    <div class="rounded-xl bg-base-200 p-4">
      <small>PHONE</small><a
        href="tel:0410052424"
        class="block text-lg font-bold">0410 052 424</a
      >
    </div>
    <div class="rounded-xl bg-base-200 p-4">
      <small>EMAIL</small><a
        href="mailto:info@kmmotors.com.au"
        class="block font-bold">info@kmmotors.com.au</a
      >
    </div>
    <div class="rounded-xl bg-base-200 p-4">
      <small>ADDRESS</small><b class="block"
        >19 Hammond Rd, Dandenong VIC 3175</b
      >
    </div>
    <p class="text-sm leading-7 text-base-content/65">
      Mon–Fri: 8:30am–5:00pm<br />Saturday: 9:00am–5:00pm<br />Sunday: By
      appointment
    </p>
  </div>
  <div class="rounded-2xl border border-base-300 p-6 shadow-sm sm:p-8">
    <h2 class="text-2xl font-black">Send an enquiry</h2>
    <p class="mt-2 text-sm text-base-content/60">
      Complete the form and our team will get back to you.
    </p>
    {#if sent}<div class="alert alert-success mt-6">
        Thanks, {name}. This is a front-end demo; connect an API/email service
        to receive enquiries.
      </div>{:else}<form
        class="mt-6 grid gap-4 sm:grid-cols-2"
        onsubmit={(e) => {
          e.preventDefault();
          sent = true;
        }}
      >
        <label class="form-control"
          ><span class="label-text mb-2 font-semibold">Your name *</span><input
            class="input input-bordered"
            bind:value={name}
            required
          /></label
        ><label class="form-control"
          ><span class="label-text mb-2 font-semibold">Email *</span><input
            type="email"
            class="input input-bordered"
            bind:value={email}
            required
          /></label
        ><label class="form-control"
          ><span class="label-text mb-2 font-semibold">Phone</span><input
            class="input input-bordered"
            bind:value={phone}
          /></label
        ><label class="form-control"
          ><span class="label-text mb-2 font-semibold">Vehicle of interest</span
          ><input class="input input-bordered" bind:value={vehicle} /></label
        ><label class="form-control sm:col-span-2"
          ><span class="label-text mb-2 font-semibold">Message *</span><textarea
            class="textarea textarea-bordered min-h-32"
            bind:value={message}
            required
            placeholder="How can we help?"></textarea></label
        >
        <div class="sm:col-span-2">
          <button class="btn btn-primary">Send enquiry →</button>
        </div>
      </form>{/if}
  </div>
</section>
