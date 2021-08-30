import React, { useState } from 'react';

const Problem = () => {
  const [count, setCount] = useState(0);
  const showAlert = () => alert("You clicked on: " + count);

  const handleAlertClick = () => {
    setTimeout(() => {
      showAlert();
    }, 5000);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleAlertClick}>Show alert</button>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Problem;
