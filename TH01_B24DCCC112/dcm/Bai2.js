import React, { useState } from 'react';

function HinhVuong({ color }) {
  return <div style={{ width: 100, height: 100, backgroundColor: color }}></div>;
}

export default function Bai2() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("yellow")}>yellow</button>
      <button onClick={() => setColor("green")}>green</button>
      <HinhVuong color={color} />
    </div>
  );
}