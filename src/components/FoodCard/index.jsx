import React from "react";
import DefaultImage from "../../assets/img/default.png";

import { OrderPopup } from "../OrderPopup";
export const FoodCard = ({ foodItems, addToOrders }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="food-wrap d-flex-row">
        <div className="food-image">
          <img src={foodItems.image ? foodItems.image : DefaultImage} />
        </div>
        <div className="food-details">
          <h4 className="food-title">{foodItems.name}</h4>
          <h4 className="food-price">{`AED ${foodItems.price}`}</h4>
          <h4 className="food-description">
            {foodItems.description
              ? foodItems.description
              : "Description Not Available "}
          </h4>
          <button
            className="btn btn-sm"
            onClick={() => {
              toggleModal();
            }}
          >
            ADD
          </button>
        </div>
      </div>
      {isOpen && (
        <OrderPopup
          toggleModal={toggleModal}
          heading="Order"
          foodItems={foodItems}
          width={"medium"}
          addToOrders={addToOrders}
        />
      )}
    </>
  );
};
