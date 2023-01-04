import { Link } from "@remix-run/react"

function Guitarras({guitarra}) {
  
  const { nombre, precio,descripcion,url,imagen } = guitarra
  
  return (
    <div className="guitarra">

      <img src={imagen.data.attributes.formats.medium.url} alt={`imagen guitarra ${nombre}`}  />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio}</p>
        
        <Link className="enlace" to={`/guitarras/${url}`} >Ver producto</Link> 
        
      </div>
    </div>
  )
}
//recordar que en la parte del routin dinamico la url de la api escribirla exactamente igual

export default Guitarras
