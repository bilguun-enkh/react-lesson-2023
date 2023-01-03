import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from './Product'
import Product2 from './Product2'
import Product3 from './Product3'
import Product4 from './Product4'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Popular Product
        </h1>
      </header>
      <Product />
      <Product2 />
      <Product3 />
      <Product4 />
    </div>
  )
}

export default App;