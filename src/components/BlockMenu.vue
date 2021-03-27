<template>
  <div class="block__menu menu">
    <div class="menu__row">
      <div class="menu__column">
        {{ activeTasksLength }}/{{ allTasksLength }} left
      </div>
      <div class="menu__column">
        <form class="menu__list">
          <Label v-for="tab in allTabs" :key="tab.id" :tabText="tab.text" :id="tab.id" :isChoosen="tab.checked"/>
        </form>
      </div>
      <div class="menu__column" @click="clearCompleted">
        clear completed
      </div>
    </div>
  </div>
</template>
<script>
import Label from "./Label";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "BlockMenu",
  computed: mapGetters(["allTasksLength", "activeTasksLength", "allTabs"]),
  components: {
    Label
  },
  methods: {
     ...mapMutations(["deleteCompleted"]),
     clearCompleted() {
        this.deleteCompleted()
     }
  }
};
</script>
<style>
.menu__row {
  padding: 15px 10px 10px 10px;
  display: flex;
  justify-content: space-between;
  color: #afafad;
  font-size: 16px;
  cursor: pointer;
  border-top: 2px solid #afafad;
}
.menu__list {
  display: flex;
}
</style>
