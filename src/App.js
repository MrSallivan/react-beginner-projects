import React, { useState, useEffect } from "react"
import { Block } from "./Block"
import "./index.scss"

function App() {
  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [toCurrency, setToCurrency] = useState("RUB")
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  useEffect(() => {
    var myHeaders = new Headers()
    myHeaders.append("apikey", "S2vIv5tp5Ce2wHRiS5DNpuBLFvAUy65A")

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders
    }
    fetch(
      "https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR%2CGBP%2CRUB",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setRates(result["quotes"]))
      .catch((error) => console.log("error", error))
  }, [])

  const onChangeFromPrice = (value) => {
			const cur = Object.keys(rates).find((itemCur)=>itemCur.includes(fromCurrency)) 
			console.log(cur)
      const price = value / rates[cur]
      const result = price * rates[`USD${toCurrency}`]

      setToPrice(result)
      setFromPrice(value)
   
  }
  const onChangeToPrice = (value) => {
  
  }

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  )
}

export default App
