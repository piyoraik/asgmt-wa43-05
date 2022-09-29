<script setup lang="ts">
interface Props {
  id: number;
  name: string;
}
defineProps<Props>();

const emits = defineEmits<{
  (e: "window", window: boolean, id: number): void;
}>();
</script>

<template>
  都市IDが{{ id }}の{{ name }}の天気を
  <v-btn color="primary" elevation="9" @click="() => emits('window', true, id)"
    >表示</v-btn
  >
</template>
