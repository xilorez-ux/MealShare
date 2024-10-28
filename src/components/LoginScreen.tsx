import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImageUpload } from './ImageUpload';

export function LoginScreen() {
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem('user', JSON.stringify({ 
        name,
        profilePicture
      }));
      navigate('/');
    } else {
      alert('Veuillez entrer votre nom');
    }
  };

  return (
    <div className="container">
      <h1 className="header">Connexion</h1>
      <div className="login-form">
        <ImageUpload onImageSelect={setProfilePicture} />
        <input
          className="input"
          placeholder="Votre nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button" onClick={handleLogin}>
          Se connecter
        </button>
      </div>
    </div>
  );
}