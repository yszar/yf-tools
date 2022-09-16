export function paste() {
    return new Promise((resolve, reject) => {
        uni.getClipboardData({
            success: function(res) {
                resolve(res.data)
            },
            fail(err) {
                console.log('paste失败');
                console.log(err);
                reject(err)
            },
            complete() {
                uni.showToast({
                    title: '粘贴成功',
                    icon: "success"
                });
            }
        })
    })
}
