const misProductos = [
    {id: "1", nombre: "PcGamer", precio: 1500, imagen:"/img/pcGamer.webp", idCat:"computadoras"},
    {id: "2", nombre: "Monitor 27''", precio: 300, imagen: "/img/monitor.jpeg", idCat:"computadoras"},
    {id: "3", nombre: "Teclado Mecánico", precio: 120, imagen: "/img/teclado.png", idCat:"computadoras"},
    {id: "4", nombre: "Mouse Gamer", precio: 80, imagen: "/img/mmouse.jpeg", idCat:"computadoras"},
    {id: "5", nombre: "Silla Gamer", precio: 500, imagen: "/img/silla.jpg", idCat:"sillas"},
    {id: "6", nombre: "iPhone 14", precio: 999, imagen: "/img/iphone.webp", idCat:"celulares"}

]
export const getProductos =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        }, 100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            const producto = misProductos.find(item=>item.id ===id)
            resolve(producto)
        }, 100)
    })
}

export const getProductoPorCategoria = (idCategoria) =>{
    return new Promise (resolve=>{
        setTimeout(()=>{
            const productoCategoria = misProductos.filter(item=>item.idCat ===idCategoria)
            resolve(productoCategoria)
        }, 100)
    })
}