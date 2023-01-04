import { useOutletContext } from '@remix-run/react'
import { useState, useEffect } from 'react'
import styleCarrito from '~/style/carrito.css'
import {ClientOnly} from 'remix-utils'


export function links(){
  return[
    {
      rel:'Stylesheet',
      href:styleCarrito
    }
  ]
}

export function meta(){
  return{
    title: 'GuitarraLa - Carrito'
  }
}
function Carrito() {
  const [total, setTotal] = useState(0)
  const {carrito, Actualizar,eliminar} = useOutletContext()
  
  useEffect(() =>{
    const calcularTotal = carrito.reduce((total, guitarra) => total + (guitarra.cantidad * guitarra.precio), 0)
    setTotal(calcularTotal)
  }, [carrito])

  return (
    <ClientOnly fallback='cargando'>
      
      {() => (
          <main className='contenedor'>
            <h1 className='heading'> Carrito de compras</h1>
            
            <div className="contenido">
              <div className='carrito'>
                  <h2>articulos</h2>

                  {carrito?.length === 0 ? "Carrito vacio" : (
                    carrito?.map( guitarra => (
                      <div key={guitarra.id} className='producto'>
                          <div>
                              <img src={guitarra.img} alt={`imagen de la guitarra ${guitarra.nombre}`} />
                          </div>
                          <div>
                              <p className='nombre'>{guitarra.nombre}</p>
                              <p>cantidad: </p>
                                  <select value={guitarra.cantidad} className='select' onChange={e => Actualizar({
                                    cantidad: +e.target.value,
                                    id: guitarra.id
                                  })}>
                                    <option value="">--Selecione--</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                  </select>
                              <p className="precio">$ <span>{guitarra.precio}</span></p>
                              <p className="subtotal">$<span>{guitarra.cantidad * guitarra.precio}</span></p>
                          </div>
                          <button
                            type='button'
                            className='btn-eliminar'
                            onClick= { () => eliminar(guitarra.id)}
                          >X</button>
                      </div>
                    ))
                  )}
              </div>
              <aside className="resumen">
                <h3>Resumen del pedido</h3>
                <p>total a pagar: ${total}</p>
              </aside>

            </div>
            
          </main>
        )}
    </ClientOnly>
  )
}

export default Carrito
