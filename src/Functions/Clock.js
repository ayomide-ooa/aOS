import React, { useState, useEffect } from "react"
 

export const Clock = () => {
const [dateState, setDateState] = useState(new Date());

useEffect(() => {
  setInterval(() => setDateState(new Date()), 1000);
}, []);

return (
  <div>
  { dateState.toLocaleString('en-US', {
    hour: "numeric",
    minute: "numeric",
    hour12: true
  })}
  </div>
);
}

export function RealDate() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);

  return (
<div>
  { dateState.toLocaleDateString('en-GB', {
    day: "numeric",
    month: "long",
    year: "numeric"
  })}
  </div>
  );
  }

//export default Clock;