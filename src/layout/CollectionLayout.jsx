import React from "react"
import { useParams } from "react-router-dom"
import NotFound from "../components/page/NotFound"
import CollectionPage from "../components/page/CollectionPage"

const CollectionLayout = ({ collectionAll }) => {
  const params = useParams()
  const { idCollection } = params

  return (
    <>
      {idCollection <= collectionAll.length ? (
        <CollectionPage
          idCollection={idCollection}
          collectionAll={collectionAll}
        />
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default CollectionLayout
