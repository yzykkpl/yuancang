//start.js
const ImgLoader = require('../../utils/img-loader/img-loader.js')

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
    console.log(this.imgList)
  },
  imageOnLoad(err, data){

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