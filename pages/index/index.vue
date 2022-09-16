<template>
    <view class="container">
        <uni-group mode="card">
            <unicloud-db
                v-slot:default="{ data, loading, error, options }"
                collection="tools-menus"
                where="enable==true"
            >
                <view v-if="error">{{ error.message }}</view>
                <view v-else class="grid">
                    <uni-grid
                        class="grid-row"
                        :column="5"
                        square:true
                        :showBorder="false"
                        :highlight="true"
                        @change="change($event, data)"
                    >
                        <uni-grid-item
                            v-for="(item, index) in data"
                            :index="index"
                            :key="index"
                        >
                            <view
                                class="grid-item-box"
                                style="background-color: #fff;"
                            >
                                <image
                                    class="toolImg"
                                    :src="item.icon"
                                    mode="aspectFill"
                                ></image>
                                <text class="text">{{ item.name }}</text>
                            </view>
                        </uni-grid-item>
                    </uni-grid>
                </view>
            </unicloud-db>
        </uni-group>
    </view>
</template>

<script>
export default {
    data() {
        return {
            toolsMenus: []
        };
    },
    onLaunch() {},

    onLoad() {
        uni.showLoading({
            title: '加载中',
            mask: true
        });
    },
    onReady() {
        uni.hideLoading();
    },
    methods: {
        change(e, data) {
            console.log(e);
            console.log(data[e.detail.index]);
            uni.navigateTo({
                url: data[e.detail.index].url
            });
        }
    }
};
</script>

<style lang="scss">
.toolImg {
    width: 70rpx;
    height: 70rpx;
}
.text {
    font-size: 12px;
    margin-top: 5px;
    color: $uni-main-color;
}
.grid-item-box {
    flex: 1;
    // position: relative;
    /* #ifndef APP-NVUE */
    display: flex;
    /* #endif */
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
