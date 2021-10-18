import React, { useState, useEffect } from 'react';
import "./ContentsTable.css"
import {GetEverything, GetMostBuyed} from '../services/ContentsTableOrquestrator';

export function ContentsTable() {

    const [mostrandoMasVendidos, setMostrando] = useState(false)
    const [contenidos, setContenidos] = useState([{nombre:"test",codigo: "5502", precio: "14", cantidad:"12"}, {nombre:"test2",codigo: "552", precio: "141", cantidad:"122"}])
    const [selectedId, setSelectedId] = useState()
    //const [selectedTr, setSelectedTr] = useState()
    
    /*useEffect (() => { 
        setSelectedTr(document.createElement('DIV'))
        console.log("ok") 
    }, [])*/

    function recuperarTodos() {
        setMostrando(false)
        //GetEverything.then(res => setContenidos(res))
    }

    function recuperarMasVendidos() {
        setMostrando(true)
        //GetMostBuyed.then(res => setContenidos(res))
    }

    function test () {
        console.log(selectedId)
        //console.log(selectedTr)
    }
    
    function select (event) {
        let target = event.target.closest('tr')
        if (!target) return;
        //highlight(target)
        setSelectedId(target.id)
    }

    /*function highlight(tr) {
        console.log(selectedTr)        
        if (selectedTr.tagName === 'TR') {
            selectedTr.classList.remove('highlight');
            console.log("eliminando highlight")
        }
        setSelectedTr(tr)
        console.log(selectedTr)
        selectedTr.classList.add('highlight');
    }*/

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
                    return <tr onClick = {select} id = {producto.codigo}>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.cantidad}</td>
                        <td><input type = "radio" name = "myRadio" onClick = {select}></input></td>
                    </tr>
                })
            }
          </tbody>
        </table>
        <button onClick = {test}>test</button>
        </div>
    )
}