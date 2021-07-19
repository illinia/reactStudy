import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

let seconds = 0;
function update() {
  seconds += 1;
  const element = (
    <div>
      <h1>안녕하세요</h1>
      <h2>지금가지 {seconds}초가 지났습니다.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(update, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
