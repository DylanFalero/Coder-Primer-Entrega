import { useContext, useState } from "react"
import { CarritoContext } from "../../context/context"
import { db } from "../../Services/config"
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore'

export const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const { carrito, vaciarCarrito, total, totalCantidad } = useContext(CarritoContext)
    const [error, setError] = useState("");


    const manejadorFormulario = (event) => {
        event.preventDefault();

        //verificamos que los campos esten completos:
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completá todos los campos")
            return
        }

        if (email !== emailConfirmacion) {
            setError("No coinciden los campos")
            return
        }
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email

        }

        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id)

                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock


                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })

            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then(docRef => {
                        setOrdenId(docRef.id)
                        vaciarCarrito()
                    })
                    .catch(error => {
                        console.log("Error al crear la orden", error)
                        setError("Se produjo un error al crear la orden!!")
                    })
            })
            .catch((error) => {
                console.log("No se pudo actualizar el stock", error)
                setError("No se puede actualizar el stock, intente en el supermercado Vital")
            })



    }






    return (
        <div>

            <h2>CheckOut</h2>
            <form onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p>{producto.item.nombre} x {producto.totalCantidad}</p>
                            <p>{producto.item.precio}</p>
                        </div>
                    ))
                }
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" onChange={(e) => setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Confirmacion Email</label>
                    <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Confirmar Compra</button>
                {
                    ordenId && (
                        <strong>Gracias por tu compra!! Tu numero de orden es: {ordenId}</strong>
                    )
                }




            </form>


        </div>
    )
}
