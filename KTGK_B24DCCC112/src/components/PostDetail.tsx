import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Post } from "../App";

const PostDetail: React.FC<{ posts: Post[]; onDelete: (id: string) => void }> = ({ posts, onDelete }) => {
  const { id } = useParams();
  const nav = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) return <div style={{ maxWidth: 960, margin: "16px auto", padding: "0 12px" }}>Không tìm thấy.</div>;

  return (
    <div style={{ maxWidth: 960, margin: "16px auto", padding: "0 12px" }}>
      <button onClick={() => nav(-1)}>Quay lại</button>
      <h1>{post.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{post.content}</p>
      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => nav(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
        <button onClick={() => { onDelete(post.id); nav("/"); }}>Xóa</button>
      </div>
    </div>
  );
};
export default PostDetail;
