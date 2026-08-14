import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // Retain all default Slidev shortcuts
    {
      key: 'b',
      fn: () => {
        // Look for an existing black overlay element
        let overlay = document.getElementById('slidev-blackout-overlay')
        
        if (overlay) {
          // If it exists, remove it (un-black the screen)
          overlay.remove()
        } else {
          // Otherwise, create a full-screen black overlay
          overlay = document.createElement('div')
          overlay.id = 'slidev-blackout-overlay'
          overlay.style.position = 'fixed'
          overlay.style.top = '0'
          overlay.style.left = '0'
          overlay.style.width = '100vw'
          overlay.style.height = '100vh'
          overlay.style.backgroundColor = 'black'
          overlay.style.zIndex = '999999'
          overlay.style.cursor = 'none'
          document.body.appendChild(overlay)
        }
      },
      autoRepeat: false,
    },
  ]
})