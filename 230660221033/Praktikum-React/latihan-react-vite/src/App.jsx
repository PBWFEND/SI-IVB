// src/App.jsx
import './App.css';
import profilePic from './assets/profile-yelly.jpg';

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={profilePic} alt="Profile" className="avatar" />
        <div className="content">
        <h1 className="title">Yelly Ambarwaty</h1>
        <p className="description">
        Saya merupakan seorang mahasiswi semester 4 prodi Sistem Informasi, 
        Fakultas Teknologi Informasi, Universitas Sebelas April Sumedang. Memiliki ketertarikan dalam pengembangan sistem informasi modern
        dan teknologi berbasis web.
    </p>
    </div>
    </div>
    </div>
  );
  
}

export default App;