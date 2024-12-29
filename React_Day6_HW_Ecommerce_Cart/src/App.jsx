import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './Header/Header'
import CartHeader from './CartHeader/CartHeader'
import MainCart from './MainCart/MainCart'
import Footer from './Footer/Footer'
import styles from './App.module.css'

function App() {
  const arr = [
    {
        id : 1,
        imgUrl : "https://www.course-api.com/images/cart/phone-1.png",
        name : "Samsung Galaxy S8",
        price : 399.99,
        count : 1
    },
    {
          id : 2,
        imgUrl : "https://www.course-api.com/images/cart/phone-2.png",
        name : "Google Pixel",
        price : 499.99,
        count : 1

    },
    {
          id : 3,
        imgUrl : "https://www.course-api.com/images/cart/phone-3.png",
        name : "Xiaomi Redmi Note 2",
        price : 699.99,
        count : 1

    },
    {
          id : 4,
        imgUrl : "https://www.course-api.com/images/cart/phone-1.png",
        name : "Samsung Galaxy S7",
        price : 599.99,
        count : 1

    }

]
  const [clear , setClear] = useState(false);
  const [totalCounter , setTotalCounter] = useState(4);
  // const [remove, setRemove] = useState(false);
  const [totalPrice , setTotalPrice] = useState(
    arr.reduce((acc , curr) =>{
      return acc + curr.price;
    },0)
  )
  // const [remove , setRemove] = useState(false);
  
console.log("totalPrice" , totalPrice);

  return (
    <>
    <div>
    <Header totalCounter ={totalCounter} />
    <CartHeader />
 {
  clear ? "" : <div  className={styles.appCont}>{
    arr.map((val) =>{
      return <MainCart key={val.id} {...val} totalPrice={totalPrice} setTotalPrice={setTotalPrice} totalCounter = {totalCounter} setTotalCounter = {setTotalCounter}  />
    })
   }
   </div>
 }
   {
    (clear || (totalPrice == 0) ? <h2 className={styles.empty}>is currently Empty !</h2> :  <Footer  clear= {clear} setClear={setClear} setTotalPrice={setTotalPrice} totalPrice={totalPrice} />) 
   }
    </div>
    </>
  )
}

export default App;
