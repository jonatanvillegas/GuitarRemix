import Guitarras from '~/components/guitarras'

function ListadoGuitarras({guitarras}) {
  return (
    <>
        <h2 className='heading'>Nuestros productos</h2>

            {guitarras?.length && (
            <div className='guitarras-grid'>
                {guitarras.map(guitarra => (
                <Guitarras 
                    key={guitarra?.id}
                    guitarra={guitarra?.attributes} //optional chaining
                />
                ))}
            </div>
            )}
    </>
  )
}

export default ListadoGuitarras
