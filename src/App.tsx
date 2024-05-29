import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/common/Home';
import About from './components/common/About';
import NotFound from './components/Error/NotFound';
import Login from './components/common/Login/Login';
import ErrorBoundary from './components/Error/ErrorBoundary';
import LoginList from './components/common/Login/ListLogin'
import UseActionState from './components/Hooks/useActionState/VD_Use/use_Api'
import UseCallback from './components/Hooks/useCallback/index'
import UseContext from './components/Hooks/useContext/App';
import FriendStatus from './components/Hooks/useDebugValue';
const App: React.FC = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routes>
          {/* run */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* UI Login */}
          <Route path="/login" element={<Login />} />
          <Route path="/login/list" element={<LoginList />} />
          
          {/* Error */}
          <Route path="*" element={<NotFound />} />
          
          {/* ví dụ Hooks*/}
          <Route path="/hooks/use_api/UseActionState" element={<UseActionState />} />
          <Route path="/hooks/use_api/useCallback" element={<UseCallback />} />
          <Route path="/hooks/use_api/useContext" element={<UseContext />} />
          <Route path="/hooks/use_api/useDebugValue" element={<FriendStatus />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
