import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CurrencySelector from './components/CurrencySelector';
import AmountInput from './components/AmountInput';

function App() {
  const [devise, setDevise] = useState("")
  const [devise2, setDevise2] = useState("")
  const [, setResult] = useState("")

  result
    const convertCurrency = (devise, devise2, result) => {
      let convertResult = 0

      if(isNaN(result)) {
        convertResult = "Erreur"
      }
      else if(devise ==  'Euro' && devise2 == 'Dollar') {
         convertResult = result * 1.05
      } 
      else if(devise == 'Dollar' && devise2 == 'Euro') {
          convertResult = result * 0.9
      }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        setDevise(data.get('devise1'));
        setDevise2(data.get('devise2'));    
    }
    return (
      
      <>
        <AmountInput label="Montant" convertCurrency={convertCurrency} />
        <CurrencySelector 
        label="Devise" 
        currencies={["Euro", "USD"]} 
        handleSubmit={handleSubmit} 
        devise={devise} 
        devise2={devise2} />
      </>
    )
}

export default App;