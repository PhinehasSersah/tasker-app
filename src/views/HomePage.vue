<template>
  <AddTask v-if="showAddTask" @add-task="addTask" />
  <TasksItem @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
import AddTask from "../components/AddTask.vue";
import TasksItem from "../components/TasksItem.vue";
export default {
  name: "HomePage",
  props: {
    showAddTask: Boolean,
  },
  components: {
    TasksItem,
    AddTask,
  },

  data() {
    return {
      tasks: [],
    };
  },

  methods: {
    addTask(newTask) {
      const response = fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });

      const data = response.json();

      this.tasks = [...this.tasks, data];
    },

    async deleteTask(id) {
      if (confirm("Are you sure you want to delete this task?")) {
        const response = await fetch(`/api/tasks/${id}`, {
          method: "DELETE",
        });
        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Something went wrong, please try again");
      }
    },

    async fetchTasks() {
      const response = await fetch("api/tasks");
      return response.json();
    },
  },

  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>