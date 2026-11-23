<svelte:head><title>Car Finance | KM MOTOR TRADERS</title></svelte:head>
<section class="bg-neutral py-16 text-neutral-content">
  <div class="mx-auto max-w-7xl px-4">
    <p class="text-xs font-black uppercase tracking-[.2em] text-primary">
      Finance options
    </p>
    <h1 class="mt-3 max-w-2xl text-4xl font-black sm:text-5xl">
      Let's make your next car happen.
    </h1>
    <p class="mt-5 max-w-2xl leading-7 text-neutral-content/70">
      Explore finance options for your next vehicle. Speak with our team about
      your circumstances and the options available.
    </p>
    <a href="/contact" class="btn btn-primary mt-7">Enquire about finance →</a>
  </div>
</section>
<section class="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2">
  <div>
    <h2 class="text-3xl font-black">Finance made easier</h2>
    <p class="mt-4 leading-7 text-base-content/70">
      We can help connect you with finance assistance and guide you through the
      next steps. Finance is subject to lender assessment, approval and terms.
    </p>
    <ul class="mt-6 space-y-3">
      {#each ["Discuss a budget that works for you", "Ask about finance on vehicles in stock", "Understand the application process"] as item}<li
        >
          ✓ {item}
        </li>{/each}
    </ul>
  </div>
  <div class="rounded-2xl bg-base-200 p-8">
    <h2 class="text-2xl font-black">Talk to our team</h2>
    <p class="mt-3 leading-7 text-base-content/65">
      Call or send an enquiry to discuss the options.
    </p>
    <a href="tel:0410052424" class="btn btn-primary mt-6 w-full"
      >Call 0410 052 424</a
    ><a href="/contact" class="btn btn-outline mt-3 w-full">Send an enquiry</a>
  </div>
</section>
