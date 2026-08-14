<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  configUrl: { type: String, default: '/nested-config.json' },
  config: { type: Object, default: null },
  height: { type: String, default: '200px' },
})

const emit = defineEmits(['finish'])

const instanceId = `isa-wizard-${Math.random().toString(36).slice(2)}-${Date.now()}`

const base = import.meta.env.BASE_URL

const wizardAttrHtml = computed(() => {
  if (props.config) {
    const json = JSON.stringify(props.config).replace(/'/g, '&#39;')
    return `config='${json}'`
  }
  return `config-url="${props.configUrl.replace(/"/g, '&quot;')}"`
})

const srcdoc = computed(() => `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: transparent; }
</style>
<link rel="stylesheet" href="https://ts4nfdi.github.io/terminology-service-suite/js-modules/latest/terminology-service-suite.css">
</head>
<body>
<isa-wizard id="wizard" ${wizardAttrHtml.value} style="display:block;width:100%;height:100%;min-height:100%;"></isa-wizard>

<script src="https://ts4nfdi.github.io/terminology-service-suite/js-modules/latest/terminology-service-suite.js"><\/script>

<script type="module">
  import ${JSON.stringify(`${base}isa-wizard/widget.mjs`)}

  const INSTANCE_ID = ${JSON.stringify(instanceId)}
  const el = document.getElementById('wizard')

  function injectStylesheetLink(root, href) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    root.appendChild(link)
  }

  async function injectCss(root, href) {
    try {
      const res = await fetch(href)
      if (!res.ok) throw new Error(res.status + ' ' + res.statusText)
      const css = await res.text()
      const style = document.createElement('style')
      style.textContent = css
      root.appendChild(style)
    } catch (err) {
      console.error('[IsaWizardEmbed/iframe] failed to load', href, err)
    }
  }

  function injectThemeHostVars(root) {
    const style = document.createElement('style')
    style.textContent = ':host{--lightningcss-light:initial;--lightningcss-dark: ;color-scheme:light;--color-base-100:#f7fbf4;--color-base-200:#edf5e8;--color-base-300:#dbe8d1;--color-base-content:#102118;--color-primary:#288000;--color-primary-content:#f3ffe7;--color-secondary:#066;--color-secondary-content:#e8ffff;--color-accent:#81bd00;--color-accent-content:#102200;--color-neutral:#20322b;--color-neutral-content:#eff7f2;--color-info:#066;--color-info-content:#e8ffff;--color-success:#81bd00;--color-success-content:#102200;--color-warning:#e6b332;--color-warning-content:#1f2600;--color-error:#c6493f;--color-error-content:#fff1ef;--radius-selector:.7rem;--radius-field:.6rem;--radius-box:.9rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}'
    root.appendChild(style)
  }

  function applySizing() {
    el.style.setProperty('display', 'block', 'important')
    el.style.setProperty('width', '100%', 'important')
    el.style.setProperty('height', '100%', 'important')
    el.style.setProperty('min-height', '100%', 'important')
    el.style.setProperty('overflow', 'hidden', 'important')

    const root = el.widgetShadowRoot
    const container = root?.querySelector('#widget-container')
    if (container instanceof HTMLElement) {
      container.style.setProperty('display', 'flex', 'important')
      container.style.setProperty('flex-direction', 'column', 'important')
      container.style.setProperty('width', '100%', 'important')
      container.style.setProperty('height', '100%', 'important')
      container.style.setProperty('min-height', '0', 'important')
      container.style.setProperty('overflow', 'hidden', 'important')

      const rootNode = container.firstElementChild
      if (rootNode instanceof HTMLElement) {
        rootNode.style.setProperty('display', 'flex', 'important')
        rootNode.style.setProperty('flex-direction', 'column', 'important')
        rootNode.style.setProperty('width', '100%', 'important')
        rootNode.style.setProperty('height', '100%', 'important')
        rootNode.style.setProperty('min-height', '0', 'important')
        rootNode.style.setProperty('overflow', 'hidden', 'important')

        const main = rootNode.querySelector('main')
        if (main instanceof HTMLElement) {
          main.style.setProperty('height', '100%', 'important')
          main.style.setProperty('min-height', '0', 'important')
          main.style.setProperty('overflow', 'hidden', 'important')
          main.style.setProperty('grid-template-rows', '0.25rem minmax(0, 1fr)', 'important')
        }
      }
    }

    const scroller = root?.querySelector('.overflow-y-auto')
    if (scroller instanceof HTMLElement) {
      scroller.style.setProperty('overflow-y', 'auto', 'important')
      scroller.style.setProperty('overflow-x', 'hidden', 'important')
      scroller.style.setProperty('height', '100%', 'important')
      scroller.style.setProperty('max-height', '100%', 'important')
      scroller.style.setProperty('min-height', '0', 'important')
    }
  }

  customElements.whenDefined('isa-wizard').then(async () => {
    await new Promise((r) => requestAnimationFrame(r))

    const root = el.widgetShadowRoot
    if (!root) {
      console.warn('[IsaWizardEmbed/iframe] no shadow root found on <isa-wizard> — widget may not have connected yet.')
    } else {
      injectThemeHostVars(root)
      injectStylesheetLink(root, 'https://ts4nfdi.github.io/terminology-service-suite/js-modules/latest/terminology-service-suite.css')
      await Promise.all([
        injectCss(root, ${JSON.stringify(`${base}isa-wizard/style.css`)}),
        injectCss(root, ${JSON.stringify(`${base}isa-wizard/isa-wizard-2.css`)}),
      ])
    }

    applySizing()

    el.addEventListener('finish', (e) => {
      window.parent.postMessage({ source: 'isa-wizard-embed', id: INSTANCE_ID, type: 'finish', detail: e.detail }, '*')
    })
  })
<\/script>
</body>
</html>`)

function handleMessage(event) {
  const data = event.data
  if (!data || data.source !== 'isa-wizard-embed' || data.id !== instanceId) return
  if (data.type === 'finish') emit('finish', data.detail)
}

onMounted(() => window.addEventListener('message', handleMessage))
onBeforeUnmount(() => window.removeEventListener('message', handleMessage))
</script>

<template>
  <iframe
    :srcdoc="srcdoc"
    :style="{ width: '100%', height, border: 'none', overflow: 'hidden', display: 'block' }"
  />
</template>