import React, { useState } from 'react';

export function AddProduct() {

    const [data, setData] = useState({nombre:"",codigo: "", precio: "", cantidad:""});

    const handleChange = name => event => {
        setData(prevState => ({...prevState, [name]: event.target.value}));
    }

    const handleSubmit = () => {
        
    }

    return (
        <div className="AddProduct"> 
            <form onSubmit={handleSubmit} className="box">    
                <input 
                required 
                type="nombre"
                name="nombre"
                value={data.nombre}
                className="form-control" 
                placeholder="Nombre" 
                onChange={handleChange("nombre")}/>
                
                <input 
                required 
                type="codigo"
                name="codigo"
                value={data.codigo}
                className="form-control" 
                placeholder="Codigo" 
                onChange={handleChange("codigo")}/>

                <input 
                required 
                type="precio"
                name="precio"
                value={data.precio}
                className="form-control" 
                placeholder="Precio" 
                onChange={handleChange("precio")}/>

                <input 
                required 
                type="cantidad"
                name="cantidad"
                value={data.cantidad}
                className="form-control" 
                placeholder="Cantidad"
                onChange={handleChange("cantidad")}/>

                <button type="submit">
                    Ingresar Producto
                </button>
            </form>
        </div>
    );
}