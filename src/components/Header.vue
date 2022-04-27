
<template>
  <header>{{title}}
      <Button v-show="showButton" @show-add-task="$emit('show-add-task')" :text='buttonText? "Close": "Add Task"' :color='buttonText? "red": "green"' />
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
  },
  computed:{
    showButton() {
      if(this.$route.path === '/') return true;
      return false;
    }

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