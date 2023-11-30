import { useState, useEffect } from "react";

function CurrencySelector({label, currencies, selectedCurrency, handleSubmit, devise, devise2, result}) {

    return (
        <>
        <form action= "" onSubmit={handleSubmit}>
            <label htmlFor="devise">{label} :</label>
            <div className="select">
                <select name="devise1" id="devise1">
                    {/* <option value="">--Devise 1--</option> */}
                    { 
                        currencies.map(currency => <option value={currency}>{currency}</option>)
                    }
                        
                </select>
                <select name="devise2" id="devise2">
                    <option value="">--Devise 2--</option>
                    { 
                        currencies.map(currency => <option value={currency}>{currency}</option>)
                    }
                        
                </select>
            </div>
            <button type="submit">Enregistrer</button>
        </form>
        <p>Devise 1 : { devise }</p>
        <p>Devise 2 : { devise2 }</p>
        <p>Résultat : { result }</p>
        </>
    )
}

export default CurrencySelector;

