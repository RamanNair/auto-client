<script>
  import { page } from "$app/state";
  import { vehicles, brands } from "$lib/vehicles.js";
  import VehicleCard from "$lib/components/VehicleCard.svelte";
  let make = $state("");
  let model = $state("");
  let cap = $state("any");
  let sort = $state("featured");
  $effect(() => {
    make = page.url.searchParams.get("make") || "";
    model = page.url.searchParams.get("model") || "";
  });
  let filtered = $derived(
    vehicles
      .filter(
        (v) =>
          (!make || v.make.toLowerCase() === make.toLowerCase()) &&
          (!model ||
            (v.model + " " + v.title)
              .toLowerCase()
              .includes(model.toLowerCase())) &&
          (cap === "any" || v.price <= Number(cap)),
      )
      .sort((a, b) =>
        sort === "low"
          ? a.price - b.price
          : sort === "high"
            ? b.price - a.price
            : 0,
      ),
  );
</script>

<svelte:head><title>Used Cars for Sale | KM MOTOR TRADERS</title></svelte:head>
<section class="bg-neutral py-14 text-neutral-content">
  <div class="mx-auto max-w-7xl px-4">
    <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
      Our stock
    </p>
    <h1 class="mt-2 text-4xl font-black">Used cars for sale</h1>
    <p class="mt-3 text-neutral-content/65">
      Find your next vehicle at KM MOTOR TRADERS, Dandenong.
    </p>
  </div>
</section>
<section
  class="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[260px_1fr]"
>
  <aside class="h-fit rounded-2xl border border-base-300 p-5">
    <h2 class="text-lg font-black">Refine your search</h2>
    <label class="form-control mt-5"
      ><span class="label-text mb-2 font-semibold">Make</span><select
        class="select select-bordered"
        bind:value={make}
        ><option value="">All makes</option>{#each brands as b}<option
            >{b}</option
          >{/each}</select
      ></label
    ><label class="form-control mt-4"
      ><span class="label-text mb-2 font-semibold">Model</span><input
        class="input input-bordered"
        bind:value={model}
        placeholder="Enter model"
      /></label
    ><label class="form-control mt-4"
      ><span class="label-text mb-2 font-semibold">Maximum price</span><select
        class="select select-bordered"
        bind:value={cap}
        ><option value="any">Any price</option><option value="10000"
          >$10,000</option
        ><option value="15000">$15,000</option><option value="20000"
          >$20,000</option
        ><option value="30000">$30,000</option><option value="50000"
          >$50,000</option
        ></select
      ></label
    ><button
      class="btn btn-primary mt-5 w-full"
      onclick={() => {
        make = "";
        model = "";
        cap = "any";
      }}>Clear filters</button
    >
  </aside>
  <div>
    <div class="mb-5 flex flex-wrap items-center justify-between gap-3">
      <p class="font-semibold">{filtered.length} vehicles found</p>
      <select class="select select-bordered select-sm w-48" bind:value={sort}
        ><option value="featured">Featured</option><option value="low"
          >Price: low to high</option
        ><option value="high">Price: high to low</option></select
      >
    </div>
    {#if filtered.length}<div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {#each filtered as vehicle}<VehicleCard {vehicle} />{/each}
      </div>{:else}<div
        class="rounded-2xl border border-dashed p-12 text-center"
      >
        <h2 class="text-xl font-black">No matching vehicles</h2>
        <p class="mt-2 text-base-content/60">Try changing your filters.</p>
        <button
          class="btn btn-primary mt-5"
          onclick={() => {
            make = "";
            model = "";
            cap = "any";
          }}>Show all vehicles</button
        >
      </div>{/if}
  </div>
</section>
<section id="brands" class="bg-base-200 py-12">
  <div class="mx-auto max-w-7xl px-4">
    <h2 class="mb-5 text-2xl font-black">Browse by make</h2>
    <div class="flex flex-wrap gap-2">
      {#each brands as b}<a
          href={"/cars?make=" + encodeURIComponent(b)}
          class="btn btn-sm btn-outline">{b}</a
        >{/each}
    </div>
  </div>
</section>
