// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function SearchCarComponent() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <section id="search-box" className="mb-5" style={{ marginTop: "-50px" }}>
      <div className="container d-flex justify-content-center">
        <div
          className="card p-3"
          style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", width: "100%" }}
        >
          <div className="row">
            <div className="col-lg-2 d-flex flex-column justify-content-between form">
              <p>Tipe Driver</p>
              <select className="form-select" id="driver" required>
                <option className="item" value="" disabled selected hidden>
                  Pilih Tipe Driver
                </option>
                <option className="item" value="true">
                  Dengan Sopir
                </option>
                <option className="item" value="false">
                  Tanpa Sopir (Lepas Kunci)
                </option>
              </select>
            </div>

            <div className="col-lg-2 d-flex flex-column justify-content-between form">
              <p>Tanggal</p>
              <DatePicker
                id="date"
                className="datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="col-lg-3 d-flex flex-column justify-content-between form">
              <p>Waktu Jemput/Ambil</p>
              <select
                className="form-select"
                id="time"
                required
                placeholder="Pilih Waktu"
              >
                <option value="" disabled selected hidden>
                  Pilih Waktu
                </option>
                <option value=""> 07.00 WIB</option>
                <option value=""> 08.00 WIB</option>
                <option value=""> 09.00 WIB</option>
                <option value=""> 10.00 WIB</option>
                <option value=""> 11.00 WIB</option>
                <option value=""> 12.00 WIB</option>
                <option value=""> 13.00 WIB</option>
                <option value=""> 14.00 WIB</option>
                <option value=""> 15.00 WIB</option>
                <option value=""> 16.00 WIB</option>
                <option value=""> 17.00 WIB</option>
              </select>
            </div>

            <div className="col-lg-3 d-flex flex-column justify-content-between form">
              <p>Jumlah Penumpang (Opsional)</p>
              <input
                type="text"
                className="form-control"
                id="passenger"
                required
                placeholder="Jumlah Penumpang"
              />
            </div>

            <div className="col-lg-2 d-flex align-items-center button">
              <button className="btn btn-search">Cari Mobil</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchCarComponent;
