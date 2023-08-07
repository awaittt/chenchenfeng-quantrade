<script  setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'

import Card from './card/index.vue'
import { onMounted, reactive, ref } from 'vue'
import { HomeHospital, HomeHospitalInterface } from '@/api/home'

let levelData = reactive<Array<HomeHospitalInterface.LevelAndRegoneInfo>>([])
let regionData = reactive<Array<HomeHospitalInterface.LevelAndRegoneInfo>>([])
let classLevelFlag = ref<string>('')
const handleLevelchange = (value: string) => {
    classLevelFlag.value = value
}
let classRegionFlag = ref<string>('')
const handleRegionchange = (value: string) => {
    classRegionFlag.value = value
}

const getData = () => {
    Promise.all([
        HomeHospital.LeverAndRegone('hosType'),
        HomeHospital.LeverAndRegone('beijin')
    ]).then((ret) => {
        if (ret) {
            const [ret1, ret2] = ret
            levelData.push(...ret1)
            regionData.push(...ret2)
        } else {
            levelData = []
            regionData = []
        }

    })
}

onMounted(() => {
    getData()

})



</script>

<template>
    <div>
        <Carousel></Carousel>
        <Search></Search>
        <el-row>
            <el-col :span="20">
                <Level :item="levelData" :classFlag="classLevelFlag" @handle="handleLevelchange"></Level>
                <Region :item="regionData" :classFlag="classRegionFlag" @handle="handleRegionchange"></Region>
                <!-- 医院卡片 -->
                <Card :districtCode="classRegionFlag" :hostype="classLevelFlag" />

            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss"></style>