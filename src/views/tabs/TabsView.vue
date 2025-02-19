<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active" @change="onChange">
            <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="order" icon="friends-o">订单</van-tabbar-item>
            <van-tabbar-item name="mine" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const active = ref(route.name as string);
function onChange(index: string) {
    router.push({
        path: `/tabs/${index}`
    })
}
</script>

<style scoped lang='scss'></style>