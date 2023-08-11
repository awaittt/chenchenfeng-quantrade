<script setup lang="ts">
import { ElEmpty } from 'element-plus';
import useHospitalDetail from '@/store/module/hospitalDetail'


const { thedata } = useHospitalDetail()


</script>

<template>
    <div class="main">
        <div class="title">{{ thedata?.hospital.hosname }}查询与取消信息</div>
        <ElEmpty />
    </div>

    <div></div>
</template>

<style scoped lang="scss">
.main {
    width: 100%;
    height: 100%;

    .title {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: 500;
        color: #000;
    }
}
</style>