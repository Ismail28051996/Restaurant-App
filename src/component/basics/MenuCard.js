import React from "react";

const MenuCard = ({ menues }) => {
  return (
    <>
    <section className="main-card--container">
      {menues.map((curElement) => {
        return (
          <>
            <div className="card-container" key={curElement.id}>
              <div className="card">
                <div className="card-body">
                  <center><span className="card-number card-circle subtle"> {curElement.id} </span></center><br />
                  {/* <span className="card-author subtle">{curElement.name}</span> */}
                  {/* <h3 className="card-title">{curElement.name}</h3> */}
                  <img src={curElement.image} alt="images" className="card-media" />
                  <center><h3 className="card-title">{curElement.name}</h3></center>
                  <div className="card-read">Read</div>
                  <span className="card-description subtle">
                  {curElement.description}
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
