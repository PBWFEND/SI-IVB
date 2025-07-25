import React, { useState } from 'react';

function Penghitung() {
  // 1. Deklarasi state
  //    'jumlah' adalah nilai state, 'setJumlah' adalah fungsi untuk mengubahnya.
  //    Nilai awal state adalah 0.
  const [jumlah, setJumlah] = useState(0);

  // 2. Fungsi untuk menangani event klik
  function handleKlik() {
    // 3. Memperbarui state menggunakan fungsi setter
    setJumlah(jumlah + 1);
  }

  return (
    <div>
      <p>Tombol ini telah diklik sebanyak: {jumlah} kali</p>
      <button onClick={handleKlik}>
        Klik Saya
      </button>
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Penghitung Terpisah</h1>
      <Penghitung />
      <Penghitung />
    </>
  );
}   

export default App;