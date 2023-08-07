
<script setup lang="ts">
const { item, classFlag } = defineProps(['item', 'classFlag'])
const $emit = defineEmits(['handle'])



</script>

<template>
    <div class="region">
        <div class="content">
            <div>地区：</div>
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
.region {
    color: #bfbfbf;
    width: 100%;
    padding: 8px 5rem;

    .content {
        display: grid;
        grid-template-columns: 50px 1fr;
        white-space: nowrap;

        &> :first-child {
            padding-top: 6px;
        }

        .right {
            display: flex;
            flex-wrap: wrap;

            div {
                padding: 6px;
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