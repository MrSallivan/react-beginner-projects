import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Collection from "../components/Collection"

const MainLayout = () => {
	const [collections, setCollections] = useState([])
  const [typeinput, setTypeinput] = useState("")
  const [categoryId, setCategoryId] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)

	useEffect(() => {
    setIsLoading(true)
    const category = categoryId ? `category=${categoryId}` : ""
    fetch(
      `https://655b5afcab37729791a8f7f5.mockapi.io/photos?page=${page}&limit=7&${category}`
    )
      .then((res) => res.json())
      .then((data) => setCollections(data))
      .catch((err) => {
        console.warn(err)
        alert("Ошибка при получении данных")
      })
      .finally(() => setIsLoading(false))
  }, [categoryId, page])

  const cats = [
    { name: "Все" },
    { name: "Море" },
    { name: "Горы" },
    { name: "Архитектура" },
    { name: "Города" }
  ]


  return (
    <main>
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((item, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={item.name}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <input
          value={typeinput}
          onChange={(e) => setTypeinput(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
          name="search"
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Загрузка ...</h2>
        ) : (
          collections
            .filter((item) =>
              item.name.toLowerCase().includes(typeinput.toLowerCase())
            )
            .map((collect, index) => (
              <Link to={`/collection/${collect.id}`} key={index} collections={collections}>
                <Collection
                  key={index}
                  name={collect.name}
                  images={collect.photos}
                />
              </Link>
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(4)].map((_, i) => (
          <li
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? "active" : ""}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default MainLayout
