import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Recipe from './components/Recipe';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/recipeList' element={<RecipeList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
