<template>
  <section>
    <PostForm :posts="posts" @update="handleUpdate"/>
    <PostList :posts="posts" @update="handleUpdate"/>
  </section>
</template>

<script>
import PostForm from "./PostForm";
import PostList from "./PostList";

export default {
  components: {
    PostForm,
    PostList
  },
  name: "PostSection",
  data: function() {
    return {
      posts: []
    };
  },
  methods: {
    addPost: function(post) {
      this.posts.push(post);
    },
    removePost: function(index) {
      this.posts.splice(index, 1);
    },
    handleUpdate: function(action) {
      switch (action.type) {
        case "add":
          this.added += 1;
          this.addPost(action.payload);
          break;
        case "remove":
          this.removed += 1;
          this.removePost(action.payload);
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
section {
  width: 75vw;
}
</style>
