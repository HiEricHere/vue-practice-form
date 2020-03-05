<template>
  <form @submit.prevent>
    <input type="text" :placeholder="titleplaceholder" v-model="titleInput">
    <textarea type="text" :placeholder="textplaceholder" v-model="textInput" rows="10"/>
    <button type="submit" @click="handleSubmit" :disabled="checkContent">submit</button>
    <p>Title: {{titleInput}}</p>
    <p>Body: {{textInput}}</p>
    <p>ID: {{postCount}}</p>
    <p>Under the hood: {{posts}}</p>
  </form>
</template>

<script>
import Post from "../helper/post";

export default {
  name: "PostForm",
  props: ["posts"],
  data: function() {
    return {
      postCount: 0,
      titleplaceholder: "title",
      textplaceholder: "drop some mad wisdom here",
      titleInput: "",
      textInput: ""
    };
  },
  methods: {
    handleSubmit: function() {
      this.$emit("update", { type: "add", payload: this.generatePost() });
      this.addPostCount(this.postCount);
      this.resetFields();
    },
    generatePost: function() {
      return Post(this.postCount, this.titleInput, this.textInput);
    },
    addPostCount: function() {
      this.postCount += 1;
    },
    resetFields: function() {
      this.titleInput = "";
      this.textInput = "";
    }
  },
  computed: {
    checkContent: function() {
      return !(this.titleInput.length && this.textInput.length);
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
  line-height: 1.15rem;
}
form {
  display: grid;
  grid-template-rows: auto;
  row-gap: 2vw;
}
button {
  width: 20%;
  padding: 1vw;
}

textarea,
input {
  font-size: 0.8rem;
  padding: 1vw;
  font-family: Helvetica, sans-serif;
  line-height: 1.1rem;
}
</style>
