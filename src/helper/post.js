const Post = (id, title, post) => ({
  id,
  title,
  post,
  time: Date()
    .split(" ")
    .slice(0, 5)
    .join(" ")
});

export default Post;
