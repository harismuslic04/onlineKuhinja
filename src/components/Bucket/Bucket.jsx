import React, { useContext, useState } from "react";
import "./Bucket.css";
import { AppContext } from "../AppContext";
import { Navigate, useNavigate } from "react-router-dom";
export default function Bucket() {
  const navigate = useNavigate();
  const {
    orderNum,
    setOrderNum,
    foodType,
    setFoodType,
    order,
    setOrder,
    cena,
    setCena,
  } = useContext(AppContext);
  return (
    <div className="bucketmain">
      <div className="bucket1"></div>
      <div className="bucket2">
        {order.map((type, typeIndex) => {
          return (
            <div className="bucketorder">
              <div className="bucketorder1">
                <h2>{type.foodType}</h2>
                {type.spices.length > 0 ? (
                  <p>Zacini: {type.spices.join(", ")}</p>
                ) : (
                  <p>Bez zacina </p>
                )}
              </div>

              <div className="bucketorder2">
                <p>{type.price} din</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bucket-button">
        Dodaj u korpu
        <br />
        <span className="cena">
          {order.reduce((acc, currItem) => {
            return acc + currItem.price;
          }, 0)}{" "}
          din
        </span>
      </div>
      <i
        className="fa-solid fa-arrow-left nazad"
        onClick={() => {
          navigate("/");
        }}
      ></i>
    </div>
  );
}
