<script>
  let opened = $state(false);
  const nav = [
    ["Home", "/"],
    ["All Cars", "/cars"],
    ["Finance", "/finance"],
    ["Contact", "/contact"],
  ];
</script>

<div class="bg-neutral text-neutral-content text-xs">
  <div class="mx-auto flex max-w-7xl justify-between gap-2 px-4 py-2">
    <span>⌖ 19 Hammond Rd, Dandenong VIC 3175</span><a
      href="tel:0410052424"
      class="font-bold hover:text-primary">0410 052 424</a
    >
  </div>
</div>
<header
  class="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/95 px-4 backdrop-blur"
>
  <div class="navbar-start">
    <a href="/" class="flex items-center gap-2"
      ><span
        class="grid size-11 place-items-center rounded-lg bg-primary text-xl font-black text-neutral"
        >E</span
      ><span
        ><b class="block text-lg">KM MOTOR TRADERS!!! </b><small
          class="text-[10px] font-bold tracking-[.25em] text-base-content/60"
          >J & V · DANDENONG</small
        ></span
      ></a
    >
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal font-semibold">
      {#each nav as n}<li><a href={n[1]}>{n[0]}</a></li>{/each}
      <li><a href="/cars#brands">Brands</a></li>
    </ul>
  </div>
  <div class="navbar-end gap-2">
    <a href="/cars" class="btn btn-primary btn-sm hidden sm:inline-flex"
      >Browse stock →</a
    ><button
      class="btn btn-square btn-ghost lg:hidden"
      onclick={() => (opened = !opened)}
      aria-label="Toggle navigation">☰</button
    >
  </div>
</header>
{#if opened}<ul
    class="menu border-b border-base-300 bg-base-100 px-4 lg:hidden"
  >
    {#each nav as n}<li>
        <a href={n[1]} onclick={() => (opened = false)}>{n[0]}</a>
      </li>{/each}
  </ul>{/if}
