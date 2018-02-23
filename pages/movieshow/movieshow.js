
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: null,
    img:'aaa'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: 'loding',
    })
    var that = this;
    var id = options.id;
    var vid = options.vid;
    wx.request({
      url: 'https://awmhgens.qcloud.la/weapp/getvid',
        data:{
          vid:vid
        },
        method:'POST',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          
          var api = res.data.parsedBody
          var index1=api.indexOf('=');
          var index2=api.lastIndexOf(';');
         var str=api.substring(index1+1,index2)
         var obj=JSON.parse(str)
         var url = obj.vl.vi[0].ul.ui[0].url
         var fn = obj.vl.vi[0].fn
         var fvkey = obj.vl.vi[0].fvkey
         that.setData({
           url: url + fn + '?vkey=' + fvkey 
         })
         console.log(that.data.url)
         wx.hideLoading()
        }
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