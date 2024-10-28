import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { User } from '../types';
import { ImageUpload } from './ImageUpload';

export function AddMealScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [portions, setPortions] = useState('');
  const [mealImage, setMealImage] = useState('');
  const navigate = useNavigate();
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  if (!user.name) {
    return <Navigate to="/login" />;
  }

  const handleAddMeal = () => {
    if (title && description && portions) {
      const savedMeals = JSON.parse(localStorage.getItem('meals') || '[]');
      const newMeal = {
        id: (savedMeals.length + 1).toString(),
        title,
        description,
        portions: parseInt(portions),
        author: user.name,
        image: mealImage
      };
      const updatedMeals = [...savedMeals, newMeal];
      localStorage.setItem('meals', JSON.stringify(updatedMeals));
      navigate('/');
    } else {
      alert('Veuillez remplir tous les champs');
    }
  };

  return (
    <div className="container">
      <h1 className="header">Ajouter un repas</h1>
      <div className="add-meal-form">
        <ImageUpload onImageSelect={setMealImage} />
        <input
          className="input"
          placeholder="Nom du repas"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="input"
          placeholder="Portions"
          type="number"
          value={portions}
          onChange={(e) => setPortions(e.target.value)}
        />
        <button className="button" onClick={handleAddMeal}>
          Ajouter
        </button>
      </div>
    </div>
  );
}