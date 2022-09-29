<script setup lang="ts">
import { ref } from "vue";
import { fetchCityWeather } from "@/apiAccess";
import type { CityWeather } from "../interface";

interface Props {
  id: number;
}
const props = defineProps<Props>();

const emits = defineEmits<{
  (e: "window", window: boolean): void;
}>();

const loading = ref(true);
const weather = ref<CityWeather>();

fetchCityWeather(props.id).then((res) => {
  weather.value = res;
  loading.value = false;
});
</script>

<template>
  <v-card color="#7BC6FF" :loading="loading">
    <h2>天気情報</h2>
    <p>
      都市IDが{{ weather?.id }}の{{ weather?.name }}の現在の天気は{{
        weather?.weather[0].description
      }}です。
    </p>
    <v-btn @click="() => emits('window', false)" text block>閉じる</v-btn>
  </v-card>
</template>
