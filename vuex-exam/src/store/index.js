import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = [
  { name: "alvis", price: 200 },
  { name: "han", price: 66 },
  { name: "li", price: 45 },
  { name: "zhong", price: 10 }
]

export default new Vuex.Store({
  state,
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.map(product => {
        return {
          name: "--" + product.name + "--",
          price: product.price / 2
        };
      });
      return saleProducts;
    }
  },
  mutations: {
    reducePrice: (state, payload) => {
      //如果是几秒钟后触发 在Vue-devtool中可以看出 方法触发了但是数据的变化是几秒后变化的，如果我多次点击的话那就不利于开发人员调试了，所以需要使用action
      // setTimeout(function () {
      state.forEach(item => {
        item.price -= payload;
      });
      // }, 3000)
    }
  },
  actions: {
    //异步执行
    // actions 中调用mutations中的函数
    //payload 接收来自页面的的参数用payload接收
    reducePrice: (context, payload) => {
      setTimeout(() => {
        //这里的context相当与this.$store,action中相当于用context激活mutations中的函数
        context.commit("reducePrice", payload)
      }, 3000);
    }
  },
  modules: {
  }
})
