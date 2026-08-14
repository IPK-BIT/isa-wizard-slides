import { defineMermaidRendererSetup } from '@slidev/types'
import { renderMermaidSVGAsync, THEMES } from 'beautiful-mermaid'

export default defineMermaidRendererSetup(() => {
  return (code, options) => {
    // Fallback to checking the DOM root class in case options.dark isn't reactive on toggle
    const isDark = typeof document !== 'undefined' 
      ? document.documentElement.classList.contains('dark') 
      : options.dark

    const theme = isDark ? THEMES['catppuccin-mocha'] : THEMES['catppuccin-latte']
    return renderMermaidSVGAsync(code, theme)
  }
})