import React, { useContext, useState } from "react";
import "./Home.css";
import { AppContext } from "../AppContext";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  const { orderNum, setOrderNum, foodType, setFoodType, cena, setCena } =
    useContext(AppContext);
  const [foodMenu, setFoodMenu] = useState({
    gulas: 270,
    pasulj: 250,
    hamburger: 230,
    batak: 250,
    "belo meso": 250,
    cevapi: 50,
    cheesburger: 250,
    domacavirsla: 230,
    teletina: 400,
    "palacinka nutela": 250,
    "palacinka eurokrem": 250,
    rosa: 70,
    "coca cola": 80,
    fanta: 80,
    guarana: 80,
    ultra: 80,
    jabuka: 80,
  });

  const handleFoodType = (arg) => {
    setFoodType(arg);
  };
  const kuvanajela = { gulas: 270, pasulj: 250 };
  const rostilj = {
    hamburger: 230,
    batak: 250,
    "belo meso": 250,
    cevapi: 50,
    cheesburger: 250,
    domacavirsla: 230,
    teletina: 400,
  };
  const slatko = { "palacinka nutela": 250, "palacinka eurokrem": 250 };
  const pice = {
    rosa: 70,
    "coca cola": 80,
    fanta: 80,
    guarana: 80,
    ultra: 80,
    jabuka: 80,
  };
  return (
    <div className="main">
      <div className="first">
        <i
          className="fa-solid fa-utensils"
          onClick={() => {
            navigate("/bucket");
          }}
        >
          {orderNum}
        </i>
        <div className="naslov">
          <h1
            onClick={() => {
              console.log(foodMenu);
            }}
          >
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
          <button
            onClick={() => {
              setFoodMenu(kuvanajela);
            }}
          >
            Kuvana jela
          </button>
          <button
            onClick={() => {
              setFoodMenu(rostilj);
            }}
          >
            Rostilj
          </button>
          <button
            onClick={() => {
              setFoodMenu(slatko);
            }}
          >
            Slatki program
          </button>
          <button
            onClick={() => {
              setFoodMenu(pice);
            }}
          >
            Piće
          </button>
        </div>
        <div className="menu">
          {Object.entries(foodMenu).map(([naziv, cena], foodIndex) => {
            return (
              <div className="card">
                <div
                  onClick={() => {
                    navigate("/Order");
                    handleFoodType(naziv);
                    setCena(cena);
                  }}
                  className="card-image"
                >
                  {/* <img src={`./${foodIndex}.jpg`} alt="" /> */}
                  <img src={`./1.jpg`} alt="" />
                </div>
                <h2>{naziv}</h2>
                <h1>{cena}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
