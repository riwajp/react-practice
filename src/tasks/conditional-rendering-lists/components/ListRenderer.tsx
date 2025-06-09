import React from "react";
import styles from "../styles.module.css";
import clx from "clsx";

interface ListRendererProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  emptyMessage?: string;
  className?: string;
  isLoading?: boolean;
  loadingMessage?: string;
}

export function ListRenderer<T>({
  items,
  renderItem,
  emptyMessage = "No items found.",
  loadingMessage = "Loading...",
  isLoading = false,
  className,
}: ListRendererProps<T>) {
  if (isLoading) {
    return <p className={styles.loading}>{loadingMessage}</p>;
  }

  return (
    <div className={clx(styles.grid, className)}>
      {items.length === 0 && <p className={styles.empty}>{emptyMessage}</p>}
      {items.length > 0 && items.map(renderItem)}
    </div>
  );
}
