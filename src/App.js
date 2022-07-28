import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useHistory } from "react-router-dom";
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import HistoryPage from './pages/HistoryPage';





function App() {

  const [clcikedArticleData, setClcikedArticleData] = useState([])
  
  const pull_data = (data) => {
    setClcikedArticleData(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    console.log(clcikedArticleData);
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage func={pull_data}/>} />
          <Route path="/history" element={<HistoryPage articleHistory={clcikedArticleData}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
