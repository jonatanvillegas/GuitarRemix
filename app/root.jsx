import { 
    Meta,
    Links,
    Scripts,
    Outlet,
    LiveReload,
    useCatch,
    Link
} from "@remix-run/react";
import { useState, useEffect } from "react";
import index from '~/style/index.css'
import Header from "~/components/header";
import Footer from "~/components/footer";

export function meta() {
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}

export function links  (){
    return [
        {   
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'stylesheet',
            href: index 
        },
        {
            rel: 'preconnect', 
            href:'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect', 
            href:'https://fonts.gstatic.com',
            crossorigin: 'true' 
        },
        {
            rel: 'stylesheet',
            href : "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,400;1,700&display=swap"
        }
    ]
}

export default function app (){
    const agregarLocal = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
    const [carrito , setCarrito] = useState(agregarLocal)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const AgregarCarrito = guitarra => {

        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
         

            const carritoActualizado = carrito.map(guitarraState =>{
                if(guitarraState.id == guitarra.id){
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState
            })
            setCarrito(carritoActualizado)
            console.log(carrito)
        }else{
            setCarrito([...carrito, guitarra])

       
        }
       
    }

    const Actualizar = guitarra =>{
        const carritoAc = carrito.map(guitarraState => {
            if(guitarraState.id == guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad
            }
            return guitarraState
        })
        setCarrito(carritoAc)
    }

    const eliminar = id => {
        const carritoAc = carrito.filter(guitarraState => guitarraState.id !== id)
        setCarrito(carritoAc)
    }
    return (
        <Document>
            <Outlet 
                context={{
                    AgregarCarrito,
                    carrito,
                    Actualizar,
                    eliminar
                }}
                
            />
        </Document>
    )
}


function Document ({children}){
    return(

        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts/>

                <LiveReload />
            </body>
         </html>
    )
}

export function CatchBoundary(){
    const error = useCatch()

    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to='/'>Talves quieras volver a la pagina principal</Link>
        </Document>
    )
}
export function ErrorBoundary({error}){
    return(
        <Document>
            <p className="error">{error.status} {error.statusText}</p>
            <Link className="error-enlace" to='/'>Talves quieras volver a la pagina principal</Link>
        </Document>
    )
}