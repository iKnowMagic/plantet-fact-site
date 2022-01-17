import { writable } from 'svelte/store'

const menuOpen = writable(false)
const toggleMenu = () => menuOpen.update(s => !s)
const planetsMap = {
  mercury: {
    bg: 'bg-blue-100',
    border: 'border-blue-100',
    images: {
      sm: 'w-111px h-111px'
    }
  },
  venus: {
    bg: 'bg-yellow-200',
    border: 'border-yellow-200',
    images: {
      sm: 'w-154px h-154px'
    }
  },
  earth: {
    bg: 'bg-indigo-500',
    border: 'border-indigo-500',
    images: {
      sm: 'w-173px h-173px'
    }
  },
  mars: {
    bg: 'bg-red-500',
    border: 'border-red-500',
    images: {
      sm: 'w-129px h-129px'
    }
  },
  jupiter: {
    bg: 'bg-red-300',
    border: 'border-red-300',
    images: {
      sm: 'w-224px h-224px'
    }
  },
  saturn: {
    bg: 'bg-yellow-300',
    border: 'border-yellow-300',
    images: {
      sm: 'w-256px h-256px'
    }
  },
  uranus: {
    bg: 'bg-green-300',
    border: 'border-green-300',
    images: {
      sm: 'w-176px h-176px'
    }
  },
  neptune: {
    bg: 'bg-blue-500',
    border: 'border-blue-500',
    images: {
      sm: 'w-173px h-173px'
    }
  }
}

export { menuOpen, toggleMenu, planetsMap }
