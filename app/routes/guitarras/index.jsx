import {useLoaderData } from '@remix-run/react'
import getGuitarras from '~/module/guitarras.server'
import ListadoGuitarras from '~/components/ListadosGuitarra'


export function meta(){
  return(
    {
        title: 'GuitarLA - Tienda',
        description: 'Venta de guitarras'
    }
)
}


export async function loader (){
  const guitarras = await  getGuitarras() // con server se muestra solo en la consola 
  return guitarras.data
}


function Tienda() {

  const guitarras = useLoaderData()
  //con useloader.. se muestra por el lado del servidor 
  return (
      
        <ListadoGuitarras
        guitarras={guitarras}
        />
        )
}

export default Tienda
