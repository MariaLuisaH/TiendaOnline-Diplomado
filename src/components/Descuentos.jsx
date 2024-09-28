import React, { useState, useEffect } from 'react'
import Card from './Card'

const Quienessomos = () => {
  const [productos, setProductos] = useState([])
  const [descuento, setDescuento] = useState(0) // initial discount is 0%
  const [discountOptions, setDiscountOptions] = useState([ 
    { value: 0.1, label: '10%' },
    { value: 0.2, label: '20%' },
    { value: 0.3, label: '30%' },
    { value: 0.4, label: '40%' },
    { value: 0.5, label: '50%' },
  ])

  useEffect(() => {
    obtenerproductos()
  }, [])

  const obtenerproductos = async () => {
    const datos = await fetch('https://fakestoreapi.com/products')
    const prod = await datos.json()
    setProductos(prod)
  }

  const applyDiscount = (price) => {
    return price * (1 - descuento)
  }

  const handleDiscountChange = (event) => {
    setDescuento(event.target.value)
  }

  return (
    <div>
      <h3>Lista de productos con descuento</h3>
      <select value={descuento} onChange={handleDiscountChange}>
        {discountOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
        
      </select>
      {
        productos.map((producto) => (
          <Card
            url={producto.image}
            title={producto.title}
            price={applyDiscount(producto.price)}
            description={producto.description}
          />
        ))


        
      }
    </div>
  )
}

export default Quienessomos


