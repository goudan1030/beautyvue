import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initGA } from './utils/gtag';

// 初始化 Google Analytics
const gaMeasurementId = process.env.VITE_GA_MEASUREMENT_ID || 'G-7X8TVVW2B9';
if (gaMeasurementId) {
  // 动态加载 Google Analytics 脚本
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  document.head.appendChild(script1);

  // 初始化 GA
  initGA(gaMeasurementId);
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);