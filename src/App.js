import React, { useState, useEffect } from "react"
import { Block } from "./Block"
import "./index.scss"

function App() {
  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState("RUB")
  const [toCurrency, setToCurrency] = useState("USD")
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(0)

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.Valute)
        console.log(json.Valute)
      })
      .catch((err) => {
        console.warn(err)
        alert("Не удалось получить информацию")
      })
  }, [])
  const onChangeFromPrice = (value) => {
    setFromPrice(value)
  }

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} />
    </div>
  )
}

export default App
