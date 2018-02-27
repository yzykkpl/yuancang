const ImgLoader = require('../../utils/img-loader/img-loader.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:[]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'loading',
      mask:true
    })
    this.imgLoader = new ImgLoader(this)
    var id = options.id;
    var that = this;
    switch(id){
      case '1':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/photograph/wedding2.jpg', (err, data) => {
          console.log('图片加载完成', err, data.src, data.width, data.height)
          that.setData({
            url: data.src
          })
          wx.hideLoading()
        })
      break;
      case '2':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/photograph/travel.jpg', (err, data) => {
          that.setData({
            url: data.src
          })
          wx.hideLoading()
        })
        break;
      case '3':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/photograph/portrait.jpg', (err, data) => {
          that.setData({
            url: data.src
          })
          wx.hideLoading()
        })
        break;
      case '4':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/photograph/identification2.jpg', (err, data) => {
          that.setData({
            url: data.src
          })
          wx.hideLoading()
        })
        break;
    }

  },
  previewImage:function(){
    wx.previewImage({
      current: this.data.url,
      urls: [this.data.url]
  
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
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