import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from '../Context/ShopCantext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct'

function Product() {
  const all_products = useContext(ShopContext)
  const {productId} = useParams()

  const product = all_products.AllProduct.find((e) => e.id === Number(productId))
  
  return (
    <div>
      <ProductDisplay props={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product