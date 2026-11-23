<script>
  import { money, number } from "$lib/vehicles.js";
  let { data } = $props();
  const v = $derived(data.vehicle);
</script>

<svelte:head
  ><title>{v ? v.title : "Vehicle not found"} | KM MOTOR TRADERS</title
  ></svelte:head
>{#if v}<section class="bg-neutral py-10 text-neutral-content">
    <div class="mx-auto max-w-7xl px-4">
      <a href="/cars" class="link text-primary">← Back to all cars</a>
      <h1 class="mt-4 text-3xl font-black">{v.title}</h1>
      <p class="mt-2 text-neutral-content/60">
        {v.year} · {number(v.km)} km · {v.transmission}
      </p>
    </div>
  </section>
  <section
    class="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[1.5fr_1fr]"
  >
    <div>
      <img
        src={v.image}
        alt={v.title}
        class="aspect-[16/10] w-full rounded-2xl object-cover"
      />
      <div class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {#each [["Year", v.year], ["Kilometres", number(v.km) + " km"], ["Transmission", v.transmission], ["Fuel", v.fuel]] as s}<div
            class="rounded-xl bg-base-200 p-4"
          >
            <p class="text-xs text-base-content/55">{s[0]}</p>
            <b>{s[1]}</b>
          </div>{/each}
      </div>
      <h2 class="mt-8 text-2xl font-black">Vehicle description</h2>
      <p class="mt-3 leading-7 text-base-content/70">{v.description}</p>
    </div>
    <aside class="h-fit rounded-2xl border border-base-300 p-6 shadow-sm">
      <span class="badge badge-primary">Available now</span>
      <p class="mt-4 text-sm text-base-content/60">Price</p>
      <p class="mt-1 text-4xl font-black">{money(v.price)}</p>
      <p class="mt-4 text-sm leading-6 text-base-content/60">
        Arrange an inspection, test drive or discuss finance and trade-in
        options.
      </p>
      <a
        href={"/contact?vehicle=" + encodeURIComponent(v.title)}
        class="btn btn-primary mt-6 w-full">Enquire about this car</a
      ><a href="tel:0410052424" class="btn btn-outline mt-3 w-full"
        >Call 0410 052 424</a
      >
      <div class="divider"></div>
      <b>KM MOTOR TRADERS</b>
      <p class="mt-1 text-sm text-base-content/60">
        19 Hammond Rd, Dandenong VIC 3175
      </p>
    </aside>
  </section>{:else}<div class="py-24 text-center">
    <h1 class="text-3xl font-black">Vehicle not found</h1>
    <a class="btn btn-primary mt-5" href="/cars">Browse all vehicles</a>
  </div>{/if}
