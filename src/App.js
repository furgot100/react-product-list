import './App.css';
import { useState } from 'react';
import data, {allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories} from './data'
import CategoryList from './categorylist';
import ProductList from './productList';

function App() {
  const [category, setCategory] = useState()

  return (
    <div className="App">
      <CategoryList 
        category={category}
        onClick={newCategory => setCategory(newCategory)} />

      <ProductList category={category} />   
    </div>
  );
}

export default App;
