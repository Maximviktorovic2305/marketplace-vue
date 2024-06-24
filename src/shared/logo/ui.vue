<script lang="ts" setup>
import { computed, toRefs } from 'vue'

interface Props {
  orientation: 'vertical' | 'horizontal' | 'normal'
  bgColor: 'white' | 'black'
}

const props = defineProps<Props>()

const { orientation, bgColor } = toRefs(props)

const option = computed(() => orientation.value === 'normal' && bgColor.value === 'black')
const option1 = computed(() => orientation.value === 'horizontal' && bgColor.value === 'white')
const option2 = computed(() => orientation.value === 'vertical' && bgColor.value === 'white')
const option3 = computed(() => orientation.value === 'horizontal' && bgColor.value === 'black')
const option4 = computed(() => orientation.value === 'vertical' && bgColor.value === 'black')
</script>

<template>
  <img v-if="option" src="/logo.png" alt="logo" width="36" height="36" style="background: #000" />
  <img v-if="option1" src="/logo.png" alt="logo" width="40" height="40" />
  <img v-if="option2" src="/logo.png" alt="logo" width="60" height="80" />
  <img v-if="option3" src="/logo.png" alt="logo" width="40" height="60" style="background: #000" />
  <img v-if="option4" src="/logo.png" alt="logo" width="60" height="80" style="background: #000" />
</template>
