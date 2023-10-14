import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/Reducer.js";
import { BrowserRouter as Router } from "react-router-dom";
const store = legacy_createStore(Reducer);
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
