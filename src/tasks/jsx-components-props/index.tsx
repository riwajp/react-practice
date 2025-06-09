import React from "react";
import posts from "./posts.json";
import PostPreview from "./components/PostPreview";
import styles from "./styles.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PostList: React.FC = () => {
  return (
    <div>
      <Header
        title="Task 1"
        links={[
          { label: "Home", href: "#" },
          { label: "Blog", href: "#" },
        ]}
      >
        <span style={{ fontSize: "1rem", marginLeft: "1rem", color: "#bbb" }}>
          by Riwaj
        </span>
      </Header>

      <div className={styles.posts}>
        {posts.map((post) => (
          <PostPreview
            key={post.id}
            title={post.title}
            author={post.author}
            content={post.content}
            thumbnail={post.thumbnail}
            featured={post.featured}
          />
        ))}
      </div>

      <Footer>
        <p>
          Built for learning and demonstration purposes.
          <br />
          <a
            href="https://github.com"
            style={{ color: "#007acc", textDecoration: "underline" }}
          >
            View Code
          </a>
        </p>
      </Footer>
    </div>
  );
};

export default PostList;
