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
                  <span className="card-number card-circle subtle"> {curElement.id} </span>
                  {/* <span className="card-author subtle">{curElement.name}</span> */}
                  <h3 className="card-title">{curElement.name}</h3>
                  <span className="card-description subtle">
                  {curElement.description}
                  </span>
                  <div className="card-read">Read</div>
                </div>
                <img src={curElement.image} alt="images" className="card-media" />
                <button className="card-tag subtle btn-dangers">Order Now</button>
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
