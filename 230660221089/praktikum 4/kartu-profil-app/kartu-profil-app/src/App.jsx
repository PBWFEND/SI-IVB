import React from 'react';
import ProfilPengguna from "./components/ProfilPengguna";
import Pengumuman from './components/Pengumuman';
import { users } from './data/users';
import './app.css';

function App() {
  return (
    <div className="app-container">
      <Pengumuman
      Judul="Info Praktikum"
      isi="Pastikan Semua Tugas  Dikumpulkan Sebelum Batas Waku yang ditentukan."
      />
      <hr style={{width: '100%', margin: '40px 0', border: '1px solid #eee'}} />
      <h1>Tim kami</h1>
      <div className="Profile-list">
        {users.map(user =>(
          <ProfilPengguna
          key={user.id}
          nama={user.nama}
          pekerjaan={user.pekerjaan}
          gambar={user.gambar}
        />
        ))}
      </div>
    </div>
  )
}

export default App
