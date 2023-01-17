import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductFunc from './ProductFunc'
import { products } from './seed'
import React, { useState } from 'react'



function App() {

  const [products1, SetproductList1] = useState(products)



  function handleProductUpVote(productId) {
    // console.log("Upvoted", productId)
    // const foundProduct = products.filter(product => {
    //   if(product.id == productId) {
    //     return product
    //   }
    // })
    // console.log(foundProduct[0].votes)
    // foundProduct[0].votes = foundProduct[0].votes +1 
    // console.log(foundProduct[0].votes)

    console.log(products)
    const newProducts = products1.map(product => {
      if (product.id == productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1
        })
      } else {
        return product;
      }
    })
    console.log(newProducts)
    SetproductList1(newProducts)
  }


  let productList = products1.map((products) => {
    return <ProductFunc title={products.title}
      id={products.id}
      description={products.description}
      url={products.url}
      votes={products.votes}
      submitterAvatarUrl={products.submitterAvatarUrl}
      productImageUrl={products.productImageUrl}
      onVote={handleProductUpVote}
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