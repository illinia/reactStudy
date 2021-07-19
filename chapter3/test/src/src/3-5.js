import React, { useState } from 'react';

function Title(props) {
  return <p>{props.title}</p>;
}

function MyComponent() {
  const [count, setCount] = useState({ value: 0 });
}

function Todo() {
  const [count, setCount] = useState({ value: 0 });
  function onClick() {
    count.value = 2;
    setCount(count);
  }
  return (
    <div>
      <Title title={`현재 카운트: ${count.value}`} />
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default Todo;