<template>
  <form @submit="onSubmit">
    <div class="form-group">
      <label for="task-text">Task Text</label>
      <input
        type="text"
        class="form-control"
        id="task-text"
        placeholder="Enter Task"
        v-model='text'
      />
    </div>

    <div class="form-group">
      <label for="task-day">Task Day</label>
      <input
        type="text"
        class="form-control"
        id="task-day"
        placeholder="Add Day & Time"
        v-model='day'
      />
    </div>
    <div class="form-group"> 
    
      <input
      
        type="submit"
        value="Save Task"
        class="save-button"
        
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
    };
  },
  methods: {
    onSubmit(e) {
        e.preventDefault();
        if(!this.text || !this.day) {
            alert("Please enter both task and day");
          return;
        }

        const newTask = { 
            id: this.tasks.length + 1,
            text: this.text,
            day: this.day,
            complete: false,
        }
        this.$emit("add-task", newTask);
        this.text = "";
        this.day = "";
    
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
  /* border: 2px solid #ccc; */
  height: 50px;
  padding: 10px;
}
#task-text,
#task-day {
  width: 60%;
  margin-left: 20px;
  border-radius: 4px;
  height: 30px;
}
::placeholder {
  padding: 5px;
}
.save-button {
    width: 100%;
    background: black;
    color: white; 
    height: 40px;
    border: none;
    border-radius: 5px;
    font-family: inherit
    ;
}
</style>