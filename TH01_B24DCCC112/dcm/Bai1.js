import React, {useState} from "react";

export default function DanhSachCongViec() {
  const [CongViec, setCongViec] = useState("");
  const [Arr, setArr] = useState([]);



  const removeCongViec = (index) => {
    setArr(Arr.filter((t, i) => i !== index));
  };
  const addCongViec = () => {
    if (CongViec === "") return;
    setArr([...Arr, CongViec]);
    
  };
  return (
    <div>
      
      <input
        value={CongViec}
        onChange={(e) => setCongViec(e.target.value)}
        placeholder="Nhập input"
        style={{ marginRight: 10,  paddingLeft:10,border:"1px solid black",color:"red"}}
      />
      <button onClick={addCongViec} style={{ paddingLeft:10,border:"1px solid black",color:"red"}}>thêm</button>
      <div>
        {Arr.map((cv, id) => (
          <div key={id}>{cv} <button onClick={() => removeCongViec(id)}>bỏ</button></div>
        ))}
      </div>
    </div>
  );
}


