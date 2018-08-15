

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src : "",
    sex : "" ,
    age:"",
    beauty:"",
    glass:"",
    epress:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.ctx = wx.createCameraContext()

  },
  
  
 takePhoto() {
    var that = this
    wx.showLoading({
      title: '识别中............'
    })
    setTimeout(function(){
      wx.hideLoading()
    },6000)
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log(res)
        var temp = res.tempImagePath
        this.setData({
          src:temp
        })
        console.log(temp)
        //相当于h5的获取ID值
        const cts = wx.createCanvasContext('photos')
        // console.log(cts)
        console.log("222222222222222")
        cts.drawImage(temp, 0, 0, 300, 200)
        
        cts.draw(false,()=>{
          wx.canvasGetImageData({
            canvasId: 'photos',
            x: 0,
            y: 0,
            width: 300,
            height: 200,
            success(res) {
              //比较重要的代码
              const upng =require("../../utils/UPNG.js")
              let png = upng.encode([res.data.buffer],res.width,res.height)
              let base64 = wx.arrayBufferToBase64(png)
              console.log(base64)
              // var that = this
              
            }
          })
        })  
      }
    })
  },

  // },
  hums: function(){
    wx.navigateTo({
      url: '../index/index',
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