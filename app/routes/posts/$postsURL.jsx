import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/module/post.server";
import formatearFecha  from "~/utilis/help";
import styles from '~/style/post.css'


export function links(){
    return[

        {
            rel: 'StyleSheet',
            href: styles
        }
    ]
}
export function meta ({data}){ //al pasar datos al loader automaticamente el meta se le pasa la propiedad data
    if(!data){
        return {
            title: `GuitarLA - Entrada no encontrada`,
            descripcion: `GuitarraLA , venta de guitarras, Entrada no encontrada`
        }
    }
    return{
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        descripcion: `GuitarraLA , venta de guitarras, Entrada ${data.data[0].attributes.titulo}`
    }
}
export async function loader({params}){
    const {postsURL} = params; //crear routin es necesario el destruc.. 
   const post = await getPost(postsURL)
    
    if(post.data.length ===0 ){
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

 return post
}
function Post() {
    const post = useLoaderData()
    const {titulo, contenido,imagen, publishedAt} = post.data[0].attributes
    
  return (
    <div className="post">
         <div className='contenido'>
            <img src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}}`} />
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className='text'>{contenido}</p>

        </div>
       
    </div>
  )
}

export default Post
