import React ,{useState} from "react";
import "./style.css";
import Menu from './menuApi';
import MenuCard from "./MenuCard";
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElement)=>{
  return curElement.category;
     })
),
'All',
];
// console.log(uniqueList);

const Restaurant = () => {
  
  const [menuData, setMenudata] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  
  const filterItem = (category) => {
    if(category === "All"){
      setMenudata(Menu);
      return;
    }
    
    const updatedList = Menu.filter((curElement)=>{
      return curElement.category === category;
    });
    setMenudata(updatedList);
  }

  return (
    <>
    <Navbar filterItem = {filterItem} menuList = {menuList}/>
    <MenuCard menues = {menuData} />
    </>
  );
};

export default Restaurant;
