<script setup lang="ts">
import useHospitalDetail from '@/store/module/hospitalDetail'
const { thedata } = useHospitalDetail()

</script>

<template>
    <div class="main">
        <div class="title">{{ thedata?.hospital.hosname }}预约挂号须知</div>
        <div>为方便您早日就医康复，请您认真阅读预约挂号通知</div>
        <div class="text">一、预约实名制</div>
        <div>
            统一平台电话预约和网上预约挂号均采取实名制注册预约，请您如实提供就诊人员的真实姓名、有效证件号(身份证、护照)、性别、手机号码社保卡号等基本信息。
        </div>
        <div class="text">二、预约挂号</div>
        <div>按照北京市卫健委统一平台要求，预约挂号规则如下:
            <div>在同一自然日，同一医院，同一科室，同一就诊单元，同一就诊人，可以预约最多1个号源;</div>
            <div> 在同一自然周，同一就诊人，可以预约最多8个号源;
            </div>
            <div> 在同一自然月，同一就诊人，可以预约最多12个号源:
            </div>
            <div> 在同一自然季度，同一就诊人，可以预约最多24个号源</div>
        </div>
        <div class="text">三、取消预约</div>
        <div>已完成预约的号源，如需办理退号，至少在就诊前一工作日14:00前通过网站、微信公众号、114电话等平台预约渠道进行取消预约。
        </div>
        <div class="text">四、爽约处理</div>
        <div>如预约成功后患者未能按时就诊且不办理取消预约号视为爽约，同一患者在自然年内爽约规则如下:
            累计爽约3次，自3次爽约日起，90天内不允许通过114平台进行预约挂号</div>
    </div>
</template>

<style scoped lang="scss">
.main {
    font-size: 14px;
    color: #7f7f7f;
    width: 100%;
    height: 100%;

    .title {
        font-size: 20px;
        color: #000;
        font-weight: 500;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text {
        font-size: 16px;
        color: #000;
        padding: 12px;

    }
}
</style>