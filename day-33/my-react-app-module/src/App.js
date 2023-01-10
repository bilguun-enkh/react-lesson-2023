import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductFunc from './ProductFunc'
import { products } from './seed'
import React from 'react'


function App() {
  let productList = products.map((products) => {
    return <ProductFunc title={products.title}
      id={products.id}
      description={products.description}
      url={products.url}
      votes={products.votes}
      submitterAvatarUrl={products.submitterAvatarUrl}
      productImageUrl={products.productImageUrl}
      stars={products.stars} />
  })
  return (

    <div className="App">
      <header className="App-header">
        <h1><strong>
          Popular Product
        </strong></h1>
      </header>
      {productList}
    </div>
  )
}

export default App;