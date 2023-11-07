import React, { useState, useEffect } from "react"
import { Block } from "./Block"
import "./index.scss"

function App() {
  const [rates, setRates] = useState({})
  const [fromCurrency, setFromCurrency] = useState({})
  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((json) => setRates(json.Valute))
      .catch((err) => {
        console.warn(err)
        alert("Не удалось получить информацию")
      })
  }, [])
  console.log(rates)
  return (
    <div className="App">
      <Block
        value={0}
        currency="RUB"
        onChangeCurrency={(cur) => console.log(cur)}
      />
      <Block value={0} currency="USD" />
    </div>
  )
}

export default App
