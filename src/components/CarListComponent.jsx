import axios from "axios";

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import SearchCarComponent from "./SearchCarComponent";
import { Alert } from "react-bootstrap";

function CarListComponent() {
  const [cars, setCars] = useState([]);
  const [value, setValue] = useState("0");
  const [query, setQuery] = useState([]);

  const handleSubmit = async () => {
    const data = await axios.get(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    );
    const cars = await data.data;
    if (value === "true") {
      console.log("a");
      const selectResult = cars.filter(
        (car) => car.available === true && car.capacity >= query
      );
      setCars(selectResult);
    } else if (value === "false") {
      const selectResult = cars.filter(
        (car) => car.available === false && car.capacity >= query
      );
      setCars(selectResult);
    }
  };

  console.log(cars.length);

  const CarsList = () => {
    if (cars.length > 0) {
      return cars.map((cars, i) => {
        return (
          <div className="car-list" key={i}>
            <img className="car-image" src={cars.image} alt="" />
            <div className="car-manufacture">
              {cars.manufacture}/{cars.model}
            </div>
            <div className="car-rent">Rp {cars.rentPerDay} / hari</div>
            <div className="car-desc">{cars.description}</div>
            <div className="item-grup">
              <div>
                <Icon.People className="icon" aria-hidden="true" />
              </div>
              <p className="item-card">{cars.capacity} Orang</p>
            </div>
            <div className="item-grup">
              <div>
                <Icon.Gear className="icon" aria-hidden="true" />
              </div>
              <p className="item-card">{cars.transmission}</p>
            </div>
            <div className="item-grup">
              <div>
                <Icon.Calendar4 className="icon" aria-hidden="true" />
              </div>
              <p className="item-card">Tahun {cars.year}</p>
            </div>
          </div>
        );
      });
    } else if (query > 6) {
      return (
        <Alert className="alert" variant="danger">
          Mobil Tidak Tersedia!
        </Alert>
      );
    }
  };

  return (
    <>
      <SearchCarComponent
        value={value}
        handleSubmit={handleSubmit}
        setValue={setValue}
        setQuery={setQuery}
      />
      <div className="App">
        <header className="App-header">
          <div className="container car-container">
            <CarsList />
          </div>
        </header>
      </div>
    </>
  );
}

export default CarListComponent;
