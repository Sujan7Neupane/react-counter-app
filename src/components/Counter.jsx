import React, { useEffect, useState } from "react";
import "./counter.css";

const Counter = () => {
  useEffect(() => {
    alert("Welcome to the Counter React App");
  }, []);

  const [count, setCount] = useState(0);
  let decUpdate = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  let incUpdate = () => {
    if (count >= 20) {
      setCount(20);
      console.log('The max number exceeds more than 20')
    } else {
      setCount(count + 1);
    }
  };
  return (
    <section className="main-section">
      <div className="container">
        <h1 className="main-title">React Counter App</h1>
        <div className="content-wrapper">
          <button onClick={decUpdate} className="dec-button">
            -
          </button>
          <h2 className="changing-num">{count}</h2>
          <button onClick={incUpdate} className="inc-button">
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
