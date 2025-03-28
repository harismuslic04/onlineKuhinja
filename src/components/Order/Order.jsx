import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";

import "./Order.css";
export default function Order() {
  const {
    orderNum,
    setOrderNum,
    foodType,
    setFoodType,
    order,
    setOrder,
    cena,
    setCena,
    setNotification,
  } = useContext(AppContext);
  const handleAddToCart = () => {
    setNotification(true);
    navigate("/");
  };
  const [spices, setSpices] = useState([]);
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();
  const handleOrderNum = () => {
    setOrderNum(orderNum + 1);
  };
  const handleSpice = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSpices([...spices, value]); // Dodavanje zacina
    } else {
      setSpices(spices.filter((spice) => spice !== value)); // Brisanje zacina
    }
  };
  return (
    <div className="order">
      <div className="orderfirst">
        <i className="fa-solid fa-utensils">{orderNum}</i>
        <div className="orderimage">
          <img src="./1.jpg" alt="" />
        </div>
      </div>
      <div className="ordersecond">
        <h1>{foodType}</h1>
        {(foodType === "hamburger" ||
          foodType === "belo meso" ||
          foodType === "batak" ||
          foodType === "cevapi" ||
          foodType === "cheesburger" ||
          foodType === "domaca virsla") && <h2>Izaberi zacine:</h2>}
        {(foodType === "hamburger" ||
          foodType === "belo meso" ||
          foodType === "batak" ||
          foodType === "cevapi" ||
          foodType === "cheesburger" ||
          foodType === "domaca virsla") && (
          <div className="spice-boxes">
            {["kecap", "salata", "majonez", "tucana paprika"].map(
              (spice, spiceIndex) => {
                return (
                  <label key={spiceIndex} className="spice-label">
                    {spice}
                    <input
                      type="checkbox"
                      value={spice}
                      onChange={handleSpice}
                    />
                  </label>
                );
              }
            )}
          </div>
        )}
        <textarea
          placeholder="Napomena"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          className={
            foodType === "hamburger" ||
            foodType === "belo meso" ||
            foodType === "batak" ||
            foodType === "cevapi" ||
            foodType === "cheesburger" ||
            foodType === "domaca virsla"
              ? "textarea-notes"
              : "textarea-notes2"
          }
        ></textarea>
        <div
          className="order-button"
          onClick={() => {
            setOrder((prevOrder) => [
              ...prevOrder,
              {
                foodType,
                spices: Array.isArray(spices) ? spices : [spices],
                price: cena,
              },
            ]);
            handleOrderNum();
            handleAddToCart();
          }}
        >
          Dodaj u korpu
          <br />
          <span className="cena">{cena} din</span>
        </div>
      </div>
    </div>
  );
}
