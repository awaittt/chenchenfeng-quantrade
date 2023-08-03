
<script setup lang="ts">

</script>

<template>
    <div class="region">
        <div class="content">
            <div>地区：</div>
            <div class="right">
                <div class="active">全部</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>
                <div>泉州市</div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.region {
    color: #bfbfbf;
    width: 100%;
    padding: 8px 5rem;

    .content {
        display: grid;
        grid-template-columns: 50px 1fr;

        .right {
            display: flex;

            div {
                padding: 0 6px;
            }

            .active {
                color: skyblue;
            }

            div:hover {
                color: skyblue;
                cursor: pointer;
            }
        }
    }

}
</style>