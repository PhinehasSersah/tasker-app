
<template>
  <header>{{title}}
      <Button @show-add-task="$emit('show-add-task')" :text='buttonText? "Close": "Add Task"' :color='buttonText? "red": "green"' />
  </header>
</template>
<script>

import Button from './Button.vue';
export default {
  name: "TodoHeader",
  props: {
      title:{
          type: String,
          required: true
      },
      buttonText:{
        type: Boolean
      }
  }, 
  components: {
        Button
  }
};
</script> 

<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

</style>