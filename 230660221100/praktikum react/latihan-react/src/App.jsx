// src/App.jsx
import React from 'react';
import './App.css'; 
import InputTeks from './components/InputTeks';
import TombolAuth from './components/TombolAuth';
import ProfilPengguna from './components/ProfilPengguna';
import Pengumuman from './components/Pengumuman';

function App() {
  const dataPengguna = {
    nama: "Marsya Anastasya",
    pekerjaan: "Pengembang Web",
    gambar: "marsya"
  };

  const dataPengumuman = {
    judul: "Pembaruan Aplikasi!",
    isi: "Kami telah merilis fitur baru yang menarik. Periksa sekarang!"
  };

  return (
    <div className="app-wrapper">
      <h1>Dashboard Pengguna</h1>
      
      {/* Bagian Autentikasi */}
      <section className="dashboard-section">
        <TombolAuth />
      </section>

      {/* Bagian Profil Pengguna */}
      <section className="dashboard-section">
        <h2>Profil Saya</h2>
        <ProfilPengguna 
          nama={dataPengguna.nama} 
          pekerjaan={dataPengguna.pekerjaan} 
          gambar={dataPengguna.gambar} 
        />
      </section>

      {/* Bagian Input Teks Interaktif */}
      <section className="dashboard-section">
        <h2>Uji Input Teks</h2>
        <InputTeks />
      </section>

      {/* Bagian Pengumuman */}
      <section className="dashboard-section">
        <h2>Pengumuman Terbaru</h2>
        <Pengumuman 
          Judul={dataPengumuman.judul} 
          isi={dataPengumuman.isi} 
        />
      </section>
    </div>
  );
}

export default App;