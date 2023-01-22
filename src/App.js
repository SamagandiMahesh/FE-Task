import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import Loader from "./components/atoms/Loader/Loader";

import Layout from "./pages/Layout";

const Home = React.lazy(() => import("./pages/Home"));
const Results = React.lazy(() => import("./pages/Results"));
const NoMatch =  React.lazy(() => import("./pages/NoMatch"));

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={ <React.Suspense fallback={<Loader />}>
            <Home />
          </React.Suspense>} />
      <Route path="home" element={
         <React.Suspense fallback={<Loader />}>
         <Home />
       </React.Suspense>
      } />
      <Route
        path="results"
        element={
          <React.Suspense fallback={<Loader />}>
            <Results />
          </React.Suspense>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
  );
}