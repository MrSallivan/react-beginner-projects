import React, { useEffect, useState } from "react"
import Collection from "./Collection"
import "./index.scss"

function App() {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    fetch("https://655b5afcab37729791a8f7f5.mockapi.io/photos")
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => {
        console.warn("Ошибка")
        alert("Ошибка при получении данных")
      })
  }, [])

  console.log(collections)

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          <li className="active">Все</li>
          <li>Горы</li>
          <li>Море</li>
          <li>Архитектура</li>
          <li>Города</li>
        </ul>
        <input className="search-input" placeholder="Поиск по названию" />
      </div>
      <div className="content">
        {collections.map((collect, index) => (
          <Collection key={index} name={collect.name} images={collect.photos} />
        ))}
      </div>
      <ul className="pagination">
        <li>1</li> 
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export default App
