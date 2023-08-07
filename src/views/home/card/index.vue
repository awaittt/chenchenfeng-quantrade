<script setup lang="ts">
import { reactive, onMounted, onUpdated, watch } from 'vue';
import { HomeHospital, HomeHospitalInterface } from '@/api/home/index'
import { useRouter } from 'vue-router';
const $router = useRouter()

const goDetail = () => {
    $router.push({ path: '/hospital' })
}
const item = defineProps(['districtCode', 'hostype'])
const pageData = reactive({
    currennt: 1,
    pageSize: 10,
    total: 10
})
let data = reactive<Array<HomeHospitalInterface.Content>>([])
onMounted(() => {
    getData()
})



const getData = () => {
    HomeHospital.List({ page: pageData.currennt, limit: pageData.pageSize, hostype: item.hostype, districtCode: item.districtCode }).then((ret) => {
        if (ret) {
            data = ret.content
            pageData.total = ret.totalElements
        }
    })
}

const handleSizeChange = (value: number) => {
    getData()

}

const handleCurrentChange = (value: number) => {
    getData()
}
onMounted(() => {

})

onUpdated(() => {
    getData()
})


</script>

<template>
    <div v-if="data.length > 0" class="content">
        <el-card v-for="(o, index) in (data as Array<HomeHospitalInterface.Content>)" :key="index" shadow="hover"
            class="box" :body-style="{ width: '100%' }" @click="goDetail">
            <div class="box-card">
                <div class="hospital">
                    <div class="name">
                        {{ o.hosname }}
                    </div>
                    <div class="tip">
                        <div class="level">
                            <svg t="1690983689270" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2282" width="16" height="16">
                                <path
                                    d="M832 364.8h-147.2s19.2-64 32-179.2c6.4-57.6-38.4-115.2-102.4-121.6h-12.8c-51.2 0-83.2 32-102.4 76.8l-38.4 96c-32 64-57.6 102.4-76.8 115.2-25.6 12.8-121.6 12.8-128 12.8H128c-38.4 0-64 25.6-64 57.6v480c0 32 25.6 57.6 64 57.6h646.4c96 0 121.6-64 134.4-153.6l51.2-307.2c6.4-70.4-6.4-134.4-128-134.4z m-576 537.6H128V422.4h128v480z m640-409.6l-51.2 307.2c-12.8 57.6-12.8 102.4-76.8 102.4H320V422.4c44.8 0 70.4-6.4 89.6-19.2 32-12.8 64-64 108.8-147.2 25.6-64 38.4-96 44.8-102.4 6.4-19.2 19.2-32 44.8-32h6.4c32 0 44.8 32 44.8 51.2-12.8 102.4-32 166.4-32 166.4l-25.6 83.2h243.2c19.2 0 32 0 44.8 12.8 12.8 12.8 6.4 38.4 6.4 57.6z"
                                    p-id="2283" fill="#bfbfbf"></path>
                            </svg>
                            {{ o.param.hostypeString }}
                        </div>
                        <div class="time">
                            <svg t="1690983834054" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3444" width="16" height="16">
                                <path
                                    d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 810.666666c-204.8 0-373.333333-168.533333-373.333333-373.333333S307.2 138.666667 512 138.666667 885.333333 307.2 885.333333 512 716.8 885.333333 512 885.333333z"
                                    fill="#bfbfbf" p-id="3445"></path>
                                <path
                                    d="M695.466667 567.466667l-151.466667-70.4V277.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v238.933334c0 12.8 6.4 23.466667 19.2 29.866666l170.666667 81.066667c4.266667 2.133333 8.533333 2.133333 12.8 2.133333 12.8 0 23.466667-6.4 29.866666-19.2 6.4-14.933333 0-34.133333-17.066666-42.666666z"
                                    fill="#bfbfbf" p-id="3446"></path>
                            </svg>
                            每天{{ o.bookingRule.quitTime }}放号
                        </div>
                    </div>
                </div>
                <img :src="`data:image/jpeg;base64,${o.logoData}`" class="img">
            </div>
        </el-card>
        <el-pagination v-model:current-page="pageData.currennt" v-model:page-size="pageData.pageSize"
            :page-sizes="[10, 20, 30, 40]" :background="true" layout="prev, pager, next, jumper, ->,sizes, total"
            :total="pageData.total" class="pagination" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
    <template v-else>
        <el-empty description="暂无数据" />
    </template>
</template>

<style scoped lang="scss">
.content {
    width: 100%;
    padding: 20px 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .box {
        display: flex;
        width: 48%;
        margin: 8px;

        .box-card {
            width: 100%;
            display: flex;
            justify-content: space-between;

            .hospital {
                display: flex;
                flex-direction: column;
                font-size: 20px;
                flex-grow: 1;

                .tip {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    justify-content: space-between;
                    padding-top: 12px;
                    font-size: 16px;
                    color: #bfbfbf;

                    .level,
                    .time {
                        display: flex;
                        align-items: center;

                        &:first-child {
                            padding-right: 5px;
                        }
                    }
                }
            }

            img {
                width: 50px;
                height: 50px;
                object-fit: contain;
            }
        }
    }

    .pagination {
        width: 100%;
    }


}
</style>