import React from 'react';
import Card from './Card';
import './Card.css';

function ProfilPengguna( { nama, pekerjaan, gambar}){
    return (
        <Card>
           <img src={gambar} alt={"foto" + nama}/>
            <h3>{nama}</h3>
            <p>{pekerjaan}</p> 
        </Card>
    )
}

export default ProfilPengguna;