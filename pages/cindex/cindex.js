
// let count=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      user_id:'0001',
      name:'一级',
      head_pic:'',
      next_num:'6',
      rebate_total:'4500.00',
      consume_total:'2000.00',
      order_num:'23',
      recent_buying_time:'2018-07-02',
      reg_time:'2018-07-02 19:06:54',
      mobile:'159xxxx8806',
      flag:0,
      nextLevel:[{
        user_id:'0002',
        name:'二级',
        head_pic:'',
        next_num:'6',
        rebate_total:'4500.00',
        consume_total:'2000.00',
        order_num:'23',
        recent_buying_time:'2018-07-02',
        reg_time:'2018-07-02 19:06:54',
        mobile:'159xxxx8806',
        flag:0,
        nextLevel:[{
          user_id:'0003',
          name:'三级',
          head_pic:'',
          next_num:'6',
          rebate_total:'4500.00',
          consume_total:'2000.00',
          order_num:'23',
          recent_buying_time:'2018-07-02',
          reg_time:'2018-07-02 19:06:54',
          mobile:'159xxxx8806',
          flag:0,
          nextLevel:[{
            user_id:'0004',
            name:'四级',
            head_pic:'',
            next_num:'6',
            rebate_total:'4500.00',
            consume_total:'2000.00',
            order_num:'23',
            recent_buying_time:'2018-07-02',
            reg_time:'2018-07-02 19:06:54',
            mobile:'159xxxx8806',
            flag:0,
            nextLevel:[{
              user_id:'0005',
              name:'五级',
              head_pic:'',
              next_num:'6',
              rebate_total:'4500.00',
              consume_total:'2000.00',
              order_num:'23',
              recent_buying_time:'2018-07-02',
              reg_time:'2018-07-02 19:06:54',
              mobile:'159xxxx8806',
              flag:0,
              nextLevel:[{
                user_id:'0006',
                name:'六级',
                head_pic:'',
                next_num:'6',
                rebate_total:'4500.00',
                consume_total:'2000.00',
                order_num:'23',
                recent_buying_time:'2018-07-02',
                reg_time:'2018-07-02 19:06:54',
                mobile:'159xxxx8806',
                flag:0,
                nextLevel:[{
                  user_id:'0007',
                  name:'七级',
                  head_pic:'',
                  next_num:'6',
                  rebate_total:'4500.00',
                  consume_total:'2000.00',
                  order_num:'23',
                  recent_buying_time:'2018-07-02',
                  reg_time:'2018-07-02 19:06:54',
                  mobile:'159xxxx8806',
                  flag:0,
                  nextLevel:[{
                    user_id:'0008',
                    name:'八级',
                    head_pic:'',
                    next_num:'6',
                    rebate_total:'4500.00',
                    consume_total:'2000.00',
                    order_num:'23',
                    recent_buying_time:'2018-07-02',
                    reg_time:'2018-07-02 19:06:54',
                    mobile:'159xxxx8806',
                    flag:0,
                    nextLevel:[{
                      user_id:'0009',
                      name:'九级',
                      head_pic:'',
                      next_num:'6',
                      rebate_total:'4500.00',
                      consume_total:'2000.00',
                      order_num:'23',
                      recent_buying_time:'2018-07-02',
                      reg_time:'2018-07-02 19:06:54',
                      mobile:'159xxxx8806',
                      flag:0,
                      nextLevel:[{
                        user_id:'0010',
                        name:'十级',
                        head_pic:'',
                        next_num:'6',
                        rebate_total:'4500.00',
                        consume_total:'2000.00',
                        order_num:'23',
                        recent_buying_time:'2018-07-02',
                        reg_time:'2018-07-02 19:06:54',
                        mobile:'159xxxx8806',
                        flag:0
                      }]
                    },{
                      user_id:'0019',
                      name:'九级',
                      head_pic:'',
                      next_num:'6',
                      rebate_total:'4500.00',
                      consume_total:'2000.00',
                      order_num:'23',
                      recent_buying_time:'2018-07-02',
                      reg_time:'2018-07-02 19:06:54',
                      mobile:'159xxxx8806',
                      flag:0,
                      nextLevel:[{
                        user_id:'0011',
                        name:'十级',
                        head_pic:'',
                        next_num:'6',
                        rebate_total:'4500.00',
                        consume_total:'2000.00',
                        order_num:'23',
                        recent_buying_time:'2018-07-02',
                        reg_time:'2018-07-02 19:06:54',
                        mobile:'159xxxx8806',
                        flag:0
                      }]
                    },{
                      user_id:'0029',
                      name:'九级',
                      head_pic:'',
                      next_num:'6',
                      rebate_total:'4500.00',
                      consume_total:'2000.00',
                      order_num:'23',
                      recent_buying_time:'2018-07-02',
                      reg_time:'2018-07-02 19:06:54',
                      mobile:'159xxxx8806',
                      flag:0,
                      nextLevel:[{
                        user_id:'0012',
                        name:'十级',
                        head_pic:'',
                        next_num:'6',
                        rebate_total:'4500.00',
                        consume_total:'2000.00',
                        order_num:'23',
                        recent_buying_time:'2018-07-02',
                        reg_time:'2018-07-02 19:06:54',
                        mobile:'159xxxx8806',
                        flag:0
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
      }]
    }],
    content: [],
    title:['姓名','头像','下级','佣金','消费','订单','最近消费时间','注册时间','手机号'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://user.jp580.com/index.php/WXAPI/User/userLevelList',
      data: {
        data: { user_id: '45430' }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        let content = res.data.content;
        // console.log('count:',++count);
        this.setData({
          content: content
        })
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