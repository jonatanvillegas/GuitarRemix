import Navegacion from "./navegacion"

function Footer() {
  return (
    <footer className="footer">
      <div className="contenedor contenido">
        <Navegacion />

        <a className="copyright" href="">Todos los derechos reservados {new Date().getFullYear()} </a>
      </div>
    </footer>
  )
}

export default Footer
