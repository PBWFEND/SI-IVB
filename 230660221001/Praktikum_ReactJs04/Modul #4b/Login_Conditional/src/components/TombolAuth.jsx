import React, { useState } from "react";

function TombolAuth() {
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
        marginTop: "30px",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      {/* ✅ Conditional Rendering dengan operator ternary */}
      <h2>{sudahLogin ? "Selamat Datang Kembali!" : "Silakan Login."}</h2>

      {/* ✅ Conditional Rendering dengan if/else function */}
      {sudahLogin ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default TombolAuth;
