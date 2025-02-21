<!--
 * @Date: 2025-02-21 11:39:37
 * @LastEditors: liuzhengliang
 * @LastEditTime: 2025-02-21 13:50:46
 * @Description: 
-->
<template>
  <div class="the-top">
    <div class="top">
      <div class="top-left">
        <p class="iconfont icon-dingwei"></p>
        <p>幸福小区(象南里15号)</p>
      </div>
      <div class="top-right">
        <p class="iconfont icon-gouwuche"></p>
        <p class="iconfont icon-tuijian"></p>
      </div>
    </div>
    <OpSearch></OpSearch>
    <div class="search-recommends">
      <div v-for="(item, index) in recommends" :key="index" class="search-item">{{ item.label }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { ISearchRecomment } from '@/types/index.ts';
  import OpSearch from '@/components/OpSearch';
  interface IProps {
    recommends: ISearchRecomment[];
  }
  defineProps<IProps>();
</script>

<style scoped lang="scss">
  .top {
    background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .top-left,
    .top-right {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
    }
  }

  .search-recommends {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background: linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243));
    .search-item {
      color: white;
      border-radius: 20px;
      padding: 6px 10px;
      background-color: rgba(31, 175, 243, 0.6);
    }
  }
</style>
