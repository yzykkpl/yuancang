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

_login:function(){
  console.log(wx.getStorageSync('token'))
  if (wx.getStorageSync('token')) {
    console.log("ge2")
    wx.request({
      url: 'https://www.yzykkpl.cn/sell/wechat/login?token=' + wx.getStorageSync('token'),
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  } else {
    wx.login({
      success: function (res) {
        wx.request({
          url: 'https://www.yzykkpl.cn/sell/wechat/auth?code=' + res.code,
          data: '',
          header: {},
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            if(res.data.code==0){
              wx.setStorageSync("token", res.data.data.token)
            }
            else{
              console.log("error")
            }
          },
          fail: function (res) { },
          complete: function (res) { },
        })
      }
    })
  }



},
_pay:function(){
  wx.requestPayment({
    timeStamp: '1522942192',
    nonceStr: 'wMkQSggMwivdbjYr',
    package: 'prepay_id=wx05232950334466ac735db0c92347420036',
    signType: 'MD5',
    paySign: '4088E12B996FE3B76173DB5B461B105D',
    'success': function (res) {
      console.log(res)
    },
    'fail': function (res) {
      console.log(res)
    }
  })
}
  
 
})