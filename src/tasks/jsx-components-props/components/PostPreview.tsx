import React from "react";
import Card from "./Card";
import styles from "../styles.module.css";
import clsx from "clsx";

interface PostPreviewProps {
  thumbnail?: string;
  title: string;
  author: string;
  content: string;
  featured?: boolean;
}

const PostPreview: React.FC<PostPreviewProps> = ({
  thumbnail = "https://placehold.co/600x400?text=No+Thumbnail",
  title,
  author,
  content,
  featured = false,
}) => {
  return (
    <Card size={featured ? "full" : "medium"}>
      <div
        className={clsx(
          styles["post-wrapper"],
          featured && styles["post-wrapper--featured"]
        )}
      >
        <img
          src={thumbnail}
          className={clsx(
            styles["post-thumbnail"],
            styles["post-thumbnail--featured"]
          )}
          alt="Post Thumbnail"
        />

        <div className={styles["post-info"]}>
          <div className={styles["post-title"]}>{title}</div>
          <span className={styles["post-author"]}>by {author}</span>
          <p className={styles["post-content"]}>{content}</p>
        </div>
      </div>
    </Card>
  );
};

export default PostPreview;
