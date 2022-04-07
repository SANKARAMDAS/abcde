import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currentElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(currentElem)}
              >
                {currentElem}
              </button>
            )
          })}
          {/* <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button> */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
