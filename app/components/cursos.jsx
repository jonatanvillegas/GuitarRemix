

function Cursos({curso}) {
    const {imagen, contenido, titulo} = curso
  return (
    <section className="curso"> 
        <style jsx='true'>{`
            .curso{

                background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)) , url(${imagen.data.attributes.url});
            }
        `}</style>
      <div className='contenedor curso-grid'>
        <div className='contenido'>
            <h2 className='heading'>{titulo}</h2>
            <p className='text'>{contenido}</p>
        </div>
      </div>
      
    </section>
  )
}
//sintaxis especial para obtener estilos en jsx
export default Cursos
