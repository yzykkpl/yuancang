//app.js

App({

  onLaunch: function () {

    
    wx.checkSession({
      success: function () {
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: function () {
        wx.login() //重新登录

      }
    });


  },


})