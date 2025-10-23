import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav style={{ padding: "8px 12px", borderBottom: "1px solid #ddd" }}>
    <div style={{ display: "flex", justifyContent: "space-between", maxWidth: 960, margin: "0 auto" }}>
      <Link to="/" style={{ fontWeight: 700, textDecoration: "none", color: "#111" }}>Blog</Link>
      <div>
        <NavLink to="/" end style={{ marginRight: 12 }}>Trang chủ</NavLink>
        <NavLink to="/create">Viết bài</NavLink>
      </div>
    </div>
  </nav>
);

export default Navbar;
