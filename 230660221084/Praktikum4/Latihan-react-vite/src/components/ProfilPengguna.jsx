// src/components/ProfilPengguna.jsx
import React from 'react';
import Card from './Card';
import fotoProfilAisyah from '../assets/aisyah.jpeg'; // Path ini harus sesuai lokasi aset Anda

function ProfilPengguna( { nama, pekerjaan, gambar}){
    return (
        <Card>
           {/* Gunakan variabel yang telah diimpor */}
           <img src={fotoProfilAisyah} alt={"foto " + nama}/> {/* Ganti '/images/...' dengan variabel yang diimpor */}
            <h3>{nama}</h3>
            <p>{pekerjaan}</p> 
        </Card>
    )
}

export default ProfilPengguna;