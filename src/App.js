import './App.css';
import data, {allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories} from './data'

function App(props) {
  const {category, onClick} = props

  return (
    <div className="CategoryList">
      {namesAndCategories.map((obj) => {
        const {name, count} = obj
        const className = obj.name === category ? 'selected' : ''
        return (
          <button 
            className={className}
            onClick={() => onClick(name)}
          >
            {name}
            <span> {count}</span>
          </button>
        )
      })}

    </div>
    
  );
}

export default App;
