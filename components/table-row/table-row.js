// components/table-row/table-row.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerLev:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    attached:function(){
      console.log('innerLev:',this.data.innerLev)
    }
  }
})
