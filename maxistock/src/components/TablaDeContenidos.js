import React, { useState } from 'react';

export function TablaDeContenidos() {

    const [mostrandoMasVendidos, setMostrando] = useState(false)
    const [contenidos, setContenidos] = useState([])

    const recuperarTodos = () => {
        setMostrando(false)
    }

    const recuperarMasVendidos = () => {
        setMostrando(true)
    }

    return(
        <div>
        {
           mostrandoMasVendidos ?
           <button onClick={recuperarTodos}>Mostrar todos los productos</button> : 
           <button onClick={recuperarMasVendidos}>Mostrar más vendidos</button>
        }
        <table border="1 px solid black" align="center" margin="5 px">
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad en stock</th>
            </tr>
            {
                contenidos.map(producto => {
                    return <tr>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                    </tr>
                })
            }
        </table>
        </div>
    )
}