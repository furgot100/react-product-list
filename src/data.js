import data from './data.json'

const allCategories = data.map(obj => obj.category)

const categoryObjects = allCategories.reduce((obj, category) => {
    obj[category] = 0
    return obj
}, {}) // !!! Be sure to define the initial value as an Object!
const categoriesUnique = Object.keys(categoryObjects)

const categoriesWithCounts = data.reduce((obj, category) => {
    if (obj[category] === undefined) {
        obj[category] = 1
    } else {
        obj[category] += 1
    }
    return obj
}, {}) // !!! Be sure to define the initial value as an Object!

const namesAndCategories = categoriesUnique.map(name => {
    return {name, count : categoriesWithCounts[name]}
})

export {
    allCategories,
    categoriesUnique,
    categoriesWithCounts,
    namesAndCategories
}

export default data 