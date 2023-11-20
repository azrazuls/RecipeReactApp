import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';
import { Routes, Route } from 'react-router-dom';

export default function SearchRecipe() {
  const APP_ID = 'b3257743';
  const APP_KEY = '634923c6f1e507b3618def6cb85d0cc5';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const suggestedRecipes = ['butter chicken', 'pizza', 'fried rice'];

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    if (search.trim() === '') {
      // Display a message when the search query is empty
      alert('Search queries cannot be empty');
      return;
    }
    setQuery(search);
    setSearch('');
  };

  // Function to navigate to the recipe
  const navigateToRecipe = (recipe) => {
    setQuery(recipe); // Set the query to the suggested recipe
  };

  return (
    <div className="App">
      <h1>Find your recipe now ^_^</h1>
      <p>find, cook, delight.</p>
      <div className="suggested-recipes">
  {suggestedRecipes.map((suggestedRecipe) => (
    <button className="suggested-button"
      key={suggestedRecipe}
      onClick={() => navigateToRecipe(suggestedRecipe)}
    >
      {suggestedRecipe}
    </button>
  ))}
</div>

      <form className="search-form" onSubmit={getSearch}>
        <input
          className="search-bar"
          type="text"
          placeholder="Search recipe..."
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
