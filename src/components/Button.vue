<template>
  <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

    <script>
export default {
  name: "AddTaskButtton",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('show-add-task');
    },
  },
};
</script>