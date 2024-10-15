import { useEffect, useState } from "react";

export default function App(){
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice(){
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);
  }

 return( <div>
    <h1>{advice}</h1>
    <h3>by codersneu</h3>
    <button onClick={getAdvice}>get my two sents</button>
    <p>you've read <strong>{count}</strong> cents</p>
  </div>
 )
}


