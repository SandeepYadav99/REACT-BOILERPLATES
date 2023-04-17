import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './app/containers/Auth/Login';
import DashboardLayout from './app/containers/DashboardLayout/DashboardLayout';
import ErrorBoundary from './app/hoc/ErrorBoundaryComponent';
function App() {
  const [count, setCount] = useState(0);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<DashboardLayout />} />
          <Route path="/*" element={<Navigate replace to={'/dashboard/login'} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
