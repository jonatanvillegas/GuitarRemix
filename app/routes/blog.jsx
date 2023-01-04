import {useLoaderData} from '@remix-run/react'
import {getPosts} from '~/module/post.server'
import ListadoPosts from '~/components/ListadosPosts'
import style from '~/style/post.css'

export async function loader(){
  const respuesta = await getPosts()
  
  return respuesta.data
}

export function meta() {
  return(
    {
      title: 'GuitarLA - NuestroBlog',
      description : 'GuitarLA - blog de musica y venta de guitarra'
    }
  )
}
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: style
        }
    ]
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className='contenedor'>
     <ListadoPosts
     posts={posts}
     />
    </main>
  )
}

export default Blog
