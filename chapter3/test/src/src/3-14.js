import React from 'react';

function Title({ title, color }) {
  return <p style={{ color }}>{title}</p>
}

function App() {
  console.log(<Title title="안녕하세요" color="blue" />)
  return (
    <Title title="안녕하세요" color="blue" />
  );
}

export default App;