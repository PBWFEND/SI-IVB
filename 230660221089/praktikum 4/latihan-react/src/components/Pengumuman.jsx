import React from 'react';
import Card from './Card';

function Pengumuman({ Judul, isi}) {
    return (
        <Card>
            <h3>📢{Judul}</h3>
            <p>{isi}</p>
        </Card>
    );
}

export default Pengumuman;