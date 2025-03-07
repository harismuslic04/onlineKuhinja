import React, { useContext, useState } from "react";
import "./Home.css";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const { orderNum, setOrderNum } = useContext(AppContext);
  return (
    <div className="main">
      <div className="first">
        <i className="fa-solid fa-utensils">{orderNum}</i>
        <div className="naslov">
          <h1>
            <span className="naslovh1">Poruci svoju</span> <br />
            omiljenu hranu
          </h1>
          <p>
            Nudimo Vam najukusnija domaca jela,rostilj,kao i palacinke <br />
            sveze pripremljene i dostavljene direktno na vasu adresu
          </p>
        </div>
      </div>
      <div className="second">
        <div className="header">
          <button>Kuvana jela</button>
          <button>Rostilj</button>
          <button>Slatki program</button>
          <button>Piće</button>
        </div>
        <div className="menu">
          <div
            onClick={() => {
              navigate("/Order");
            }}
            className="card"
          >
            <div className="card-image">
              <img src="./gulas.jpeg" alt="" />
            </div>
            <h2>gulas</h2>
            <h1>270din</h1>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="./pasulj.jpg" alt="" />
            </div>
            <h2>gulas</h2>
            <h1>270din</h1>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="./burger.jpg" alt="" />
            </div>
            <h2>gulas</h2>
            <h1>270din</h1>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="./gulas.jpeg" alt="" />
            </div>
            <h2>gulas</h2>
            <h1>270din</h1>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="./gulas.jpeg" alt="" />
            </div>
            <h2>gulas</h2>
            <h1>270din</h1>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="./gulas.jpeg" alt="" />
            </div>
            <h2>gulas</h2>
            <h1>270din</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
