import react , {useState} from 'react'

import './App.css';

function App() {

  const products  = [
    {pName:'Apple',price:20},
    {pName:'Banana',price:30},
    {pName:'Orange',price:20}
  ]
  const [cart,setProducts] = useState([]);
  const [total,setTotal]= useState(0);

  let handleProductChange = (e) =>{
    let pName = e.target.Option[e.target.SelectedIndex].text;
    let price = e.target.value;
    let tCart = [...cart];
    let obj = [pName,price];
    let tPrice = parseInt(price);
    tPrice = total + tPrice;
    tCart.push(obj);
    setProducts(tCart);
    setTotal(tPrice);
  }


  return (
    <div className="App">
      <div className="customDiv">
        <h3>Purchase Component</h3>
        <hr />
        <select>
          {
            products.map((product,index)=>{
              return(
                <option  key={index}>
                  {product.pName}-${product.price}
                </option>
              )
            })
          }
        </select>
      </div>

      <div className="customDiv">
        <h3>Cart Component</h3>
        <hr />
        <ul>
          {
            cart.map((product,index)=>{
              return(
                <li key={index}>{product.pName}</li>
              )
            })
          }
        </ul>
      </div>
      
      <div className='customDiv'>
          <h3>Total </h3>
          <hr />
          <h2>Total : {total}</h2>
      </div>
      
    </div>
  );
}

export default App;
