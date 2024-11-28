import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './1-lesson/App'
import "./style.css";
import App2 from "./2-lesson/App2"


ReactDOM. createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 />
  </React.StrictMode>,
)
