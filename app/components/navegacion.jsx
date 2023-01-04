import { Link ,useLocation} from "@remix-run/react"
import carrito from '../../public/img/carrito.png'



const Navegacion = () => {


    const location = useLocation()
  return (
        <nav className='navegacion'>
            <Link
            to='/'
            className={ location.pathname === '/' ? 'active' : ''}>
                inicio
            </Link>
            <Link
            to='/guitarras'
            className={ location.pathname === '/guitarras' ? 'active' : ''}
            >
                tienda
            </Link>
            <Link
            to='/nosotros'
            className={ location.pathname === '/nosotros' ? 'active' : ''}
            >
                nosotros
            </Link>
            <Link
            to='/blog'
            className={ location.pathname === '/blog' ? 'active' : ''}
            >
                blog
            </Link>
            <Link
            to='/carrito'
            >
                <img src={carrito} alt="carrito de compra" />
            </Link>
        </nav>
  )
}

export default Navegacion
