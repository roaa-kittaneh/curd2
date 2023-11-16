import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './componant/user/Create.jsx';
import Index from './componant/user/Index.jsx';
import Detilas  from './componant/user/Detilas.jsx';
import Loader from './componant/user/Loader.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/user/Index" element={<Index />} />
      <Route path="/user/Create" element={<Create />} />
      <Route path="/user/:id" element={<Detilas />} />
      <Route path="*" element={<h2>user not found</h2>} />

    </Routes>
  );
}



