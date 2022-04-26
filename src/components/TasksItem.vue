<template>
  <div :key="task.id" v-for="task in tasks">
    <TaskList @delete-task="$emit('delete-task', task.id)"  :task="task" />
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
export default {
  name: "TasksItem",
  props: {
    tasks: Array,
  },
  components: {
    TaskList,
  },
  emits: ['delete-task'],
  
};
</script>