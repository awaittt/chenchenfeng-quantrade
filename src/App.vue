<script setup lang="ts">
import TradeTop from "@/components/trade-top/index.vue";
import TradeBottom from "@/components/trade-bottom/index.vue";
import { onMounted } from "vue";
import { request } from '@/utils/request'

</script>

<template>
    <div class="main">
        <TradeTop />
        <div class="content">
            <router-view></router-view>
        </div>
        <TradeBottom></TradeBottom>
    </div>
</template>
<style scoped>
.main {
    width: 100%;
    height: 100vh;
    position: relative;
    .content {
        padding-top: 5rem;
        width: 100%;
        min-height: 100%;
    }
}
</style>


