import { Outlet, useOutletContext} from '@remix-run/react'
import styleet from '~/style/guitarras.css'

export function links(){

  return[
    {
      rel:'stylesheet',
      href: styleet
    }
  ]
}

function Tienda() {

  //con useloader.. se muestra por el lado del servidor 
  return (
      <main className='contenedor'>
        
        <Outlet 
          context={useOutletContext()}        
        />
      </main>
  )
}

export default Tienda
