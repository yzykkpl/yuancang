//start.js
const ImgLoader = require('../../utils/img-loader/img-loader.js')
var app = getApp();
function genImgListData() {
  let images = [
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/logo.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/photograph.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/movies.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/bookshop.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/craftbeer.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/coffee.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/icons/design.png',
    'https://yuancang-1256086874.cos.ap-chengdu.myqcloud.com/yc/images/background22.png'
  ]
  images = images.concat(images.slice(0, 4))
  return images.map(item => {
    return {
      url: item,
      loaded: false
    }
  })
}

Page({
  data: {
    imgList: genImgListData()
  },
  goToIndex: function () {

  },
  onLoad: function () {
    this.imgLoader = new ImgLoader(this, this.imageOnLoad.bind(this))
    this.data.imgList.forEach(item => {
      this.imgLoader.load(item.url)
    })

    wx.startWifi({
      success: function (res) {
        console.log(res.errMsg)
        wx.getConnectedWifi({
          success: function (wifi) {
            app.wifi = wifi.wifi.BSSID
            // wx.showModal({
            //   title: '提示',
            //   content:wifi.wifi.BSSID,
            //   success: function (res) {
            //     if (res.confirm) {
            //       console.log('用户点击确定')
            //     }
            //   }
            // })

          },
          fail: function (wifi) {

          },
          complete: function (wifi) {

          }
        })
      }
    })

  },
  imageOnLoad(err, data) {
    console.log('图片加载完成', err, data.src)
  },
  onShow: function () {

  },

  go: function () {
    wx.navigateTo({
      url: '../productions/productions',
    })
  },
  map: function () {
    wx.openLocation({
      latitude: 25.816400,
      longitude: 98.856000,
      address: '云南省怒江州泸水市怒江大道山水蓝岸二期商铺2-S-3号',
      name: '塬仓',
      scale: 28
    })
  }

});