import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import PostForm from "./components/PostForm";

export interface Post {
  id: string;
  title: string;
  content: string;
}

const STORAGE_KEY = "blog_min_posts";
const SEED: Post[] = [
  { id: "1", title: "Hello Blog", content: "tố cáo long chagpt" },
  { id: "2", title: "React Router", content: "gà chiên giòn" },
  { id: "3", title: "TypeScript", content: "Dùng interface Post " },
  { id: "4", title: "LocalStorage", content: "Lưu trữ dữ liệu trên trình duyệt" },
  { id: "5", title: "Chức năng CRUD", content: "Tạo, đọc, sửa, xóa bài viết" },
];

const load = (): Post[] => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED));
    return SEED;
  }
  try { return JSON.parse(raw) as Post[]; } catch { return SEED; }
};
const save = (p: Post[]) => localStorage.setItem(STORAGE_KEY, JSON.stringify(p));


const CreatePage: React.FC<{ posts: Post[]; setPosts: (p: Post[]) => void }> = ({ posts, setPosts }) => {
  const nav = useNavigate();
  return (
    <PostForm
      onSubmit={(data) => {
        const next = [{ id: String(Date.now()), ...data }, ...posts];
        setPosts(next); save(next); nav("/");
      }}
      onCancel={() => nav("/")}
    />
  );
};

const EditPage: React.FC<{ posts: Post[]; setPosts: (p: Post[]) => void }> = ({ posts, setPosts }) => {
  const { id } = useParams();
  const nav = useNavigate();
  const post = posts.find((p) => p.id === id);
  if (!post) return <div>Not found.</div>;
  return (
    <PostForm
      initial={post}
      onSubmit={(data) => {
        const next = posts.map((p) => (p.id === post.id ? { ...p, ...data } : p));
        setPosts(next); save(next); nav(`/posts/${post.id}`);
      }}
      onCancel={() => nav(`/posts/${post.id}`)}
    />
  );
};

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(() => load());
  useEffect(() => { if (!posts.length) { setPosts(SEED); save(SEED); } }, []); // seed lần đầu

  const deletePost = (id: string) => {
    const next = posts.filter((p) => p.id !== id);
    setPosts(next); save(next);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList posts={posts} onDelete={deletePost} />} />
        <Route path="/posts" element={<Navigate to="/" replace />} />
        <Route path="/create" element={<CreatePage posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={<PostDetail posts={posts} onDelete={deletePost} />} />
        <Route path="/posts/edit/:id" element={<EditPage posts={posts} setPosts={setPosts} />} />
        <Route path="*" element={<div>Not found.</div>} />
      </Routes>
    </div>
  );
};

export default App;
