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
      <div className="pictures">
        {collectionAll
          .filter((item) => item.id == idCollection)[0]
          ["photos"].map((image, i) => (
            <img key={i} className="pic" src={image} alt="pictires" />
          ))}
      </div>
    </div>
  )
}

export default CollectionPage
