<script lang="ts">
  import { Router, Link, Route, navigate } from 'svelte-routing'

  import planets from '@/data/planets.json'

  import { toggleMenu, menuOpen } from '@/store'
  import { tweened } from 'svelte/motion'
  import { cubicIn, linear } from 'svelte/easing'

  import MobileMenu from '@/components/MobileMenu'
  import Navbar from '@/components/Navbar'
  import SinglePlanet from '@/components/SinglePlanet'

  const hamburgerMenuOpacity = tweened(100, {
    duration: 200,
    easing: cubicIn
  })

  menuOpen.subscribe(open => {
    if (open) {
      hamburgerMenuOpacity.set(20)
    } else {
      hamburgerMenuOpacity.set(100)
    }
  })

  let url = '/mercury/overview'
</script>

<div
  class="relative w-375px font-spartan px-24px py-16px relative bg-gray-900"
>
  <header class="flex items-center justify-between pb-20px text-white">
    <Router>
      <Link
        to="/mercury/overview"
        class="text-28px tracking-[-1px] font-medium text-white uppercase font-antonio no-underline"
        >The Planets</Link
      >
    </Router>

    <button
      on:click={toggleMenu}
      style="opacity: {$hamburgerMenuOpacity / 100}"
    >
      <img src="/assets/icon-hamburger.svg" alt="menu" />
    </button>
  </header>
  <div class="w-full h-1px opacity-20 bg-white" />
  <MobileMenu data={planets} />
  <Router {url}>
    {#each planets as planet}
      <Route path="/{planet.name.toLowerCase()}/:section" let:params>
        <Navbar planet={planet.name.toLowerCase()} section={params.section} />
        <SinglePlanet {planet} section={params.section} />
      </Route>
    {/each}
  </Router>
</div>

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
    width: inherit;
    height: inherit;
  }
</style>
