import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  /* configurations... */
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px'
      },
      fontFamily: {
        spartan: ['Spartan'],
        antonio: ['Antonio']
      },
      fontSize: {
        base: '16px'
      }
    }
  }
})
