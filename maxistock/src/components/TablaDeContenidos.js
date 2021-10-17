import React, { useState, useEffect} from 'react';
import { GetStockService } from '../services/AddProductService';

export function TablaDeContenidos() {

    const [mostrandoMasVendidos, setMostrando] = useState(false)
    const [contenidos, setContenidos] = useState(GetStockService())
    const [actualizado, setActualizado] = useState(true)


    useEffect(() => {
        setContenidos(GetStockService());
        setActualizado(true);
    }, []);

    const recuperarTodos = () => {
        setMostrando(false)
    }

    const recuperarMasVendidos = () => {
        setMostrando(true)
    }

    const actualizarListado = () => {
        setActualizado(false);
    }

    return(
        <div>
          {/*
        {
           mostrandoMasVendidos ?
           <button onClick={recuperarTodos}>Mostrar todos los productos</button> : 
           <button onClick={recuperarMasVendidos}>Mostrar más vendidos</button>
        }
           */}
           <button onClick={actualizarListado}>Actualizar listado</button>
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
