import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { routes } from './config/Router';

import './App.css';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.title} exact={route.exact} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
