import React, { useState, useEffect, useContext} from 'react';
import { StatusContext } from '../components/StatusContext';
import "./ContentsTable.css"
import {GetEverything, GetMostBuyed, GetLeastBuyed, GetSoldOutProducts} from '../services/ContentsTableOrquestrator';
import SellProductService from '../services/SellProductService';

export function ContentsTable() {

    const { status, action } = useContext(StatusContext);
    const [mostrando, setMostrando] = useState([false,false])
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
        setMostrando([false, false])
        setContenidos(GetEverything())
        setSelectedId(null)
    }

    function recuperarMasVendidos() {
        setMostrando([true, true])
        setContenidos(GetMostBuyed())
        setSelectedId(null)
    }

    function recuperarMenosVendidos() {
        setMostrando([false, true])
        setContenidos(GetLeastBuyed())
        setSelectedId(null)
    }

    function recuperarSinStock() {
      setMostrando([true, false])
      setContenidos(GetSoldOutProducts())
      setSelectedId(null)
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
        <span>
          <button onClick={recuperarTodos} disabled = {!mostrando[0] && !mostrando[1]}>Mostrar todos los productos</button> 
          <button onClick={recuperarSinStock} disabled = {mostrando[0] && !mostrando[1]}>Mostrar productos sin stock</button> 
          <button onClick={recuperarMenosVendidos} disabled = {!mostrando[0] && mostrando[1]}>Mostrar menos vendidos</button> 
          <button onClick={recuperarMasVendidos} disabled = {mostrando[0] && mostrando[1]}>Mostrar más vendidos</button>
        </span>
        <table border="1 px solid black" align="center" margin="5 px">
          <tbody>
            {
              mostrando[0] && !mostrando[1] ?
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad en stock</th>
              </tr> :
              mostrando[0] || mostrando[1] ?
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad vendida</th>
              </tr> :
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad en stock</th>
                <th>Seleccionar producto a vender</th>
              </tr>
            }
            {
                contenidos.map(producto => {
                    return mostrando[0] && !mostrando[1] ?
                    <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.cantidad}</td>
                    </tr> :
                    mostrando[0] || mostrando[1] ?
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.ventas}</td>
                    </tr> :
                    <tr id = {producto.id} key={producto.id}>
                      <td>{producto.nombre}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.cantidad}</td>
                      <td><input type = "radio" name = "myRadio" onClick = {select}></input></td>
                    </tr>
                })
            }
          </tbody>
        </table>
        {
          mostrando[0] || mostrando[1] ?
          <div/> :
          <div className="RegisterSale"> 
              <form onSubmit={handleSubmit} className="box" noValidate>    

                  <input 
                  required 
                  type="number"
                  min="0"
                  name="cantidad"
                  value={data.cantidad}
                  className="form-control" 
                  placeholder="Cantidad"
                  noValidate
                  onChange={handleChange("cantidad")}/>

                  <button type="submit" disabled={selectedId==null}>
                      Vender
                  </button>
                  <div className='error' >{error}</div>
              </form>
          </div>
        }
        </div>
    )
}
