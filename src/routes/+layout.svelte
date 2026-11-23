<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  let { children } = $props();
</script>

<svelte:head>
  <title>My Site</title>
  <meta
    name="google-site-verification"
    content="4n5xjt2ZRXG5mnY4HDMB5m_g_j64LI3VE8GdWTVfltA"
  />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
