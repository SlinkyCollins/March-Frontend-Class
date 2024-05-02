import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import store from "./app/store.js"
import { Provider } from "react-redux"
// import "bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}>
     <App />
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
