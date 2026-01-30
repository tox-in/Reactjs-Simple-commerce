import { useState } from 'react'
import Navigation from './Navigation/Navigation'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import './index.css'

//Database
import products from './db/data'
import Card from './Components/Card'

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState('')

  //Input Filtering
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter((product) =>
    product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  )

  //Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.values)
  }

  //Buttons Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products

    //filtering input items
    if (query) {
      filteredProducts = filteredItems
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, gender, brand, price, name }) =>
          category === selected ||
          gender === selected ||
          brand === selected ||
          price === selected ||
          name === selected
      )
    }

    return filteredProducts.map(({ id, imageURL, name, items_left, price }) => (
      <Card
        key={id}
        img={imageURL}
        title={name}
        items={items_left}
        price={price}
      />
    ))
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <section>
      <Sidebar handleChange={handleChange} />
      <Navigation />
      <Recommended />
      <Products />
    </section>
  )
}

export default App
