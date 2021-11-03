import React, { useState, useEffect, useContext } from 'react';
import { StatusContext } from '../components/StatusContext';
import "./ContentsTable.css"
import {GetEverything, GetMostBuyed} from '../services/ContentsTableOrquestrator';
import SellProductService from '../services/SellProductService';

export function ContentsTable() {

    const { status, action } = useContext(StatusContext);
    const [mostrandoMasVendidos, setMostrando] = useState(false)
    const [contenidos, setContenidos] = useState(status.stock);
    const [selectedId, setSelectedId] = useState()
    const [data, setData] = useState({cantidad:""});
    const [count, setCount] = useState(status.count);
    const [error, setError] = useState("");

    useEffect(() => {
      setContenidos(status.stock);
    }, [status.count]);

    const handleChange = cantidad => event => {
        setData(prevState => ({...prevState, [cantidad]: event.target.value}));
    }

    function recuperarTodos() {
        setMostrando(false)
    }

    function recuperarMasVendidos() {
        setMostrando(true)
        //GetMostBuyed.then(res => setContenidos(res))
    }

    const test = () => {
      console.log(contenidos);
    }

    const handleSubmit = event => {
        try {
            setError("");
            SellProductService(parseInt(selectedId), data.cantidad);
          } catch (error) {
            setError(error.message);
            console.log("error en SellProductService", error)
          }
        action.setStock(GetEverything());
        status.count = status.count + 1;
        action.informStock();
        event.preventDefault();
    }

 
    function select (event) {
        let target = event.target.closest('tr')
        if (!target) return;
        setSelectedId(target.id)
    }

    const actualizarListado = () => {
      setCount(status.count);
      setContenidos(status.stock);
    }

    action.informStock = actualizarListado;

      return(
        <div>
        {
           mostrandoMasVendidos ?
           <button onClick={recuperarTodos}>Mostrar todos los productos</button> : 
           <button onClick={recuperarMasVendidos}>Mostrar más vendidos</button>
        }
        <table border="1 px solid black" align="center" margin="5 px">
          <tbody>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad en stock</th>
                <th>Seleccionar producto a vender</th>
            </tr>
            {
                contenidos.map(producto => {
                    return <tr onClick = {select} id = {producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td><input type = "radio" name = "myRadio" onClick = {select}></input></td>
                    </tr>
                })
            }
          </tbody>
        </table>
        <div className="RegisterSale"> 
            <form onSubmit={handleSubmit} className="box">    

                <input 
                required 
                type="number"
                min="0"
                name="cantidad"
                value={data.cantidad}
                className="form-control" 
                placeholder="Cantidad"
                onChange={handleChange("cantidad")}/>

                <button type="submit" disabled={selectedId==null}>
                    Vender
                </button>
                <div className='error' >{error}</div>
            </form>
        </div>
        </div>
    )
}
