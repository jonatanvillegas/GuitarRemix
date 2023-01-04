

async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`); //?populate ayuda a las imagenes 
    return  await respuesta.json()
}

export default getGuitarras;

export async function getGuitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    
    return await respuesta.json()
}

