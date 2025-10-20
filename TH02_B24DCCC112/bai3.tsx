import axios from "axios";
import { useState, useEffect } from "react";

export default function Bai3() {
  const [ThongTin, setThongTin] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(() => {
    const fetchThongTin = async () => {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v4/articles?limit=10"
        );
        setThongTin(response.data.results); 
      } catch (err) {
        setError("Lỗi khi lấy dữ liệu bài viết");
      } finally {
        setLoading(false);
      }
    };

    fetchThongTin();
  }, []); 

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1>Bài 3</h1>
      <ul>
        {ThongTin.map((article) => (
          <li key={article.id}>
            <img src={article.image_url} alt={article.title} width="200" />
            <p>{article.title}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.news_site}
            </a>
            <p>{new Date(article.published_at).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
