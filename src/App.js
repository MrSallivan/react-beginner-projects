import React from "react"
import { Routes, Route } from "react-router-dom"
import "./index.scss"
import MainLayout from "./layout/mainLayout"
import CollectionLayout from "./layout/CollectionLayout"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route
          path="/collection/:idCollection"
          element={<CollectionLayout />}
        />
      </Routes>
    </div>
  )
}

export default App
