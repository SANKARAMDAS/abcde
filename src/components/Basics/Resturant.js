import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [...new Set(Menu.map((curElement) => {
   return curElement.category;
})),
"All",
];

console.log(uniqueList);

export const Resturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (catagory) => {
      if (catagory === "All") {
          setMenuData(Menu);
          return;
      }
      const updateedList = Menu.filter((currentElem) => {
          return currentElem.category === catagory;
      });
      setMenuData(updateedList);
  };

 
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuD={menuData}/>
    </>
  )
}
