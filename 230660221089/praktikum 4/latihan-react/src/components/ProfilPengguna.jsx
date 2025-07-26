// src/components/ProfilPengguna.jsx
import React from 'react';
import Card from './Card';
import fotoProfilIntanN from '../assets/Intan N.jpeg'; // Path ini harus sesuai lokasi aset Anda

function ProfilPengguna( { nama, pekerjaan, gambar}){
    return (
        <Card>
           {/* Gunakan variabel yang telah diimpor */}
           <img src={fotoProfilIntanN} alt={"foto " + nama}/> {/* Ganti '/images/...' dengan variabel yang diimpor */}
            <h3>{nama}</h3>
            <p>{pekerjaan}</p> 
        </Card>
    )
}

export default ProfilPengguna;