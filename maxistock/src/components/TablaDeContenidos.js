import React, { useState, useEffect, useContext } from 'react';
import { StatusContext } from '../components/StatusContext';


export function TablaDeContenidos() {

    const { status, action } = useContext(StatusContext);
    const [mostrandoMasVendidos, setMostrando] = useState(false)
    const [contenidos, setContenidos] = useState(status.stock)
    const [count, setCount] = useState(status.count);

    useEffect(() => {
        setContenidos(status.stock);
    }, [status.count]);


    const recuperarTodos = () => {
        setMostrando(false)
    }

    const recuperarMasVendidos = () => {
        setMostrando(true)
    }

    const actualizarListado = () => {
        setCount(status.count);
        setContenidos(status.stock);
    }

    action.informStock = actualizarListado;

    return(
        <div>
          {/*
        {
           mostrandoMasVendidos ?
           <button onClick={recuperarTodos}>Mostrar todos los productos</button> : 
           <button onClick={recuperarMasVendidos}>Mostrar más vendidos</button>
        }
           */}
      {/* <button onClick={actualizarListado}>Actualizar listado</button> */}
        <table border="1 px solid black" align="center" margin="1 px">
          <tbody>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad en stock</th>
            </tr>
            {
                contenidos.map(producto => {
                    return <tr key={producto.nombre} >
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                    </tr>
                })
            }
          </tbody>
        </table>
        </div>
    )
}
