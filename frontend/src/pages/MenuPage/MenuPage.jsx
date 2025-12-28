import React, { useContext } from 'react'
import { Context } from '../../context/Context.js'
import './MenuPage.css'

const MenuPage = () => {

  const { itemList, categoryList, url } = useContext(Context)

  return (
    <div className="menu-page">

      <h1 className="menu-page-title">MENIU</h1>
      <p className="menu-page-subtitle">Sofia Bistro</p>

      {categoryList.map((category, index) => (
        <div key={index} className="menu-category-section">

          <h2 className="menu-category-title">
            {category.name}
          </h2>

          <div className="menu-category-items">
            {
              itemList
                .filter(
                  item =>
                    item.category.toLowerCase() ===
                    category.name.toLowerCase()
                )
                .map(item => (
                  <div key={item._id} className="menu-page-item">

                    <div className="menu-page-item-text">
                      <p className="menu-page-item-name">
                        {item.name}
                      </p>
                      <p className="menu-page-item-description">
                        {item.description}
                      </p>
                    </div>

                    <div className="menu-page-item-image-wrapper">
                      <img
                        src={`${url}/images/${item.image}`}
                        alt={item.name}
                        className="menu-page-item-image"
                      />
                      <p className="menu-page-item-price">
                        {item.price} lei
                      </p>
                    </div>

                  </div>
                ))
            }
          </div>

        </div>
      ))}

    </div>
  )
}

export default MenuPage
