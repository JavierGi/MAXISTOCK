import React, { useState } from 'react';
import SellProductService from '../services/SellProductService';

export function RegisterSale(props) {

    const [data, setData] = useState({cantidad:""});
    const codigo = props.codigo;

    const handleChange = cantidad => event => {
        setData(prevState => ({...prevState, [cantidad]: event.target.value}));
    }

    const handleSubmit = () => {
        try {
            SellProductService(codigo,data.cantidad);
          } catch (error) {
            console.log("error en SellProductService")
          }
    }

    return (
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

                <button type="submit" disabled={codigo==null}>
                    Vender
                </button>
            </form>
        </div>
    );
}