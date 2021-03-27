<template>
  <label class="label">
    <input class="radio" type="radio" @click="Change" :checked="isChoosen"/>
    <span class="fake"></span>
    <span class="menu__item">{{ tabText }}</span>
  </label>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
   computed: mapGetters(["tasksFilter"]),
  props: {
    tabText: String,
    id: Number,
    isChoosen: Boolean
  },
  methods: {
   ...mapMutations(["changeTabStatus"]),
   Change() {
      this.changeTabStatus(this.id)
   }
   
  }
};
</script>
<style>
.radio {
  display: none;
}
.fake:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px solid #afafad;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  padding: 2.5px;
}
.radio:checked + .fake:before {
  opacity: 1;
}
.menu__item {
  margin: 0 8px;
}
.label {
  cursor: pointer;
  position: relative;
}
</style>
