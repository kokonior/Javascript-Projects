import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from './store/ReduxStore'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter >
  <Routes>
    <Route path="*" element={<App/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
