import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom";

export default function Bai2() {
  const [DanhSachSinhVien, setDanhSachSinhVien] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

    
    const fetchDanhSachSinhVien = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setDanhSachSinhVien(response.data); 
      } catch (err) {
        setError("Lỗi khi lấy dữ liệu người dùng");
      } finally {
        setLoading(false);
      }
    };
    fetchDanhSachSinhVien();
    if (loading) return <p>Đang tải dữ liệu...</p>;
    return (
        <div>
            <h1>Danh sách sinh vien</h1>
            <li>
                {DanhSachSinhVien.map((sv) => (
                     <li key={sv.id}>
                    <Link to={`/bai2/${sv.id}`}>{sv.name}</Link> - {sv.email}
                    </li>
                ))}
            </li>
        </div>
    );




}


