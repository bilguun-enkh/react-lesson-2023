import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'
import ProductFunc from './ProductFunc'
import ProductFunc2 from './ProductFunc2'
import ProductFunc3 from './ProductFunc3';
import ProductFunc4 from './ProductFunc4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Popular Product
        </h1>
      </header>
      <Product />
      <ProductFunc />
      <Product2 />
      <ProductFunc2 />
      <Product3 />
      <ProductFunc3 />
      <Product4 />
      <ProductFunc4 />
    </div>
  )
}

export default App;