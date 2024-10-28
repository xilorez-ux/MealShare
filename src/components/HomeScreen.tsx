import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Meal, User } from '../types';

export function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>(() => {
    const savedMeals = localStorage.getItem('meals');
    return savedMeals ? JSON.parse(savedMeals) : [
      { id: '1', title: 'Lasagnes maison', description: 'Délicieuses lasagnes aux légumes.', portions: 3, author: 'Marie' },
      { id: '2', title: 'Soupe de potiron', description: 'Parfaite pour les soirées d\'automne.', portions: 2, author: 'Pierre' },
    ];
  });
  
  const navigate = useNavigate();
  const user: User = JSON.parse(localStorage.getItem('user') || '{}');

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user.name) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <div className="header-container">
        <h1 className="header">Repas disponibles</h1>
        <div className="user-info">
          {user.profilePicture && (
            <img src={user.profilePicture} alt={user.name} className="profile-picture-small" />
          )}
          <span>Bonjour, {user.name}</span>
          <button className="button-secondary" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </div>
      <div className="meal-list">
        {meals.map((meal) => (
          <div key={meal.id} className="meal-card">
            {meal.image && (
              <div className="meal-image-container">
                <img src={meal.image} alt={meal.title} className="meal-image" />
              </div>
            )}
            <div className="meal-content">
              <h2 className="meal-title">{meal.title}</h2>
              <p>{meal.description}</p>
              <p>Portions : {meal.portions}</p>
              <p className="meal-author">Proposé par : {meal.author}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="button"
        onClick={() => navigate('/add')}
      >
        Ajouter un repas
      </button>
    </div>
  );
}