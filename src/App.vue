<template>
  <div id="app">
    <PostSection/>
  </div>
</template>

<script>
import PostSection from "./components/PostSection";

export default {
  components: {
    PostSection
  },
  name: "App"
};
</script>

<style>
html {
  background-color: #222;
  color: #eee;
  font-size: 15px;
}
</style>
