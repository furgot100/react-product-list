import React from "react";
import data, {allCategories, categoriesUnique, categoriesWithCounts, namesAndCategories} from './data'
import './categorylist.css'

function CategoryList(props) {
    const {category, onClick} = props

    return (
        <div className="categoryList">
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
    )
}

export default CategoryList;