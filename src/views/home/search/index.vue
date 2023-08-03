<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'

</script>

<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请输入医院名称" />
        <el-button type="primary" :icon="Search">搜索</el-button>
    </div>
</template>

<style scoped lang="scss">
.search {
    width: 100%;
    height: 50px;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-template-columns: 600px 80px;
    grid-gap: 8px;
    margin: 10px 0;
}
</style>