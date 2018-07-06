//index.js
//获取应用实例
const app = getApp()
let plusImg='/static/images/plus.png';
let minusImg='/static/images/minus.png';
// let i,curData,data;
let i=0;
Page({
  data: {
    // collapse1:'',
    // collapse2:'',
    // collapse3:'',
    // collapse:'/static/images/plus.png',
    plusImg:'/static/images/plus.png',
    minusImg:'/static/images/minus.png',
    // collapse1:[],
    // collapse2:[],
    // hide1:'',
    // hide2:'',
    hide:{},
    list:[{
      id:'01',
      plusImg:'/static/images/plus.png',
      minusImg:'/static/images/minus.png',
      danwei:'一级',
      lianxiren:'张三',
      hangye:'港口-石油气',
      phone:'15914468888',
      opt:'/static/images/plus.png',
      flag:0,
      nextLev:[{
        id:'0101',
        plusImg:'/static/images/plus.png',
        minusImg:'/static/images/minus.png',
        danwei:'二级',
        lianxiren:'adsd',
        hangye:'港口-集装',
        phone:'dasdas',
        opt:'/static/images/plus.png',
        flag:0,
        nextLev:[{
          id:'010101',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0,
        },{
          id:'010102',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'sdas',
          hangye:'港口-sdad',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'010103',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'asa',
          hangye:'港口-sss',
          phone:'dasd',
          opt:'/static/images/plus.png',
          flag:0
        }]
      },{
        id:'0102',
        plusImg:'/static/images/plus.png',
        minusImg:'/static/images/minus.png',
        danwei:'二级',
        lianxiren:'sdadad',
        hangye:'港口',
        phone:'11111',
        opt:'/static/images/plus.png',
        flag:0,
        nextLev:[{
          id:'010201',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'010202',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        }]
      }],
    },{
      id:'02',
      plusImg:'/static/images/plus.png',
      minusImg:'/static/images/minus.png',
      danwei:'一级',
      lianxiren:'张三',
      hangye:'港口-石油气',
      phone:'15914468888',
      opt:'/static/images/plus.png',
      flag:0,
      nextLev:[{
        id:'0201',
        plusImg:'/static/images/plus.png',
        minusImg:'/static/images/minus.png',
        danwei:'二级',
        lianxiren:'adsd',
        hangye:'港口-集装',
        phone:'dasdas',
        opt:'/static/images/plus.png',
        flag:0,
        nextLev:[{
          id:'020101',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'020102',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'sdas',
          hangye:'港口-sdad',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'020103',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'asa',
          hangye:'港口-sss',
          phone:'dasd',
          opt:'/static/images/plus.png',
          flag:0
        }]
      },{
        id:'0202',
        plusImg:'/static/images/plus.png',
        minusImg:'/static/images/minus.png',
        danwei:'二级',
        lianxiren:'sdadad',
        hangye:'港口',
        phone:'11111',
        opt:'/static/images/plus.png',
        flag:0,
        nextLev:[{
          id:'020201',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'020202',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        }]
      }],
    },{
      id:'03',
      plusImg:'/static/images/plus.png',
      minusImg:'/static/images/minus.png',
      danwei:'一级',
      lianxiren:'张三',
      hangye:'港口-石油气',
      phone:'15914468888',
      opt:'/static/images/plus.png',
      flag:0,
      nextLev:[{
        id:'0301',
        plusImg:'/static/images/plus.png',
        minusImg:'/static/images/minus.png',
        danwei:'二级',
        lianxiren:'adsd',
        hangye:'港口-集装',
        phone:'dasdas',
        opt:'/static/images/plus.png',
        flag:0,
        nextLev:[{
          id:'030101',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'030102',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'sdas',
          hangye:'港口-sdad',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'030103',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'asa',
          hangye:'港口-sss',
          phone:'dasd',
          opt:'/static/images/plus.png',
          flag:0
        }]
      },{
        id:'0302',
        plusImg:'/static/images/plus.png',
        minusImg:'/static/images/minus.png',
        danwei:'二级',
        lianxiren:'sdadad',
        hangye:'港口',
        phone:'11111',
        opt:'/static/images/plus.png',
        flag:0,
        nextLev:[{
          id:'030201',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        },{
          id:'030202',
          plusImg:'/static/images/plus.png',
          minusImg:'/static/images/minus.png',
          danwei:'三级',
          lianxiren:'adasdas',
          hangye:'港口-集aa装',
          phone:'000',
          opt:'/static/images/plus.png',
          flag:0
        }]
      }],
    }],
    content:[],
  },
  hide:function(ev){
    let id = ev.currentTarget.dataset.id;
    let dataSource;
    new Promise(resolve=>{
      dataSource = JSON.parse(JSON.stringify(this.data.list));
      this.traverseBF(dataSource,id);
      // console.log('res:',dataSource);
      resolve();
    }).then(()=>{
      this.setData({
        list:dataSource
      })
    })
  },
  // 广度优先遍历,找到目标并且修改flag值
  traverseBF:function(source, goal) {
    // 深拷贝原始数据
    // let dataSource = JSON.parse(JSON.stringify(source));
    for (let curData of source) {
      // console.log(curData.id,goal,curData.id===goal);
      if(curData.id===goal){
        curData.flag = !curData.flag;
        // console.log('id:',curData.id);
        break;
      }
      if(curData.nextLev){
        this.traverseBF(curData.nextLev,goal);
      }
    }
  },
  onLoad: function () {
    wx.request({
      url: 'https://user.team580.cn/index.php/WXAPI/User/userLevelList',
      data: {
        data:{user_id:'45433'}
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res=>{
        let content = res.data.content;
        console.log(content);
      }
    })
  },
})
