<script lang="ts">
  import { Router, Link, Route } from 'svelte-routing'
  import { menuOpen, toggleMenu, planetsMap } from '@/store'

  export let planet
  export let section

  const items = ['overview', 'structure', 'surface']
  let url = '/mercury/overview'
</script>

<nav
  class="text-9px tracking-2px font-bold uppercase grid grid-cols-3 gap-43px text-center items-center"
>
  <Router>
    {#each items as item}
      <Link
        to="/{planet}/{item}"
        class="text-white no-underline
        pt-20px pb-18px
        border-b-4
        {section === item ? planetsMap[planet].border : 'border-transparent'}"
      >
        {item}
      </Link>
    {/each}
  </Router>
</nav>
<div class="opacity-20 w-full h-0.5 bg-white" />
