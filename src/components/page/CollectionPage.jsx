import React from "react"
import { Link } from "react-router-dom"
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

const CollectionPage = ({ idCollection, collectionAll }) => {
  Fancybox.bind("[data-fancybox]", {})
  return (
    <div className="gallery">
      <Link className="gallery__back" to={"/projects/photos"}>
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
              <a key={i} href={image} className="gallery__item" data-fancybox>
                <img
                  key={i}
                  className="gallery__img"
                  src={image}
                  alt="pictires"
                />
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionPage
