<template>
    <view>
        <view class="textarea uni-mx-5 uni-mt-10 uni-shadow-base">
            <uni-easyinput
                type="textarea"
                autoHeight
                v-model="value"
                placeholder="请输入视频链接"
                :styles="styles"
                maxlength="300"
            ></uni-easyinput>
        </view>
        <view class="uni-padding-wrap uni-common-mt btns">
            <button
                class="btn btn-blue uni-shadow-base"
                type="default"
                v-if="!value"
                @click="pasteParse"
            >
                粘贴并解析
            </button>
            <button
                class="btn btn-blue uni-shadow-base"
                type="default"
                v-if="value"
            >
                一键去水印
            </button>
            <button
                class="btn btn-plain uni-shadow-base uni-border-4"
                type="default"
                plain="true"
                @click="paste"
                v-if="!value"
            >
                粘贴内容
            </button>
            <button
                class="btn btn-plain uni-shadow-base uni-border-4"
                type="default"
                plain="true"
                v-if="value"
            >
                清空内容
            </button>
        </view>
        <view class="uni-mt-10 uni-mx-15">
            <button class="btnLogs uni-shadow-base uni-border-4" type="primary">
                历史记录
            </button>
        </view>
    </view>
</template>

<script>
import { paste } from '@/common/common.js';
export default {
    data() {
        return {
            styles: { color: '#6a6a6a', borderColor: '#2979FF' },
            value: null
        };
    },
    methods: {
        async pasteParse() {
            console.log(this.value);
            await paste()
                .then(res => {
                    this.value = res;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        paste() {}
    }
};
</script>

<style lang="scss">
.btns {
    display: flex;
    justify-content: space-around;
}
.btn {
    display: flex;
    font-size: 30rpx;
    text-align: center;
    width: 250rpx;
    height: 70rpx;
    justify-content: center;
    align-items: center;
}
.btn-blue {
    background-color: $uni-primary !important;
    color: $uni-white !important;
}
.btn-plain {
    border: 1px solid $uni-primary !important;
    color: $uni-primary !important;
}
.btnLogs {
    background-color: $uni-success;
    display: flex;
    height: 80rpx;
    font-size: 33rpx;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
