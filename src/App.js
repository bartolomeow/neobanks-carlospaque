import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './App.css';

const Home = lazy(() => import("./pages/home/Home.jsx"));


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
