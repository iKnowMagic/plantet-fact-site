<script lang="ts">
  import { fly } from 'svelte/transition'
  import { cubicIn } from 'svelte/easing'
  import { Router, Link, Route } from 'svelte-routing'

  import { menuOpen, toggleMenu, planetsMap } from '@/store'

  export let data
  export let section = null

  let url = '/mercury/overview'
  let menuOpenContent = false
</script>

<Router>
  {#if $menuOpen}
    <div
      class="mt-8 bg-gray-900 h-full absolute w-full top-40px left-0 z-1 px-24px"
    >
      <div transition:fly={{ easing: cubicIn, x: -50 }}>
        {#each data as planet}
          <Link
            to="/{planet.name.toLowerCase()}/overview"
            class="
              text-base font-bold tracking-widest leading-normal text-white
              uppercase no-underline grid grid-cols-[auto,1fr,auto] gap-x-6 py-20px
              border-b-4 border-transparent
              hover:{planetsMap[planet.name.toLowerCase()].border}
              hover-transition
              "
            on:click={toggleMenu}
          >
            <div
              class="w-5 h-5 rounded-full
              {planetsMap[planet.name.toLowerCase()].bg}"
            />
            <div class="text-left">
              {planet.name}
            </div>
            <img src="/assets/icon-chevron.svg" alt="arror-right" />
          </Link>
          <div class="opacity-10 h-0.5 bg-white" />
        {/each}
      </div>
    </div>
  {/if}
</Router>
