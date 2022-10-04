import React from "react";

const MenuCard = ({ menues }) => {
  return (
    <>
    <section className="main-card--container">
      {menues.map((curElement) => {
        const {id, name, category, image, description}  = curElement;
        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  {/* <center><span className="card-number card-circle subtle"> {id} </span></center><br /> */}
                  {/* <span className="card-author subtle">{name}</span> */}
                  {/* <h3 className="card-title">{name}</h3> */}
                  <img src={image} alt="images" className="card-media" />
                  <center><h3 className="card-title">{name}</h3></center>
                  <div className="card-read">Read</div>
                  <span className="card-description subtle">
                  {description}
                  </span><br /><br />
                  <center><button className="card-tag subtle">Order Now</button></center>
                </div>
                
              </div>
            </div>
          </>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
