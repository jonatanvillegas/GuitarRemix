import { useState } from 'react'
import {useLoaderData,useOutletContext } from '@remix-run/react'
import {getGuitarra} from '~/module/guitarras.server'


//routin dinamico '$' con el simbolo automaticamente la obtiene como una sub ruta
export async function loader({ params}){
    const {guitarrasURL} = params
    const guitarra = await getGuitarra(guitarrasURL)
    

    if(guitarra.data.length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra No encontrada'
        })
    }
    return guitarra  
}

export function meta ({data}){ //al pasar datos al loader automaticamente el meta se le pasa la propiedad data
    if(!data){
        return {
            title: `GuitarLA - No encontrada`,
            descripcion: `GuitarraLA , venta de guitarras, Guitarra No encontrada`
        }
    }
    return{
        title: `GuitarLA - ${data.data[0].attributes.nombre}`,
        descripcion: `GuitarraLA , venta de guitarras, Guitarra ${data.data[0].attributes.nombre}`
    }
}



function Guitarras() {

    const {AgregarCarrito} = useOutletContext()
    const [cantidad, setCantidad] = useState(0)
    const guitarra = useLoaderData()
    
    const {nombre , descripcion ,imagen, precio} = guitarra.data[0].attributes

    //guardando en localstorach
    function handleSubmit(e){
        e.preventDefault()

        if(cantidad < 1){
            alert('Debes seleccionar una cantidad')
            return
        }

        const guitarraSeleccionada = {
            id : guitarra.data[0].id,
            img: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }
        
        AgregarCarrito(guitarraSeleccionada)
    }
    
    //el simbolo de mas funciona para comvertir un str a entero
  return (
    <div className=' guitarra'>
        <img className='imagen' src={imagen.data.attributes.url} alt={`imagen guitarra ${nombre}`} />
       
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
            
            <form onSubmit={handleSubmit} className="formulario">
                <label htmlFor="cantidad" >Cantidad</label>
                
                <select onChange={e => setCantidad(+e.target.value)} id="cantidad"> 
                    <option value="">--Selecione--</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value='Agregar al carrito' />
            </form>
            
      </div>
      
    </div>
  )
}

export default Guitarras
