//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  hum: function(){
    console.log('333333333333333333333')
    wx.navigateTo({
      url: '../hum/hum',
    })
  },
  env: function(){
    wx.navigateTo({
      url: '../env/env',
    })
  }
})
