import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 파일 이름은 항상 .js를 빼고 입력. 

// 페이지가 로드되면 가장 먼저 실행되는 파일. 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

