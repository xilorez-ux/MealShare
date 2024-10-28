import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { AddMealScreen } from './components/AddMealScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/add" element={<AddMealScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;