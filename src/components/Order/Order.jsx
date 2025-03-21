import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";

import "./Order.css";
export default function Order() {
  const { orderNum, setOrderNum, foodType, setFoodType } =
    useContext(AppContext);
  const [spices, setSpices] = useState([]);
  const [notes, setNotes] = useState([]);

  const handleSpice = (e) => {
    console.log(foodType);

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
          <img src="./burger.jpg" alt="" />
        </div>
      </div>
      <div className="ordersecond">
        <h1>{foodType}</h1>
        {foodType === "burger" && <h2>Izaberi zacine:</h2>}
        {foodType === "burger" && (
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
            foodType === "burger" ? "textarea-notes" : "textarea-notes2"
          }
        ></textarea>
        <div className="order-button">Dodaj u korpu</div>
      </div>
    </div>
  );
}
