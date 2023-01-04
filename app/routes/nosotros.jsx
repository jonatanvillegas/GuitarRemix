import imagen from '../../public/img/nosotros.jpg'
import styles from '~/style/nosotros.css'

export function meta() {
  return(
      {
          title: 'GuitarLA - Remix - Nosotros',
          description: 'Venta de guitarras'
      }
  )
}
export function links () {
  return [
    {
      rel : 'stylesheet',
      href: styles
    },{
      rel: 'preload',
      href: imagen,
      as: 'imagen'
    }
  ]
}

function Nosotros() {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Nosotros</h2>

      <div className='contenido'>
        <img className='centrar' src={imagen} alt="imagen sobre nostros" />
        <div>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rem ipsum nostrum perferendis natus itaque architecto ad tempora! Amet libero quam illum error quo cupiditate repellendus nostrum nesciunt obcaecati nihil!
           culpa deserunt nemo quo magni corrupti quaerat, commodi, magnam unde quidem veritatis rerum mollitia!</p>
        
        </div>
      </div>
    </main>
  )
}

export default Nosotros
