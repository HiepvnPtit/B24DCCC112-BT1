import React from 'react'
import { useState } from 'react';

export default function Bai3() {
    
    const [Arr, setArr] = useState([]);
    const [count, setCount] = useState(0);
    const addItem = (newItem, price) => {
    if (newItem === "") return;
    setArr([...Arr, newItem]);
    setCount(count + price);
  };
    
    
  
  return (
    <div>
      
      
      
      <div>
        <button onClick={() => {setArr([]);setCount(0);}}>Xóa tất cả</button>
        <button onClick={() => addItem("Táo", 10000)}>Thêm táo 10.000đ</button>
        <button onClick={() => addItem("Cam", 20000)}>Thêm cam 20.000đ</button>
        <button onClick={() => addItem("Chuối", 15000)}>Thêm chuối 15.000đ</button>
        {Arr.map((Item, id) => (
          <div key={id}>{Item} </div>
        ))}
        <p>Tổng tiền: {count}đ</p>
      </div>
    </div>
  )
}
