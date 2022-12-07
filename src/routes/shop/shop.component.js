import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { getCategoriesAndDocuments } from '../../utilities/firebase/firebase.utils'
import { setCategoriesMap } from '../../store/categories/category.action'

import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'

// import { ProductsContainer } from './shop.styles'

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap()
  }, [])

  return (
    <Routes>

      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />

    </Routes>
  )
}

export default Shop
