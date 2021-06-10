import React from "react";
import DefaultImage from "../../assets/img/default.png";
import "./index.scss";
import Modal, { ModalTransition } from "@atlaskit/modal-dialog";

export const OrderPopup = ({
  toggleModal,
  width,
  heading,
  foodItems,
  addToOrders
}) => {
  const [quantity, setQuantity] = React.useState(0);

  const modifyQuantity = (method) => {
    if (method === "add") {
      let count = quantity + 1;
      setQuantity(count);
    } else {
      let count = quantity - 1;
      if (count >= 0) setQuantity(count);
    }
  };

  return (
    <>
      <ModalTransition>
        <Modal heading={heading} onClose={toggleModal} width={width}>
          <div className="food-modal-wrap d-flex-column">
            <div className="food-image">
              <img src={foodItems.image ? foodItems.image : DefaultImage} />
            </div>
            <div className="food-modal-details">
              <h4 className="food-modal-title">{foodItems.name}</h4>
              <h4 className="food-modal-price">{`AED ${foodItems.price}`}</h4>
              <h4 className="food-modal-description">
                {foodItems.description
                  ? foodItems.description
                  : "Description Not Available "}
              </h4>
              <div className="food-modal-quantity d-flex-row ">
                <h4 className="m-1">Quantity :</h4>
                <div className="d-flex-row flex-center">
                  <i
                    onClick={() => {
                      modifyQuantity("add");
                    }}
                    className="fa fa-plus m-1"
                  ></i>
                  <h4>{quantity}</h4>
                  <i
                    onClick={() => {
                      modifyQuantity("subtract");
                    }}
                    className="fa fa-minus m-1"
                  ></i>
                </div>
              </div>

              <button
                className="btn btn-sm"
                onClick={() => {
                  if (quantity > 0) {
                    addToOrders();
                  }
                  toggleModal();
                }}
              >
                BUY
              </button>
            </div>
          </div>
        </Modal>
      </ModalTransition>
    </>
  );
};
