<template>
  <div class="container">
    <Header title="Task Tracker" />
    <AddTask />
    <TasksItem @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>


<script>
import Header from "./components/Header.vue";
import TasksItem from "./components/TasksItem.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    TasksItem,
    AddTask
  },
  
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      } 
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Learn Vue",
        day: "April 25 to May 10",
        complete: false, 
      },
      {
        id: 2,
        text: "Learn Node",
        day: "May 10 to May 31",
        complete: true,
      },
      {
        id: 3,
        text: "Learn Backend",
        day: "June 01 to July 31",
        complete: false,
      },
    ];
  },
};
</script>





<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
 