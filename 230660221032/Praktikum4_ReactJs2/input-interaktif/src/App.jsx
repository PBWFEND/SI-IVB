import React from 'react';
import InputTeks from './components/InputTeks';
import TombolAuth from './components/TombolAuth';

function App() {
  return (
    <div>
      <div>
        <h1>Contoh State dan Event Handling</h1>
        <InputTeks />
      </div>

    <div>
        <h1>Aplikasi dengan State Persisten</h1>
        <p>Coba klik Login, lalu refresh halaman browser Anda. Status login Anda akan tetap tersimpan.</p>
        <TombolAuth />
      </div>
    </div>
  );
}

export default App;