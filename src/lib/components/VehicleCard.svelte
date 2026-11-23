<script>
  import { money, number } from "../vehicles.js";
  let { vehicle } = $props();
</script>

<article
  class="card overflow-hidden border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>
  <figure class="relative aspect-[16/10] bg-base-200">
    <img
      src={vehicle.image}
      alt={vehicle.title}
      class="h-full w-full object-cover"
      loading="lazy"
    /><span class="badge badge-primary absolute left-3 top-3">Available</span>
  </figure>
  <div class="card-body gap-3 p-5">
    <h3 class="card-title text-base leading-snug">{vehicle.title}</h3>
    <p class="text-sm text-base-content/60">
      {number(vehicle.km)} km · {vehicle.transmission}
    </p>
    <div
      class="flex items-center justify-between border-t border-base-200 pt-3"
    >
      <strong class="text-xl">{money(vehicle.price)}</strong><a
        class="btn btn-primary btn-sm"
        href={"/cars/" + vehicle.slug}>View details →</a
      >
    </div>
  </div>
</article>
