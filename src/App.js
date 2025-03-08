import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './assets/Login/Login';
import { LogoutButton } from './assets/Logout/Logout';
import { Profile } from './assets/Profile/Profile';
import React from 'react';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from 'primereact/api';
import { Routes, Route } from 'react-router-dom';
import Topbar from "./assets/componets/Topbar/Topbar";
import Dashboard from "./assets/componets/Dashboard/Dashboard";
import './App.css';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando aplicación...</p>
      </div>
    );
  }

  return (
    <PrimeReactProvider>
      <div className="app">
        {isAuthenticated ? (
          <div className="layout">
            <Topbar />
            <div className="content">
              <main>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/rh/*" element={<div><h2>Recursos Humanos</h2><p>Sección en construcción</p></div>} />
                  <Route path="/contabilidad/*" element={<div><h2>Contabilidad</h2><p>Sección en construcción</p></div>} />
                  <Route path="/ventas/*" element={<div><h2>Ventas</h2><p>Sección en construcción</p></div>} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </main>
            </div>
          </div>
        ) : (
          <div className="login-container">
            <LoginButton />
          </div>
        )}
      </div>
    </PrimeReactProvider>
  );
}

export default App;