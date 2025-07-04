import React, { useState } from "react";

function TombolAuth() {
  // Baca status login dari localStorage saat pertama kali render
  const [sudahLogin, setSudahLogin] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    setSudahLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setSudahLogin(false);
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      {sudahLogin ? (
        <>
          <h2>Selamat Datang Kembali!</h2>
          <button onClick={handleLogout}>Logout</button>
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
