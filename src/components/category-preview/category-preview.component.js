import { Link, useNavigate } from 'react-router-dom'
import ProductCard from '../product-card/product-card.component'
import Button from '../button/button.component'

import {
  CategoryPreviewContainer,
  Title,
  Preview
} from './category-preview.styles'

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate()
  // console.log('preview products: ', products)
  const handleNavigateClick = () => {
    // navigate(`/${title}`)
  }

  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
          {title.toUpperCase()}
        </Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
        }
      </Preview>
    </CategoryPreviewContainer>
  )
}

export default CategoryPreview