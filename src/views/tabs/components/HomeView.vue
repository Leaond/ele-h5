<template>
  <div class="home-page">

    <TheTop .recommends="recommends"></TheTop>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TheTop from './TheTop.vue';
const recommends = ref([
  {
    value: 1,
    label: '牛腩'
  },
  {
    value: 2,
    label: '刀削面'
  },
])
</script>

<style scoped lang="scss">
p {
  font-size: 20px;
}
</style>