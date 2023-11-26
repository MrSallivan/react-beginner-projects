import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/mainLayout"
import CollectionLayout from "./layout/CollectionLayout"
import "./index.scss"

function App() {
  const [collectionsAll, setCollectionsAll] = useState([])

  useEffect(() => {
    fetch(`https://655b5afcab37729791a8f7f5.mockapi.io/photos`)
      .then((res) => res.json())
      .then((data) => setCollectionsAll(data))
      .catch((err) => {
        console.warn(err)
        alert("Ошибка при получении данных")
      })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route
          path="/collection/:idCollection"
          element={<CollectionLayout collectionAll={collectionsAll} />}
        />
      </Routes>
    </div>
  )
}

export default App
