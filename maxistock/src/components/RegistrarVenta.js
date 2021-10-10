import React, { useState } from 'react';

export function RegistrarVenta(props) {

    const [data, setData] = useState({cantidad:""});
    const producto = props.producto;

    const handleChange = cantidad => event => {
        setData(prevState => ({...prevState, [cantidad]: event.target.value}));
    }

    const handleSubmit = () => {
        
    }

    return (
        <div className="RegistrarVenta"> 
            <form onSubmit={handleSubmit} className="box">    

                <input 
                required 
                type="cantidad"
                name="cantidad"
                value={data.cantidad}
                className="form-control" 
                placeholder="Cantidad"
                onChange={handleChange("cantidad")}/>

                <button type="submit" disabled={producto==null}>
                    Vender
                </button>
            </form>
        </div>
    );
}