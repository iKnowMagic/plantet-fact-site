<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'

  let url = ''
</script>

<header>
  <div class="flex items-center justify-between">
    <p class="text-3xl font-medium text-white uppercase font-antonio">
      THE PLANETS
    </p>
    <button>
      <img src="/assets/icon-hamburger.svg" alt="menu" />
    </button>
  </div>
</header>
<nav />
<main class="font-spartan" />
<footer />

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="mercury">About</Link>
    <Link to="blog">Blog</Link>
  </nav>
  <div>
    <Route path="/">Home</Route>
    <Route path="/mercury">Mercury</Route>
  </div>
</Router>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Spartan:wght@400;700&display=swap');
  :root {
    font-size: 16px;
    width: 100%;
    height: 100%;
  }
  :global(body) {
    width: inherit;
    height: inherit;
  }
  :global(#app) {
    width: 375px;
    height: inherit;
  }
</style>
