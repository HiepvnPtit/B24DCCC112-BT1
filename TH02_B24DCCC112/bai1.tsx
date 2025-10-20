import axios from "axios";
import {useState} from "react";

export default function Bai1() {
    const [thoiTiet, setThoiTiet] = useState<any>(null);
    const [nhietDo, setNhietDo] = useState<number | null>(null);
    const [thanhPho, setThanhPho] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    
    

    const fetchWeatherAPI = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://wttr.in/${thanhPho}?format=j1`
            );
            
            const tempC = parseFloat(response.data.current_condition[0].temp_C);
            const weatherDesc = response.data.current_condition[0].weatherDesc[0].value;
            setNhietDo(tempC);
            setThoiTiet(weatherDesc);
            setLoading(false);
        } catch (error) {
            alert("Lỗi khi lấy dữ liệu thời tiết");
            setThoiTiet(null);
            setNhietDo(null);
        }
    };

    return (
        <div>
            <h1>Dự báo thời tiết</h1>
            <input
                type="text"
                value={thanhPho}
                onChange={(e) => setThanhPho(e.target.value)}
                placeholder="Nhập tên thành phố"
            />
            <button onClick={fetchWeatherAPI}>Lấy thời tiết</button>
            {loading && <p>Đang tải...</p>}
            {thoiTiet && nhietDo !== null && !loading && (
                <div>
                    <h2>Thời tiết tại {thanhPho}:</h2>
                    <p>Nhiệt độ: {nhietDo}°C</p>
                    <p>Mô tả: {thoiTiet}</p>
                </div>
            )}
        </div>
    );
}