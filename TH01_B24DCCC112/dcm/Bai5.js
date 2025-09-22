import React from 'react'
import { useState } from 'react';

export default function Bai5() {
    const cauhoi=[{
        noidung:"con vịt có mấy chân",
        dapan:["2","3","4","5"],
        dapanDung:0
        },
        {
        noidung:"con chó có mấy chân",
        dapan:["2","3","4","5"],
        dapanDung:2
        },
        {
        noidung:"1+1=?",
        dapan:["1","3","2","5"],
        dapanDung:2}
    ]
    const [indexCauhoi,setIndexCauhoi] = useState(0)
    const [count,setCount]=useState(0);
    const traloi = (dapan) => {
        if (indexCauhoi >= cauhoi.length) return;
        if (dapan===cauhoi[indexCauhoi].dapanDung) {
            setCount(count+1);
        }
        setIndexCauhoi(indexCauhoi+1);

    }
  return (
    <div>
        {indexCauhoi < cauhoi.length ? <div>
            <p>{cauhoi[indexCauhoi].noidung}</p>
            {cauhoi[indexCauhoi].dapan.map((item,index)=><button key={index} onClick={()=>traloi(index)}>{item}</button>)}
    </div>
    : <div>
        <p>bạn đã trả lời đúng {count} trên {cauhoi.length} câu</p>
        <button onClick={() => {setIndexCauhoi(0); setCount(0);}}>Chơi lại</button>
    </div>}
    </div>
  )
}
