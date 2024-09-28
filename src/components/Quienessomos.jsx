import React, { useEffect, useState } from 'react'
import Card from './Card'

const Quienessomos = () => {
  const [productos,setProductos]=useState([])
  useEffect(()=>{
    obtenerproductos()
  },[])
  const obtenerproductos=async()=>{
    const datos= await fetch('https://fakestoreapi.com/products')
    const prod=await datos.json()
    setProductos(prod)
  }
return <div>
  <h3>Lista de productos</h3>
  {
   /* productos.map((producto)=>(<li key={producto.id}>{producto.title} {producto.price}</li>))*/
    productos.map((producto)=>(<Card url={producto.image} title={producto.title} price={producto.price} description={producto.description}/>))
  }
</div>
}

export default Quienessomos