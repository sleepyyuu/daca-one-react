import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const [submission, setSubmission] = useState([]);
  return (
    <BrowserRouter>
      <Header setSubmission={setSubmission}></Header>
    </BrowserRouter>
  );
}

export default App;
