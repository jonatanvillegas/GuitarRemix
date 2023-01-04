

export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`); //?populate ayuda a las imagenes 
    return  await respuesta.json()
}

export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    //posts?filters[url]=primeros-pasos-para-aprender&populate=imagen
    return await respuesta.json()
}