import React from "react"
import { Link } from "react-router-dom"

const CollectionPage = ({ idCollection, collectionAll }) => {

  return (
    <div className="gallery">
      <Link className="gallery__back" to={"/"}>
        Назад
      </Link>
      <p className="gallery__title">
        {collectionAll.filter((item) => item.id == idCollection)[0]["name"]}
      </p>
      <div className="gallery__content">
        <div className="gallery__items">
          {collectionAll
            .filter((item) => item.id == idCollection)[0]
            ["photos"].map((image, i) => (
              <div key={i} className="gallery__item">
                <img
                  key={i}
                  className="gallery__img"
                  src={image}
                  alt="pictires"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionPage
