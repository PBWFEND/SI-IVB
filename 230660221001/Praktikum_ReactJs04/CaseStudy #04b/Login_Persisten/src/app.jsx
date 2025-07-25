import React from "react";
import TombolAuth from "./components/TombolAuth";

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "40px" }}>
      <h1>Aplikasi dengan State Persisten</h1>
      <p>
        Coba klik Login, lalu refresh halaman browser Anda. Status login Anda
        akan tetap tersimpan.
      </p>
      <TombolAuth />
    </div>
  );
}

export default App;
