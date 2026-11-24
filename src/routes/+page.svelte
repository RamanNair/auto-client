<script>
  import { vehicles, brands } from "$lib/vehicles.js";
  import VehicleCard from "$lib/components/VehicleCard.svelte";
  let make = $state("");
  let model = $state("");
  function search() {
    let q = new URLSearchParams();
    if (make) q.set("make", make);
    if (model) q.set("model", model);
    window.location.href = "/cars?" + q;
  }
</script>

<!-- <svelte:head
  ><title>Used Cars Dandenong | KM MOTOR TRADERS</title><meta
    name="description"
    content="Browse quality inspected used cars at KM MOTOR TRADERS in Dandenong."
  /></svelte:head
> -->

<svelte:head>
  <title>KM Motors | Used Cars Melbourne</title>

  <meta
    name="description"
    content="KM Motors – Browse quality used cars for sale in Melbourne. Find your next car with KM Motors."
  />

  <meta property="og:site_name" content="KM Motors" />

  <meta property="og:title" content="KM Motors | Used Cars Melbourne" />

  <meta name="robots" content="index, follow" />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "KM Motors",
      "alternateName": ["KM Motor", "KM Motors"],
      "url": "https://auto-client-sigma.vercel.app/"
    }
  </script>
</svelte:head>

<section
  class="relative isolate overflow-hidden bg-neutral text-neutral-content"
