<script lang="ts">
  import Navbar from '@/components/Navbar'
  import { planetsMap } from '@/store'

  export let planet
  export let section

  const sectionsMap = {
    overview: {
      image: 'planet',
      label: 'overview'
    },
    structure: {
      image: 'internal',
      label: 'structure'
    },
    surface: {
      image: 'geology',
      label: 'geology'
    }
  }
</script>

<main class="flex flex-col items-center gap-10px text-white">
  <div class="w-full h-300px flex flex-col justify-center items-center">
    {#if section === 'overview' || section === 'structure'}
      <img
        class={planetsMap[planet.name.toLowerCase()].images.sm}
        src={planet.images[sectionsMap[section].image]}
        alt="{planet}-{section}"
      />
    {/if}
    {#if section === 'surface'}
      <img
        class={planetsMap[planet.name.toLowerCase()].images.sm}
        src={planet.images[sectionsMap.overview.image]}
        alt="{planet}-{section}"
      />
      {#if planet.name.toLowerCase() === 'saturn'}
        <img
          class="w-80px mt-[-30px]"
          src={planet.images[sectionsMap.surface.image]}
          alt="{planet}-{section}"
        />
      {:else if planet.name.toLowerCase() === 'jupiter'}
        <img
          class="w-80px mt-[-60px]"
          src={planet.images[sectionsMap.surface.image]}
          alt="{planet}-{section}"
        />
      {:else}
        <img
          class="w-80px mt-[-30px]"
          src={planet.images[sectionsMap.surface.image]}
          alt="{planet}-{section}"
        />
      {/if}
    {/if}
  </div>

  <h1 class="text-38px font-antonio font-medium uppercase text-center">
    {planet.name}
  </h1>
  <section class="text-center opacity-60 pt-10px">
    <p class="text-11px leading-22px h-145px">
      {planet[sectionsMap[section].label].content}
    </p>
    <p class="text-12px leading-25px">
      <span class="opacity-70">Source:</span>

      <a href={planet[sectionsMap[section].label].source} target="_blank">
        <span class="underline font-bold opacity-60">Wikipedia</span>
        <img
          src="/assets/icon-source.svg"
          alt="source"
          class="inline ml-5px"
        />
      </a>
    </p>
  </section>
  <section class="w-full uppercase grid gap-8px mt-14px">
    <div
      class="grid grid-cols-2 h-48px px-22px border-1 border-gray-800 items-center"
    >
      <div class="text-8px opacity-60 tracking-1px">Rotation Time</div>
      <div class="text-20px text-right font-antonio">{planet.rotation}</div>
    </div>
    <div
      class="grid grid-cols-2 h-48px px-22px border-1 border-gray-800 items-center"
    >
      <div class="text-8px opacity-60 tracking-1px">Revolution Time</div>
      <div class="text-20px text-right font-antonio">{planet.revolution}</div>
    </div>
    <div
      class="grid grid-cols-2 h-48px px-22px border-1 border-gray-800 items-center"
    >
      <div class="text-8px opacity-60 tracking-1px">Radius</div>
      <div class="text-20px text-right font-antonio">{planet.radius}</div>
    </div>
    <div
      class="grid grid-cols-2 h-48px px-22px border-1 border-gray-800 items-center"
    >
      <div class="text-8px opacity-60 tracking-1px">Average Temp.</div>
      <div class="text-20px text-right font-antonio">{planet.temperature}</div>
    </div>
  </section>
</main>
