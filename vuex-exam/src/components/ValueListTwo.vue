<template>
  <div class="ValueListTwo">
    <ul>
      <li v-for="(item,index) in saleProducts" :key="index">
        <span>{{item.name}}</span>
        <span class="price">${{item.price}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "ValueListTwo",
  // props: {
  //   value: {
  //     type: Array
  //   }
  // }，
  computed: {
    //vuex中的数据管理就是通过computed 返回store文件件中存储的数据拿到数据
    values() {
      return this.$store.state;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
};
</script>
<style scoped>
.ValueListTwo {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.ValueListTwo ul {
  padding: 0;
  list-style-type: none;
}
.ValueListTwo li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>