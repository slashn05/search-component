import React, { useState } from 'react';

const Problem = () => {
  const [count, setCount] = useState(0);
  const showAlert = (cnt) => alert("You clicked on: " + cnt);

  const handleAlertClick = (cnt) => {
    setTimeout(() => {
      showAlert(cnt);
    }, 5000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleAlertClick(count)}>Show alert</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Problem;
