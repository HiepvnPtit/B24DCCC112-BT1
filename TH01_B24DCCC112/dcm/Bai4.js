import React from 'react'
import { useState } from 'react';
function Thich(conten) {
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    return <div>
        <div>{conten}<button onClick={() => setLike(like + 1)}>like {like}</button>
        <button onClick={() => setDislike(dislike + 1)}>dislike {dislike}</button></div>
    
        
    </div>
}
export default function Bai4() {

  return (
    <div>
        {Thich("bài 1 rất hay")}
        {Thich("bài 2 rất hay")}
        {Thich("bài 3 rất hay")}
        {Thich("bài 4 rất hay")}
        {Thich("bài 5 rất hay")}
        
    </div>
  )
}
