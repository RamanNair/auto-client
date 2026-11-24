<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <title>Auto Client | Quality Used Cars Melbourne</title>

  <meta
    name="description"
    content="Browse quality used cars in Melbourne. Find your next vehicle with Auto Client."
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://auto-client-sigma.vercel.app/" />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
