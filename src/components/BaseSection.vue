<script setup lang="ts">
import { inject, ref } from "vue";
import type { CityData } from "@/interface";
import OneCity from "./OneCity.vue";
import WeatherInfo from "./WeatherInfo.vue";

const cityList = inject<CityData>("cityList");

const isWindow = ref(false);
const weatherId = ref(1853909);
const window = (isOpen: boolean, id?: number) => {
  id != undefined ? (weatherId.value = id) : "";
  isWindow.value = isOpen;
};
</script>

<template>
  <v-container>
    <h1>天気表示ポイントリスト</h1>
    <v-list>
      <v-list-item v-for="city in cityList?.data" :key="city.id">
        <OneCity :id="city.id" :name="city.name" @window="window" />
      </v-list-item>
    </v-list>
    <WeatherInfo v-if="isWindow" :id="weatherId" @window="window" />
  </v-container>
</template>
