import logo from './logo.svg';
import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './App.css';

const Home = lazy(() => import("./pages/home/Home.jsx"));


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
