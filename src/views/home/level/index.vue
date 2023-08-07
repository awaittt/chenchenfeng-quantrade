
<script setup lang="ts">
const { item, classFlag } = defineProps(['item', 'classFlag'])
const $emit = defineEmits(['handle'])

</script>

<template>
    <div class="level">
        <div class="top">医院</div>
        <div class="content">
            <div>等级：</div>
            <div class="right">
                <div :class="{ active: classFlag === '' }" @click="$emit('handle', '')">全部</div>
                <div v-for="o in item" :key="o.id" :class="{ active: classFlag === o.value }"
                    @click="$emit('handle', o.value)">
                    {{ o.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.level {
    display: flex;
    color: #bfbfbf;
    flex-direction: column;
    width: 100%;
    padding: 6px 5rem 0 5rem;

    .top {
        font-size: 20px;
        font-weight: 500;
        padding: 10px 0;
    }

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