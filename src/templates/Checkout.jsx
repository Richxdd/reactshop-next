import React, { useContext } from "react"
import "@styles/Checkout.scss"
import AppContext from "../context/AppContext"

const Checkout = () => {
  const { state } = useContext(AppContext)

  const carrito = state.cart

  console.log(carrito)

  const sumTotal = () => {
    const reducer = (accumalator, currentValue) =>
      accumalator + currentValue.price
    const sum = carrito.reduce(reducer, 0)
    return sum
  }

  return (
    <div className='Checkout'>
      <div className='Checkout-container'>
        <h1 className='title'>Mi orden</h1>

        <div className='Checkout-content '>
          {carrito.map((data) => (
            <div>
              <img className='ProductItem' src={data?.images[0]} />
              <div className='product-info'>
                <div>
                  <p>{data?.title}</p>
                  <p>${data?.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className='order'>
            <p>
              <span>03.25.21</span>
              <span>{carrito.length} Articulos</span>
            </p>
            <p>${sumTotal()}.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
