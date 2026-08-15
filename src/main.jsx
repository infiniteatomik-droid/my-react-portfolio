import React from "react";
import App from './App.jsx';
import './index.css';
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/my-react-portfolio">
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

