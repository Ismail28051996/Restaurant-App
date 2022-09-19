import React ,{useState} from "react";
import "./style.css";
import Menu from './menuApi';
import MenuCard from "./MenuCard";

const Restaurant = () => {

  const [menuData, setMenudata] = useState(Menu);
  const filterItem = (category) => {
    const updatedList = Menu.filter((curElement)=>{
      return curElement.category === category;
    });
    setMenudata(updatedList);
  }
  return (
    <>
    <nav className="navbar">
      <div className="btn-group">
        <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>
          Breakfast</button>
        <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
        <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
        <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
        <button className="btn-group__item" onClick={()=>setMenudata(Menu)}>All</button>
      </div>
    </nav>
     <MenuCard menues = {menuData} />
    </>
  );
};

export default Restaurant;
