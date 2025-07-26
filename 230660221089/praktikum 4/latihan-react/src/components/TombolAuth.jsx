// src/components/TombolAuth.jsx
import React, { useState } from 'react';
import './TombolAuth.css';

function TombolAuth() {
  const [sudahLogin, setSudahLogin] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setSudahLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setSudahLogin(false);
  };

  return (
    <div className="auth-container"> {/* Menggunakan className */}
      {sudahLogin ? (
        <>
          <h2>Selamat Datang Kembali!</h2>
          <button onClick={handleLogout} className="logout-button">Logout</button> {/* Menambahkan kelas */}
        </>
      ) : (
        <>
          <h2>Anda belum login. Silakan login.</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default TombolAuth;