>
  <div class="absolute inset-0 -z-10">
    <img
      src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=90"
      alt=""
      class="h-full w-full object-cover opacity-35"
    />
    <div
      class="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/85 to-neutral/20"
    ></div>
  </div>
  <div
    class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:min-h-[570px] md:grid-cols-[1.1fr_.9fr] md:py-28"
  >
    <div>
      <div class="badge badge-primary mb-5 border-0 px-4 py-3 font-bold">
        DANDENONG · EST. 2003
      </div>
      <h1 class="text-4xl font-black leading-[1.08] sm:text-5xl lg:text-6xl">
        Find your next car at <span class="text-primary"
          >KM MOTOR TRADERS .</span
        >
      </h1>
      <p class="mt-6 max-w-xl text-lg leading-7 text-neutral-content/75">
        Quality used cars, honest advice and friendly local service. Discover
        inspected pre-owned vehicles at our Dandenong showroom.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a href="/cars" class="btn btn-primary">Browse our cars →</a><a
          href="/contact"
          class="btn btn-outline border-white/50 text-white">Contact the team</a
        >
      </div>
      <div class="mt-10 flex flex-wrap gap-6 text-sm font-semibold">
        <span>✓ Family owned since 2003</span><span>✓ Inspected vehicles</span
        ><span>✓ Finance & trade-ins</span>
      </div>
    </div>
    <div class="card bg-base-100 p-5 text-base-content shadow-2xl sm:p-7">
      <p class="text-xs font-bold uppercase tracking-[.2em] text-primary">
        Start your search
      </p>
      <h2 class="mt-1 text-2xl font-black">Find the right car</h2>
      <label class="form-control mt-5"
        ><span class="label-text mb-2 font-semibold">Make</span><select
          class="select select-bordered"
          bind:value={make}
          ><option value="">All makes</option>{#each brands as b}<option
              >{b}</option
            >{/each}</select
        ></label
      ><label class="form-control mt-3"
        ><span class="label-text mb-2 font-semibold">Model</span><input
          class="input input-bordered"
          placeholder="e.g. Corolla, Ranger, CX-5"
          bind:value={model}
        /></label
      ><button class="btn btn-primary mt-5 w-full" onclick={search}
        >Search vehicles →</button
      >
      <div
        class="mt-5 flex justify-between border-t border-base-200 pt-4 text-xs text-base-content/60"
      >
        <span>Need help choosing?</span><a
          href="tel:0410052424"
          class="font-bold text-base-content">0410 052 424</a
        >
      </div>
    </div>
  </div>
</section>
<section
  class="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2"
>
  <div class="relative">
    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
      alt="Car"
      class="aspect-[5/4] w-full rounded-2xl object-cover"
    />
    <div
      class="absolute -bottom-5 right-4 rounded-xl bg-primary p-5 text-neutral shadow-xl"
    >
      <b class="block text-3xl">20+</b><span class="text-xs font-bold uppercase"
        >Years of experience</span
      >
    </div>
  </div>
  <div>
    <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
      Welcome to KM MOTOR TRADERS
    </p>
    <h2 class="mt-3 text-3xl font-black sm:text-4xl">
      A better way to buy your next used car.
    </h2>
    <p class="mt-5 leading-7 text-base-content/70">
      Based at 19 Hammond Road, Dandenong, KM MOTOR TRADERS has helped local
      drivers find their next vehicle since 2003. Founded by mechanic Zia Agahi,
      our dealership focuses on selected pre-owned cars, clear vehicle
      information and helpful service.
    </p>
    <div class="mt-6 grid gap-3 sm:grid-cols-2">
      {#each ["Inspected pre-owned cars", "Clear vehicle history", "Finance support", "Trade-in assistance"] as item}<div
          class="rounded-lg bg-base-200 p-3 text-sm font-bold"
        >
          ✓ {item}
        </div>{/each}
    </div>
    <a href="/contact" class="btn btn-neutral mt-7"
      >Learn about our dealership →</a
    >
  </div>
</section>
<section class="bg-base-200 py-16">
  <div class="mx-auto max-w-7xl px-4">
    <div class="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
          Have a quick look
        </p>
        <h2 class="mt-2 text-3xl font-black">Our latest used vehicles</h2>
      </div>
      <a href="/cars" class="btn btn-outline btn-sm">View all cars →</a>
    </div>
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {#each vehicles as vehicle}<VehicleCard {vehicle} />{/each}
    </div>
  </div>
</section>
<section id="brands" class="mx-auto max-w-7xl px-4 py-16">
  <div class="mb-8 text-center">
    <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
      Shop by make
    </p>
    <h2 class="mt-2 text-3xl font-black">Browse by car brand</h2>
  </div>
  <div
    class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
  >
    {#each brands.slice(0, 18) as b}<a
        href={"/cars?make=" + encodeURIComponent(b)}
        class="flex items-center justify-between rounded-xl border border-base-300 p-4 font-bold hover:border-primary hover:bg-primary/10"
        >{b}<span class="text-primary">↗</span></a
      >{/each}
  </div>
</section>
<section class="bg-neutral text-neutral-content">
  <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
    <div>
      <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
        Why choose KM MOTOR TRADERS
      </p>
      <h2 class="mt-3 text-3xl font-black">
        We take the stress out of buying a used car.
      </h2>
      <p class="mt-5 leading-7 text-neutral-content/70">
        Our team aims to make your next vehicle purchase straightforward. We can
        help arrange finance, discuss trade-ins and provide support after you
        drive away.
      </p>
      <div class="mt-7 space-y-5">
        {#each ["Drive-away pricing", "Finance & warranty options", "Our own service centre"] as item}<div
            class="flex gap-4"
          >
            <span
              class="grid size-10 place-items-center rounded-lg bg-primary text-neutral"
              >✓</span
            ><b class="self-center">{item}</b>
          </div>{/each}
      </div>
    </div>
    <img
      src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
      alt="Luxury car"
      class="aspect-[5/4] w-full rounded-2xl object-cover"
    />
  </div>
</section>
<section class="mx-auto grid max-w-7xl gap-5 px-4 py-16 md:grid-cols-2">
  <div class="card bg-primary text-neutral">
    <div class="card-body p-8">
      <p class="text-xs font-black uppercase">Flexible options</p>
      <h2 class="card-title text-3xl">We can help with finance.</h2>
      <p>Talk to our team about finance options that may suit your needs.</p>
      <a class="btn bg-neutral text-neutral-content" href="/finance"
        >Learn more →</a
      >
    </div>
  </div>
  <div class="card border border-base-300 bg-base-200">
    <div class="card-body p-8">
      <p class="text-xs font-black uppercase text-primary">
        Thinking of selling?
      </p>
      <h2 class="card-title text-3xl">Want to sell your car?</h2>
      <p>Get in touch to discuss a trade-in or vehicle purchase.</p>
      <a class="btn btn-neutral" href="/contact">Enquire now →</a>
    </div>
  </div>
</section>
