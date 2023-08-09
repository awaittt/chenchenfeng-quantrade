<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { HomeHospital, HomeHospitalInterface } from '@/api/home';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import path from 'path';

const hosname = ref<string>('')
let $router = useRouter()
const getDetail = async (query: string, callback: (item: any) => void) => {
    let ret = await HomeHospital.Search({ limit: 999, page: 1, hosname: query })
    callback(ret.content.map((f1) => {
        return { value: f1.hosname, hoscode: f1.hoscode }
    }))
}
const handleSelect = (item: any) => {

    $router.push({
        path: `/hospital/register`, query:
        {
            hoscode: item.hoscode
        }
    })
}

</script>

<template>
    <div class="search">
        <el-autocomplete clearable placeholder="请输入医院名称" v-model="hosname" :fetch-suggestions="getDetail"
            :trigger-on-focus="false" @select="handleSelect" />
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