//start.js
var app = getApp();
Page({
  data: {
   
  },
  goToIndex:function(){
   
  },
  onLoad:function(){
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
  onShow:function(){

  },
  
  go:function(){
    wx.navigateTo({
      url: '../productions/productions',
    })
  }
 
});