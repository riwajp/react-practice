import React from "react";
import posts from "./posts.json";
import PostPreview from "./components/PostPreview";
import styles from "./styles.module.css";

const PostList: React.FC = () => {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostPreview
          title={post.title}
          author={post.author}
          content={post.content}
          thumbnail={post.thumbnail}
          featured={post.featured}
        />
      ))}
    </div>
  );
};

export default PostList;
