<template>
  <div id="app">
    <value-list-one></value-list-one>
    <value-list-two></value-list-two>
  </div>
</template>

<script>
import ValueListOne from "./components/ValueListOne.vue";
import ValueListTwo from "./components/ValueListTwo.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    "value-list-one": ValueListOne,
    "value-list-two": ValueListTwo
  }
};
</script>

<style>
</style>
