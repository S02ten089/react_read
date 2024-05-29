import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/common/Home';
import About from './components/common/About';
import NotFound from './components/Error/NotFound';
import Login from './components/common/Login/Login';
import ErrorBoundary from './components/Error/ErrorBoundary';
import LoginList from './components/common/Login/ListLogin'
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
