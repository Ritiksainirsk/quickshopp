import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopCantext'
import dropDown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'

function ShopCategory(props) {

  const all_Products = useContext(ShopContext)

  console.log(window)

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" srcset="" className='bannerimg'/>      
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12 </span> out of 36 Product
        </p>

        <div className='shopCategory-Sort'>
          Sort by <img src={dropDown_icon} alt="" />          
        </div>
      </div>

      <div className="shopcategory-product">
        {all_Products.AllProduct.map((item,i)=>{
          if(props.category == item.category){
            return (
              <Item props={item} key={i}/>
            )
          }else{
            return null;
          }
        })}
      </div>

      <div className="category-loadmore">
        <button>Explore More</button> 
      </div>
    </div>
  )
}

export default ShopCategory