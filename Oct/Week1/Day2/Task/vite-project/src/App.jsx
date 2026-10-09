
import './App.css'
import Product from './Product'

function App() {

  let a=10;

  return (
    <div>
     <h1>product details</h1>
      <Product
  product_title="ASUS TUF GAMING A16"
  description="This is a laptop"
  price={120000}
/>

<Product
  product_title="MOTROLA EDGE 60 STYLUS"
  description="This is a mobile phone"
  price={20000}
/>

    </div>
  )
}

export default App;