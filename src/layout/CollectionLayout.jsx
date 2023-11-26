import React from "react"
import { useParams } from "react-router-dom"
import MainLayout from "./mainLayout"
import CollectionPage from "../components/page/CollectionPage"

const CollectionLayout = ({ collectionAll }) => {
  const params = useParams()
  const { idCollection } = params

  return (
    <>
      {idCollection ? (
        <CollectionPage
          idCollection={idCollection}
          collectionAll={collectionAll}
        />
      ) : (
        <MainLayout />
      )}
    </>
  )
}

export default CollectionLayout
