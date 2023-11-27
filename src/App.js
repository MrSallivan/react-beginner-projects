import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import MainLayout from "./layout/mainLayout"
import CollectionLayout from "./layout/CollectionLayout"
import NotFound from "./components/page/NotFound"
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
  const countsCollection = collectionsAll.length
  const limit = 5
  return (
    <div className="App">
      <Routes>
        <Route
          path="/projects/photos/"
          element={
            <MainLayout countsCollection={countsCollection} limit={limit} />
          }
        />
        <Route
          path="/projects/photos/collection/:idCollection"
          element={<CollectionLayout collectionAll={collectionsAll} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
