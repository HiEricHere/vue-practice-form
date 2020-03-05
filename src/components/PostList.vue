<template>
  <ul>
    <li v-for="(post, index) in posts" :key="post.id" @click="handleRemove(index)">
      <p>Posted: {{post.time}}</p>
      <h3>{{post.title}}</h3>
      <p>{{post.post}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["posts"],
  name: "PostList",
  methods: {
    handleRemove: function(index) {
      this.$emit("update", { type: "remove", payload: index });
    }
  }
};
</script>

<style scoped>
li:hover {
  color: orange;
}
</style>
