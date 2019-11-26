<template>
  <div class="ValueListOne">
    <ul>
      <li v-for="(item,index) in saleProducts" :key="index">
        <span>{{item.name}}</span>
        <span class="price">${{item.price}}</span>
      </li>
    </ul>
    <button @click="reducePrice(3)">discount5</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "ValueListOne",
  //父组件传递接收
  // props:["values"],
  // props: {
  //   values: {
  //     type: Array
  //   }
  // },
  computed: {
    //vuex中的数据管理就是通过computed 返回store文件件中存储的数据拿到数据
    values() {
      return this.$store.state;
    },
    //如果我们从store中拿的getters特别多的时候，可以使用getters辅助
    ...mapGetters([
      //依次类推的加入你要引用的getters中的方法
      "saleProducts"
    ])
    // saleProducts() {
    //   return this.$store.getters.saleProducts;
    // }
  },
  //同理，mapMethods也是有此类的方法
  methods: {
    reducePrice(amount) {
      // this.$store.state.forEach(item => {
      //   item.price -= 5;
      // });
      //点击按钮执行store中的mutation中的reducePrice方法
      // this.$store.commit("reducePrice");
      //调用action中的方法的时候调用分发dispatch(写上action中的分发调用的函数名,函数传参)
      this.$store.dispatch("reducePrice", amount);
    }
  }
};
</script>
<style scoped>
.ValueListOne {
  background: #fff8b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.ValueListOne ul {
  padding: 0;
}
.ValueListOne li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #e8800c;
}
</style>