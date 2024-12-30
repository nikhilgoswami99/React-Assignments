import { useState } from 'react'
import styles from './App.module.css'
import Data_Sliders from './components/sliders/sliders'

function App() {

  let [data, setData] = useState({
    homeValue: 3000,
    downPayment: 600,
    loanAmount: 2400,
    interestRate: 5,
    loanTerm: 5
  });

  function onChangeData(e)
  {

    let values = e.target.value;
    console.log(values);
    
    setData({...data, 
      homeValue: values,
    downPayment: values,
    loanAmount: values,
    interestRate: values,
    loanTerm: values
    });
    
  }

  return (
    <>
      <Data_Sliders onChangeData={(e) => {
        onChangeData(e)
      }} {...data}></Data_Sliders>
    </>
  )
}

export default App
