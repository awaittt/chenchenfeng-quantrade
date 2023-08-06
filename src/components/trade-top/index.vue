<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    inheritAttrs: false
})
</script>

<script setup lang="ts">
import img from '@/assets/images/logo.png'

</script>

<template>
    <div class="main">
        <div class="info">
            <img :src="img" class="img">
            <div>尚医通</div>
            <div>预约挂号统一平台</div>
        </div>
        <div class="apply">
            <div class="help">帮助中心</div>
            <div class="login">登录/注册</div>
        </div>
    </div>
    <div></div>
</template>
<style scoped lang="scss">
.main {
    width: 100%;
    height: 5rem;
    box-sizing: border-box;
    padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    position: absolute;
    z-index: 999;
    & .info {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        color: skyblue;
        font-weight: 600;

        & .img {
            width: 3rem;
            height: 3rem;
            object-fit: contain;
        }

        & :nth-child(2) {
            padding-right: 0.3rem;
            padding-left: 0.5rem;
        }

    }

    & .apply {
        display: grid;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        color: #bfbfbf;
        grid-gap: 0.3rem;
        grid-auto-flow: column;

        .help {
            color: #8c8c8c;
        }
    }
}
</style>