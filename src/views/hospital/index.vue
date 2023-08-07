<script  setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
const $router = useRouter()
const $route = useRoute()

const selectMenu = (e: any) => {

    $router.push({ path: `/hospital/${e.index}` })
    console.log($route.path.slice(10))

}

console.log($route.path)
</script>

<template>
    <el-container class="container">
        <el-aside width="20%">
            <el-menu :default-active="$route.path.slice(10)" class="el-menu-vertical-demo">
                <el-menu-item @click="selectMenu" index="register">
                    <el-icon><icon-menu /></el-icon>
                    <span>预约挂号</span>
                </el-menu-item>
                <el-menu-item @click="selectMenu" index="detail">
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>医院详情</span>
                </el-menu-item>
                <el-menu-item @click="selectMenu" index="reserve">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>预约通知</span>
                </el-menu-item>
                <el-menu-item @click="selectMenu" index="close">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>停诊信息</span>
                </el-menu-item>
                <el-menu-item @click="selectMenu" index="search">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>查询/取消</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100%;
    position: relative;

}
</style>