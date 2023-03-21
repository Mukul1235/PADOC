import { useEffect, useState } from "react";
import Layout from "../Layout";
import "./CartedMedicines.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CartedMedContainer = (props) => {
  const [totalmed, setTotalmed] = useState(0);
  useEffect(() => {
    setTotalmed(props.itemCount);
  }, [props.itemCount]);
  return (
    <div className="MedContainer">
      <img srcSet={props.image}></img>
      <label id="med_name">{props.name}</label>
      <br></br>
      <label id="med_cost">{props.cost}</label>
      <br></br>
      <label id="TotalMedCostLabel">
        Total Cost :
        <span id="TotalMedCost" style={{ margin: 5 }}>
          {totalmed * props.cost}
        </span>
      </label>
      <div className="quantity">
        <span
          id="decrement"
          onClick={() => {
            if (totalmed > 1) {
              setTotalmed(totalmed - 1);
              props.onSelect(props.id, totalmed - 1);
            }
          }}
        >
          -
        </span>
        <span id="count">{totalmed}</span>
        <span
          id="increment"
          onClick={() => {
            setTotalmed(totalmed + 1);
            props.onSelect(props.id, totalmed + 1);
          }}
        >
          +
        </span>
        <span
          id="trash"
          onClick={() => {
            props.onSelect(props.id, 0);
          }}
          style={{ fontSize: 20 }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </div>
    </div>
  );
};

const CartedMedicines = () => {
  const [cartedmed, setcartedmed] = useState(
    JSON.parse(localStorage.getItem("MedInCart")) || []
  );
  const [TotalCost, SetTotalCost] = useState(0);
  const [empty, setempty] = useState(0);

  useEffect(() => {
    localStorage.setItem("MedInCart", JSON.stringify(cartedmed));
    let Cost = 0;
    cartedmed.forEach((med) => {
      Cost += med.cost * med.itemCount;
    });
    SetTotalCost(Cost);
    if (Cost === 0) {
      setempty(1);
    }
  }, [cartedmed]);

  const handleClick = (id, itemCount) => {
    if (itemCount === 0) {
      const newlist = cartedmed.filter((med) => !(med.id === id));
      setcartedmed(newlist);
    } else {
      const newlist = cartedmed.map((med) => {
        if (med.id === id) {
          med.itemCount = itemCount;
        }
        return med;
      });
      setcartedmed(newlist);
    }
  };

  const handlePayment = async() => {
    const res = await axios.post("/payment", {
      firstName: "Fred",
      lastName: "Flintstone",
    });
    console.log(res.data);
  };

  return (
    <>
      <Layout />
      <div className="Medicines_Carted">
        {empty ? (
          <div id="Empty_Cart">
            <label>Nothing is in Cart !</label>
            <br></br>
            <label>Cart is Empty !</label>
          </div>
        ) : (
          cartedmed.map((medicine, index) => (
            <CartedMedContainer
              name={medicine.name}
              cost={medicine.cost}
              image={medicine.img}
              id={medicine.id}
              itemCount={medicine.itemCount}
              onSelect={handleClick}
              key={index}
            />
          ))
        )}
      </div>
      <div className="payment">
        <label id="TotalCostLabel">TotalCost : </label>
        <label id="TotalCost">{TotalCost}</label>
        <button id="paymentBtn" onClick={handlePayment}>
          Payment
        </button>
      </div>
    </>
  );
};

export default CartedMedicines;
