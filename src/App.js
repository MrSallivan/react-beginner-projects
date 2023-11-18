import React, { useState, useEffect, useRef } from "react"
import { Block } from "./Block"
import "./index.scss"

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB")
  const [toCurrency, setToCurrency] = useState("USD")
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(1)
  // const [rates, setRates] = useState({ USDUSD: 1 })
  const ratesRef = useRef({})

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
      .then((result) => {
        ratesRef.current = result["quotes"]
        ratesRef.current["USDUSD"] = 1
        onChangeToPrice(1)
      })
      .catch((error) => console.log("error", error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    onChangeFromPrice(fromPrice)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromCurrency])

  React.useEffect(() => {
    onChangeToPrice(toPrice)
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toCurrency])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onChangeFromPrice(value) {
    const price = value / ratesRef.current[`USD${fromCurrency}`]
    const result = price * ratesRef.current[`USD${toCurrency}`]
    setToPrice(result.toFixed(3))
    setFromPrice(value)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onChangeToPrice(value) {
    const result =
      (ratesRef.current[`USD${fromCurrency}`] /
        ratesRef.current[`USD${toCurrency}`]) *
      value
    setFromPrice(result.toFixed(3))
    setToPrice(value)
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
