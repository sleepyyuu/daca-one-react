import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LatestRenewal from "./components/Pages/LatestRenewal";
import AverageRenewal from "./components/Pages/AverageRenewal";
import AllRenewal from "./components/Pages/AllRenewal";

function App() {
  const [submission, setSubmission] = useState([]);
  return (
    <BrowserRouter>
      <Header setSubmission={setSubmission}></Header>
      <Routes>
        <Route path="/" index element={<LatestRenewal />} />
        <Route path="/averageRenewal/:averageMonths" element={<AverageRenewal />} />
        <Route path="/allRenewal" element={<AllRenewal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
