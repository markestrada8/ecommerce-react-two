import {
  createContext,
  useState,
  useEffect
} from "react";
import {
  getCategoriesAndDocuments,
  // addCollectionAndDocuments
} from "../utilities/firebase/firebase.utils.js";
import SHOP_DATA from '../shop-data.js'

export const CategoriesContext = createContext({
  categoriesMap: {}
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  // Inital Write to Firebase from local JSON (ONLY DO ONCE)
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      console.log(categoryMap)
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])


  const value = {
    categoriesMap: categoriesMap,
    setCategoriesMap: setCategoriesMap
  }

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}