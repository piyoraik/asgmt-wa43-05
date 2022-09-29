<script setup lang="ts">
import { onMounted, reactive, provide } from "vue";
import { fetchWeatherList } from "@/apiAccess";
import BaseSection from "./components/BaseSection.vue";
import type { CityData } from "./interface";
const cityList = reactive<CityData>({
  data: {},
});
provide("cityList", cityList);
onMounted(async () => {
  cityList.data = await fetchWeatherList();
});

</script>

<template>
  <v-app>
    <v-main>
      <BaseSection />
    </v-main>
  </v-app>
</template>
