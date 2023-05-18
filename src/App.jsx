/* eslint-disable react/jsx-key */
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import HeroComponent from "./components/HeroComponent";
import ServiceComponent from "./components/ServiceComponent";
import WhyUsComponent from "./components/WhyUsComponent";
import TestimoniComponent from "./components/TestimoniComponent";
import BannerComponent from "./components/BannerComponent";
import FaqComponent from "./components/FaqComponent";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavbarComponent />
//         <HeroComponent />
//       </div>
//     );
//   }
// }

// function App() {
//   //define state
//   const [posts, setPosts] = useState([]);

//   //useEffect hook
//   useEffect(() => {
//     //panggil method "fetchData"
//     fectData();
//   }, []);

//   //function "fetchData"
//   const fectData = async () => {
//     //fetching
//     const response = await axios.get(
//       "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
//     );
//     //get response data
//     const data = await response.data;

//     //assign response data to state "posts"
//     setPosts(data);
//   };

//   const CarsList = () => {
//     return posts.map((cars, i) => {
//       return (
//         <div className="card" key={i}>
//           <img className="Car-image" src={cars.image} alt="" />
//           <div className="Car-manufacture">Manufacture: {cars.manufacture}</div>
//           <div className="Car-rent">Biaya Rental: Rp{cars.rentPerDay}</div>
//           <div className="Car-year">Tahun Rilis: {cars.year}</div>
//         </div>
//       );
//     });
//   };

//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <h1>Data Mobil</h1>
//           <div className="Car-container">
//             <CarsList />
//           </div>
//         </header>
//       </div>
//     </>
//   );
// }

// export default App;

function App() {
  return (
    <div>
      <HeroComponent />
      <ServiceComponent />
      <WhyUsComponent />
      <TestimoniComponent />
      <BannerComponent />
      <FaqComponent />
    </div>
  );
}

export default App;
