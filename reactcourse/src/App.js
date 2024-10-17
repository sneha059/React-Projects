import { startTransition, useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c = 1)
  }

useEffect(function () {
  getAdvice();
}, []);

  return (<div>
    <h1>{advice}</h1>
    <h3>by codersneu</h3>
    <button onClick={getAdvice}>get my two sents</button>
    <Message count={count} />
  </div>
  );
}
function Message(props) {
  return (
    <p> you've read <strong>{props.count}</strong> cents </p>
  );
}

