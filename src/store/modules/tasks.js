export default {
  state: {
    tasks: [
      /*{
        id: 1,
        text: "",
        isComplete: true
      }*/
    ],
    tabs: [
      {
        id: 1,
        text: "all",
        checked: true
      },
      {
        id: 2,
        text: "active",
        checked: false
      },
      {
        id: 3,
        text: "completed",
        checked: false
      }
    ],
    filter: "all"
  },
  getters: {
    validTasks(state) {
      return state.tasks.filter(t => {
        return t.text;
      });
    },
    allTasks(state) {
      return state.tasks;
    },
    allTasksLength(state, getters) {
      return getters.validTasks.length;
    },
    activeTasksLength(state, getters) {
      return getters.validTasks.filter(task => !task.isComplete).length;
    },
    activeTasks(state, getters) {
      return getters.validTasks.filter(task => !task.isComplete);
    },
    completedTasks(state, getters) {
      return getters.validTasks.filter(task => task.isComplete);
    },
    allTabs(state) {
      return state.tabs.filter(tab => {
        return tab.text;
      });
    },
    filteredTasks(state, getters) {
      switch (state.filter) {
        case "all":
          return getters.validTasks;
        case "active":
          return getters.activeTasks;
        case "completed":
          return getters.completedTasks;
      }
    }
  },
  actions: {},
  mutations: {
    createTask(state, newTaskText) {
      state.tasks.unshift({
        id: Date.now(),
        text: newTaskText,
        isComplete: false
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeStatus(state, id) {
      state.tasks.map(task => {
        if (task.id === id) task.isComplete = !task.isComplete;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeAllStatus(state) {
      state.tasks.map(task => {
        task.isComplete = true;
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    changeTabStatus(state, id) {
      state.tabs.map(tab => {
        tab.checked = false;
      });
      state.tabs.map(tab => {
        if (tab.id === id) {
          state.filter = tab.text;
          tab.checked = true;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteCompleted(state) {
      state.tasks = state.tasks.filter(task => !task.isComplete);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  }
};
