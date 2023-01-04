
const formatearFecha = fecha => { //cambiar formato de fecha de la api de strapi

    const nuevaFecha = new Date(fecha)
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
  return nuevaFecha.toLocaleDateString('es-ES', opciones)
}

export default formatearFecha
