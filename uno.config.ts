// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: {
        primary: '#3b82f6',   // Use: text-brand-primary or bg-brand-primary
        secondary: '#10b981', // Use: text-brand-secondary or bg-brand-secondary
        accent: '#f59e0b',    // Use: text-brand-accent or bg-brand-accent
      },
    },
  },
})