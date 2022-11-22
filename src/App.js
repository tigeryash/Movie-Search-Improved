import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Search from './Search';
import List from './List';

export default function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Search />}/>
        <Route path="/mywatchlist" element={<List />} />
      </Routes>
    </div>
  );
}
