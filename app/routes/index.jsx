import {useLoaderData} from '@remix-run/react'
import  getGuitarras from '~/module/guitarras.server'
import {getCursos} from '~/module/cursos.server'
import {getPosts}  from '~/module/post.server'
import ListadoGuitarras from '~/components/ListadosGuitarra'
import ListadoPosts from '~/components/ListadosPosts'
import Curso from '~/components/cursos'
import styleGuitarras from '~/style/guitarras.css'
import stylePosts from '~/style/post.css'
import styleCurso from '~/style/curso.css'

export function links(){
  return[
    {
      rel:'stylesheet',
      href: styleGuitarras
    },{
      rel:'stylesheet',
      href: stylePosts
    },
    {
      rel:'stylesheet',
      href:styleCurso
   }
  ]
}
export function meta(){

return{
  title:'GuitarrasLA'
}

}

export async function loader(){

  const [guitarras, posts, curso] = await Promise.all([getGuitarras(), getPosts(), getCursos()]) 
  
  
  return{guitarras: guitarras.data
    , posts: posts.data
    , curso: curso.data}
}


function index() {

  const {guitarras, posts, curso} = useLoaderData()
  
  return (
    <>
      <main className='contenedor'>
          <ListadoGuitarras
            guitarras={guitarras}
            />
      </main>
      <Curso
      curso={curso.attributes}
      />
      <section className='contenedor'>
            <ListadoPosts
            posts={posts}
            />
      </section>
    </>
  )
}

export default index
