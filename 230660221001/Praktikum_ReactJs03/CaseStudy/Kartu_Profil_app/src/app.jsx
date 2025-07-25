import React from "react";
import ProfilPengguna from "./components/ProfilPengguna";
import Pengumuman from "./components/Pengumuman";
import { users } from "./data/users";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Pengumuman
        judul="Deadline Pengumpulan Tugas Praktikum_ReactJs03"
        isi="Pengumpulan Praktikum ReactJs maksimal 07 Juli pukul 23:59 WIB."
      />
      <hr
        style={{ width: "100%", margin: "40px 0", border: "1px solid #eee" }}
      />
      <h1>Praktikum ReactJs - Ghatan Zalfaa Kautsar</h1>
      <div className="profil-list">
        {users.map((user) => (
          <ProfilPengguna
            key={user.id}
            nama={user.nama}
            pekerjaan={user.pekerjaan}
            gambar={user.gambar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
