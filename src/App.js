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
    const price = value / rates[fromCurrency] ? rates[fromCurrency]['Value'] : 1
    const result = price * rates[toCurrency]["Value"]

    setToPrice(result)
    setFromPrice(value)
  }
  const onChangeToPrice = (value) => {
    const price = value * (rates[toCurrency] ? rates[toCurrency]["Value"] : 1)
    setToPrice(value)
    setFromPrice(price)
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
