<template>
  <label class="task__label">
    <input class="checkbox" type="checkbox" :checked="taskChecked" @click="Change" />
    <span class="task__fake"></span>
    <span class="task__item">{{ taskText }}</span>
    <button class="btn" @click="Delete">delete</button>
  </label>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: {
    taskText: String,
    taskChecked: Boolean,
    index: Number,
    id: Number
  },
  methods: {
     ...mapMutations(["deleteTask", "changeStatus"]),
     Delete() {
         this.deleteTask(this.index)
     },
     Change() {
        this.changeStatus(this.id)
     }

  }
};
</script>
<style scoped>
.task__label {
  display: flex;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  border-bottom: 1px solid #afafad;
  position: relative;
}
.btn {
  cursor: pointer;
  text-decoration: none;
  color: #000;
  padding: 3px;
  border: 1px solid #afafad;
  border-radius: 3px;
  position: absolute;
  left: 85%;
}
.checkbox {
  display: none;
}
.task__item {
  padding: 0 0 0 15px;
  font-size: 20px;
}
.task__fake {
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #afafad;
  position: relative;
  left: 5px;
}
.task__fake:before {
  content: "";
  position: absolute;
  top: 7px;
  left: 5px;
  opacity: 0;
  border: 2px solid #66bb6a;
  border-top-color: rgb(102, 187, 106);
  border-top-style: solid;
  border-top-width: 2px;
  border-right-color: rgb(102, 187, 106);
  border-right-style: solid;
  border-right-width: 2px;
  border-top: none;
  border-right: none;
  transform: rotate(-45deg);
  width: 0.89rem;
  height: 0.39rem;
  transition: 0.2s;
}
.checkbox:checked + .task__fake:before {
  opacity: 1;
}
.checkbox:checked ~ .task__item {
  text-decoration: line-through;
  color: #afafad;
}
</style>
