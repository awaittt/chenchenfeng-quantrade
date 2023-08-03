<script  setup lang="ts">
import Carousel from './carousel/index.vue'
import Search from './search/index.vue'
import Level from './level/index.vue'
import Region from './region/index.vue'

import Card from './card/index.vue'


</script>

<template>
    <div>
        <Carousel></Carousel>
        <Search></Search>
        <el-row>
            <el-col :span="20">
                <Level></Level>
                <Region></Region>
                <!-- 医院卡片 -->
                <Card />
                
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss"></style>