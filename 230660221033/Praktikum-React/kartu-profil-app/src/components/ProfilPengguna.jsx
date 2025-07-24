import React from 'react';
import Card from './Card';
import './ProfilPengguna.css'; 

function ProfilPengguna({ gambar, nama, pekerjaan}) {
    return (
        <Card>
            <img src={gambar} alt={"Foto " + nama} />
            <h3>{nama}</h3>
            <p>{pekerjaan}</p>
        </Card>
    );
}

export default ProfilPengguna;