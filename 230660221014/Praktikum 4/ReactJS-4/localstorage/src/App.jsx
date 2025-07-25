import React, { useState } from 'react';

// Komponen salam
function SalamPembuka({ sudahLogin }) {
  const nama = localStorage.getItem('namaPengguna') || '';
  return (
    <h1>
      {sudahLogin
        ? `Selamat Datang Kembali, ${nama}!`
        : 'Silakan Login.'}
    </h1>
  );
}

// Komponen notifikasi
function Notifikasi({ jumlahPesan }) {
  return (
    <div>
      <h2>Inbox</h2>
      {jumlahPesan > 0 && (
        <p>Anda memiliki {jumlahPesan} pesan yang belum dibaca.</p>
      )}
    </div>
  );
}

// Komponen tombol login/logout
function TombolAuth({ sudahLogin, handleLogout, handleLogin }) {
  if (sudahLogin) {
    return <button onClick={handleLogout}>Logout</button>;
  } else {
    return <button onClick={handleLogin}>Login</button>;
  }
}

// Komponen utama App
function App() {
  const [sudahLogin, setSudahLogin] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  const [nama, setNama] = useState(() => {
    return localStorage.getItem('namaPengguna') || '';
  });

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('namaPengguna', nama);
    setSudahLogin(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('namaPengguna');
    setSudahLogin(false);
    setNama('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <SalamPembuka sudahLogin={sudahLogin} />

      {!sudahLogin && (
        <div>
          <input
            type="text"
            placeholder="Masukkan nama Anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            style={{ marginBottom: '10px', padding: '5px' }}
          />
          <br />
        </div>
      )}

      <TombolAuth
        sudahLogin={sudahLogin}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />

      <Notifikasi jumlahPesan={sudahLogin ? 3 : 0} />
    </div>
  );
}

export default App;
