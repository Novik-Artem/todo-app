<template>
  <div class="content">
    <div class="conteiner">
      <Title />
      <div class="block">
        <BlockTop />
        <div class="block__task task" v-if="filteredTasks.length != 0 ">
          <BlockTask
            v-for="(task, index) in filteredTasks"
            :key="task.id"
            :index="index"
            :taskText="task.text"
            :taskChecked="task.isComplete"
            :id="task.id"
          />
        </div>
        <div class="no__tasks" v-else>No tasks, add the first</div>
        <BlockMenu />
      </div>
      <BlockShadow1 />
      <BlockShadow2 />
    </div>
  </div>
</template>
<script>
import Title from "./Title";
import BlockTop from "./BlockTop";
import BlockTask from "./BlockTask";
import BlockMenu from "./BlockMenu";
import BlockShadow1 from "./BlockShadow1";
import BlockShadow2 from "./BlockShadow2";
import { mapGetters } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["filteredTasks"]),
  components: {
    Title,
    BlockTop,
    BlockTask,
    BlockMenu,
    BlockShadow1,
    BlockShadow2
  }
};
</script>
<style>
.no__tasks {
   color: #bebebe;
   padding: 1rem 1rem 1rem 0.7rem;
   display: block;
   font-size: 1.125rem;
   text-align: left;
}
.content {
  min-height: 100vh;
  background-color: #e0e0e0;
  padding: 50px 0 0 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.conteiner {
  max-width: 434px;
  margin: 0 auto;
  text-align: center;
}
.task {
  max-height: 167px;
  overflow: auto;
}
@media (max-width: 390px) {
  .menu__row {
    padding: 10px 10px 0 10px;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 14px;
  }
  .menu__column {
    margin: 0 0 10px 0;
  }
  .menu__column:first-child {
    flex: 1 1 100%;
    margin: 0;
    order: 3;
  }
  .menu__column:nth-child(2) {
    margin: 0 0 15px 0;
    order: 1;
  }
  .menu__column:last-child {
    padding: 0 10px;
    order: 2;
  }
}
@media (max-width: 322px) {
  .menu__row {
    font-size: 13.5px;
  }
}
</style>
