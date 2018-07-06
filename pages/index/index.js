//index.js
//获取应用实例
const app = getApp()
let plusImg='/static/images/plus.png';
let minusImg='/static/images/minus.png';
// let i,curData,data;
let i=0;
Page({
  data: {
  	
  	plusImg:'/static/images/plus.png',
		minusImg:'/static/images/minus.png',
  	
  	hide:{},
    list:[{
      name:'一级',
    	user_id:'01',
    	up_user_id:'张三',
    	mobile:'15914468888',
    	flag:0,
    	nextLevel:[{
        name:'二级',
        user_id:'0101',
        up_user_id:'张三',
        mobile:'15914468888',
        flag:0,
        nextLevel:[{
          name:'三级',
          user_id:'010101',
          up_user_id:'张三',
          mobile:'15914468888',
          flag:0,
          nextLevel:[{
            name:'四级',
            user_id:'01010101',
            up_user_id:'张三',
            mobile:'15914468888',
            flag:0,
            nextLevel:[{
              name:'五级',
              user_id:'0101010101',
              up_user_id:'张三',
              mobile:'15914468888',
              flag:0,
              nextLevel:[{
                name:'六级',
                user_id:'010101010101',
                up_user_id:'张三',
                mobile:'15914468888',
                flag:0,
                nextLevel:[{
                  name:'七级',
                  user_id:'01010101010101',
                  up_user_id:'张三',
                  mobile:'15914468888',
                  flag:0,
                  nextLevel:[{
                    name:'八级',
                    user_id:'0101010101010101',
                    up_user_id:'张三',
                    mobile:'15914468888',
                    flag:0,
                    nextLevel:[{
                      name:'九级',
                      user_id:'010101010101010101',
                      up_user_id:'张三',
                      mobile:'15914468888',
                      flag:0
                    },{
                      name:'九级',
                      user_id:'010101010101010102',
                      up_user_id:'张四',
                      mobile:'15914468888',
                      flag:0,
                      nextLevel:[{
                        name:'十级',
                        user_id:'010101010101010102',
                        up_user_id:'张四',
                        mobile:'15914468888',
                        flag:0
                      }]
                    },{
                      name:'九级',
                      user_id:'010101010101010103',
                      up_user_id:'张五',
                      mobile:'15914468888',
                      flag:0,
                      nextLevel:[{
                        name:'十级',
                        user_id:'010101010101010102',
                        up_user_id:'张四',
                        mobile:'15914468888',
                        flag:0
                      }]
                    }]
                  }]
                }]
              }]
            }]
          }]
        }]
    	}],
    }],
    content:[],
  },
  hide:function(ev){
  	let user_id = ev.currentTarget.dataset.id;
  	// console.log(user_id);
	  console.log('goal:',user_id);

  	let dataSource;
  	new Promise(resolve=>{
      // dataSource = JSON.parse(JSON.stringify(this.data.content));
      // 修该content值为list测试时，需要改动的有这里this.data.list和下面then重新赋值list的位置
  		dataSource = JSON.parse(JSON.stringify(this.data.list));
	  	this.traverseBF(dataSource,user_id);
	  	console.log('res:',dataSource);
	  	resolve();
  	}).then(()=>{
  		this.setData({
	  		// content:dataSource
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
	  	if(curData.user_id===goal){
	  		curData.flag = !curData.flag;
	  		console.log('user_id:',curData.user_id);
	  		break;
	  	}
	  	if(curData.nextLevel){
	  		this.traverseBF(curData.nextLevel,goal);
	  	}
	  }
	},
  jump:function(ev){
    let user_id = ev.currentTarget.dataset.id;
    // console.log(user_id);
    console.log('jump Id:',user_id);
    wx.navigateTo({
      url: '/pages/nextLevelpage/nextLevelpage?id=' + encodeURIComponent(user_id),
    })
  },
  onLoad: function () {
	  wx.request({
		  url: 'http://user.jp580.com/index.php/WXAPI/User/userLevelList',
		  data: {
		    data:{user_id:'45430'}
		  },
		  header: {
		    'content-type': 'application/json' // 默认值
		  },
		  success: res=>{
		  	let content = res.data.content;
		    console.log(content);
		    this.setData({
		    	content:content
		    })
		  }
		})
  },
})
