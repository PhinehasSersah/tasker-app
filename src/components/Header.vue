
<template>
  <header>{{title}}
      <Button text='Add Task' color='green' />
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