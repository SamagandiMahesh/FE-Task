import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";?

// const client = new ApolloClient({
//   link: new HttpLink({uri:`http://localhost:4000/graphql`}),
//    cache: new InMemoryCache(),
//    onError: (e) => { console.log(e) },

// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
