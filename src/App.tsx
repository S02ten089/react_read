import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Login from './components/Login';
import ErrorBoundary from './components/ErrorBoundary';
import LoginList from './components/ListLogin'
const App: React.FC = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login/list" element={<LoginList />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
