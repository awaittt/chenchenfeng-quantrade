<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    inheritAttrs: false
})
</script>

<template>
    <div class="main_botton">
        <div class="content">
            <div class="left"> 闽ICP 13018369号 电话挂号0595-87292114</div>
            <div class="right">
                <span>联系我们</span>
                <span>合作伙伴</span>
                <span>用户协议</span>
                <span>隐私协议</span>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main_botton {
    width: 100%;
    height: 50px;
    background: #f0f2f5;
    justify-content: center;

    .content {
        width: 100%;
        padding: 0 5rem;
        height: 100%;
        display: grid;
        justify-content: space-between;
        grid-auto-flow: column;
        align-items: center;

        .right>span {
            padding: 0 3px;
        }
    }
}
</style>