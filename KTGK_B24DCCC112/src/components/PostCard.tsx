import React from "react";
import { useNavigate } from "react-router-dom";
import type { Post } from "../App";

const PostCard: React.FC<{ post: Post; onDelete: (id: string) => void }> = ({ post, onDelete }) => {
  const nav = useNavigate();
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>{post.title}</h3>
      <p style={{ whiteSpace: "pre-line" }}>{post.content.slice(0, 120)}{post.content.length > 120 ? "…" : ""}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => nav(`/posts/${post.id}`)}>Đọc thêm</button>
        <button onClick={() => onDelete(post.id)}>Xóa</button>
      </div>
    </div>
  );
};
export default PostCard;
