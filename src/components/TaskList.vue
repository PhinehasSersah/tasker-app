<template>
  <div :class="[task.complete ? 'reminder': '', 'task']">
    <h3 :key="task.id" >{{ task.text }} <div class="wrapper" @click="onDelete(task.id)"> <i id="del" class="fas fa-times"> </i></div>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
  },
};
</script>
<style scoped >
.task {
    background-color: #f5f5f5;
    margin: 5px;
    padding: 10px 20px;
    /* cursor: pointer; */
}
 .reminder {
    border-left: 5px solid green;
}

.task h3 {
     display: flex;
     align-items: center;
     justify-content: space-between;
}
#del {
    color: red;
    cursor: pointer;
}
    
</style>