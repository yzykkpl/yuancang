
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'loading',
      mask: true
    })
    var id = options.id;
    var that = this;
    switch (id) {
      case '1':
        that.setData({
          url: ' https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/coffee/freshcoffee.jpg'
        })
        break;
      case '2':
        that.setData({
          url: ' https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/coffee/drink.jpg'
        })
        break;
     
    }

  },
  previewImage: function () {
    wx.previewImage({
      current: this.data.url,
      urls: [this.data.url]

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})