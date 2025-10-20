import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom";

interface Student {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function Bai2_1() {

    
 const [ThongTinChiTiet, setThongTinChiTiet] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);
   const {id} = useParams();


  useEffect(() => {
    axios
        .get<Student[]>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            setThongTinChiTiet(response.data);
        }
        )
        .catch((error) => {
          alert("Lỗi khi lấy dữ liệu người dùng");
        }
        )
        .finally(() => {
          setLoading(false);
        }
        );
    }, []);
   
    if (loading) return <p>Đang tải dữ liệu...</p>;
    
    return (
        <div>
            <h1>Chi tiết sinh vien</h1>
            <li>
                <p>Tên: {ThongTinChiTiet?.name}</p>
                <p>Email: {ThongTinChiTiet?.email}</p>
                <p>Phone: {ThongTinChiTiet?.phone}</p>
                
            </li>
        </div>
  );
}