<template>
  <form class="block__top" @submit.prevent="submit">
    <span @click="changeSt"></span>
    <input
      type="text"
      placeholder="Whats needs to be done ?"
      class="block__form"
      v-model="text"
    />
  </form>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    ...mapMutations(["createTask", "changeAllStatus"]),
    submit() {
      this.createTask(this.text);
      this.text = "";
    },
    changeSt() {
       this.changeAllStatus();
    }
  }
};
</script>
<style>
.block {
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px 0;
  border: 2px solid #afafad;
}
.block {
  border-bottom: 1px solid #afafad;
}
.block__form {
  display: inline-block;
  height: 40px;
  padding: 0 0 10px 30px;
  text-align: left;
  width: 93%;
  font-size: 18px;
  color: grey;
  font-style: italic;
  border: none;
  border-bottom: 2px solid #ababad;
}
.block__form:focus {
  border: none;
  outline: none;
  border-bottom: 2px solid #ababad;
}
.block__top span:before {
  content: "";
  position: absolute;
  top: 30px;
  left: 10px;
  width: 10px;
  height: 2px;
  background-color: #afafad;
  transform: rotate(45deg);
  cursor: pointer;
}
.block__top span:after {
  content: "";
  position: absolute;
  top: 30px;
  left: 15px;
  width: 10px;
  height: 2px;
  background-color: #afafad;
  transform: rotate(-45deg);
  cursor: pointer;
}
</style>
