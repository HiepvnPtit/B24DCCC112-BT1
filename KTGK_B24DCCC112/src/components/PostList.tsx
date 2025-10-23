import React from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import type { Post } from "../App";

const PostList: React.FC<{ posts: Post[]; onDelete: (id: string) => void }> = ({ posts, onDelete }) => {
  const nav = useNavigate();
  return (
    <div style={{ maxWidth: 960, margin: "16px auto", padding: "0 12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <div>Tổng: {posts.length} bài</div>
        <button onClick={() => nav("/create")}>Viết bài mới</button>
      </div>

      <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))" }}>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};
export default PostList;
