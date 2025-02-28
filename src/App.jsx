import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)

  console.log(cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])


  useEffect(()=>{
    dispatch(getCartItems('random'))
  },[])

  if(isLoading){
    return <div className="loading">
    <h1>...loading</h1>
    </div>
  }

  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
