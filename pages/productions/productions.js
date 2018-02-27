var app=getApp()
var that = this

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    logoImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/logo.png',
    photoImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/photograph.png',
    movieImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/movies.png',
    bookImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/bookshop.png',
    beerImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/craftbeer.png',
    coffeeImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/coffee.png',
    designImg:'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/design.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  },
  photograph: function () {
    wx.navigateTo({
      url: '../photograph/photograph',
    })
  },
  movies: function () {
    wx.navigateTo({
      url: '../movies/movies',
    })
  },
  craftbeer: function () {
    wx.navigateTo({
      url: '../beer/beer',
    })
  },
  coffee: function () {
    wx.navigateTo({
      url: '../coffee/coffee',
    })
  },
  design: function () {
    wx.navigateTo({
      url: '../design/design',
    })
  },
  bookshop: function () {
    wx.navigateTo({
      url: '../bookshop/bookshop',
    })
  },
  
 
})