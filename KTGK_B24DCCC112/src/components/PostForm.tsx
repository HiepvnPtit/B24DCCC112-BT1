import React, { useEffect, useState } from "react";
import type { Post } from "../App";

const PostForm: React.FC<{
  initial?: Post;
  onSubmit: (data: Omit<Post, "id">) => void;
  onCancel: () => void;
}> = ({ initial, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [content, setContent] = useState(initial?.content ?? "");

  useEffect(() => { if (initial) { setTitle(initial.title); setContent(initial.content); } }, [initial]);

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit({ title, content, id: (initial?.id ?? "").toString() } as any); }}
      style={{ maxWidth: 720, margin: "16px auto", padding: "0 12px", display: "grid", gap: 8 }}
    >
      <h2>{initial ? "Chỉnh sửa" : "Tạo bài viết"}</h2>
      <input placeholder="Tiêu đề" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Nội dung" rows={10} value={content} onChange={(e) => setContent(e.target.value)} />
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit">{initial ? "Cập nhật" : "Đăng bài"}</button>
        <button type="button" onClick={onCancel}>Hủy</button>
      </div>
    </form>
  );
};
export default PostForm;
