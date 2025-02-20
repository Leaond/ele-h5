<template>
  <div class="the-top">
    <div class="top">
      <p class="iconfont icon-dingwei"></p>
      <p>幸福小区(象南里15号)</p>
      <p class="iconfont icon-gouwuche"></p>
      <p class="iconfont icon-tuijian"></p>
    </div>
    <div class="search-recommends">
      <div v-for="(item, index) in recommends" :key="index" class="search-item">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ISearchRecomment } from '../../../types/index'
interface IProps {
  recommends: ISearchRecomment[]
}
defineProps<IProps>()
</script>

<style scoped lang='scss'>
.top {
  // background-image: linear-gradient(90deg, 口rgb(53, 200, 250), 口rgb(31, 175, 243));
  background: linear-gradient(to right, rgb(53, 200, 250), rgb(38, 164, 206));
  color: white;
}

.search-recommends {
  .search-item {}
}
</style>