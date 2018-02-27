const ImgLoader = require('../../utils/img-loader/img-loader.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: null,
    img:'',
    isHidden: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.imgLoader = new ImgLoader(this)
    wx.showLoading({
      title: 'loding',
      mask:true
    })
    var that = this;
    var id = options.id;
    switch(id){
      case '1':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/movie/wedding.jpg', (err, data) => {
          console.log('图片加载完成', err, data.src, data.width, data.height)
          that.setData({
            img: data.src
          })
       
        })
       
        break;
      case '2':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/movie/advertisement.jpg', (err, data) => {
          console.log('图片加载完成', err, data.src, data.width, data.height)
          that.setData({
            img: data.src
          })
    
        })
       
        break;
      case '3':
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/movie/mv.jpg', (err, data) => {
          console.log('图片加载完成', err, data.src, data.width, data.height)
          that.setData({
            img: data.src
          })
 
        })
        break;
      case '4':
        that.setData({
          isHidden: true
    
        })
        this.imgLoader.load('https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/movie/movie.jpg', (err, data) => {
          console.log('图片加载完成', err, data.src, data.width, data.height)
          that.setData({
            img: data.src
          })
         
        })
        break;
    }
    
    var vid = options.vid;
    wx.request({
      url: 'https://vv.video.qq.com/getinfo?vids=' + vid + '&platform=101001&charge=0&otype=json',
     method:'GET',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
         
          var api = res.data
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