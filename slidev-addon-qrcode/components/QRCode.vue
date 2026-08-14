<script setup lang="ts">
import QRCodeVue from 'qrcode.vue'

withDefaults(defineProps<{
  value: string
  size?: number
  level?: 'L' | 'M' | 'Q' | 'H'
  background?: string
  foreground?: string
}>(), {
  size: 200,
  level: 'M',
  background: '#ffffff',
  foreground: '#000000',
})
</script>

<template>
  <div class="qr-code-wrapper" flex="~" items-center justify-center>
    <QRCodeVue
      :value="value"
      :size="size"
      :level="level"
      :background="background"
      :foreground="foreground"
      render-as="svg"
    />
  </div>
</template>