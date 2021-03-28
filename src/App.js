import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import WeatherShow from "./components/WeatherShow";
import Daynext from "./components/Daynext";
import Day2next from "./components/Day2next";
import Footer from "./components/Footer";


function App() {
  const [city, setCity] = useState([]);
  const [celcius, setTemp] = useState(null);
  const [search, setSearch] = useState("kolkata");
  //const [data,setData] = useState();
  const [icon, setIcon] = useState();
  const [icon2, setIcon2] = useState();
  const [icon3, setIcon3] = useState();
  const [today, setToDate] = useState(null);
  const [dayOne, setDayOne] = useState(null);
  const [dayTwo, setDayTwo] = useState(null);
  const [tempOne, setTempOne] = useState(null);
  const [tempTwo, setTempTwo] = useState(null);

  //letsbuildApi= "https://weatherapi-com.p.rapidapi.com/forecast.json"
  useEffect(() => {
    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search}&days=3`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e01cf4f28dmshbf191d8b2d07cb0p1c4837jsnc8cacd965b30",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      }
    )
      .then((response) => {
        response.json().then((data) => {
          // console.log(data);

          if (data.location && data.forecast) {
            setCity(data.location.name);
            setTemp(data.forecast.forecastday[0].day.avgtemp_c);
            setTempOne(data.forecast.forecastday[1].day.avgtemp_c);
            setTempTwo(data.forecast.forecastday[2].day.avgtemp_c);
            let date = new Date();
            let day1 = new Date().toString();
            setToDate(day1.slice(0, 4));
            console.log(day1.slice(0, 4));

            const day2 = new Date(date);
            day2.setDate(day2.getDate() + 1);
            console.log(day2.toString().slice(0, 4));
            setDayOne(day2.toString().slice(0, 4));

            const day3 = new Date(date);
            day3.setDate(day3.getDate() + 2);
            console.log(day3.toString().slice(0, 4));
            setDayTwo(day3.toString().slice(0, 4));
          }

          if (data.forecast) {
            setIcon(data.forecast.forecastday[0].day.condition.icon);
            setIcon2(data.forecast.forecastday[1].day.condition.icon);
            setIcon3(data.forecast.forecastday[2].day.condition.icon);
          }
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div>
      <NavBar />
      <div className="container-fluid" style={{ height: 750 }}>

        <div className="row offset-4">
          <div className="col-md-3">
            <label className="search">
              <input
                type="text"
                name="city"
                autoComplete="off"
                onChange={(event) => {
                  console.log(event.target.value);
                  setSearch(event.target.value);
                }}
                value={search}
              />
            </label>
          </div>
        </div>

        <div>
          {!search ? (
            <span className="search btn-warning ml-2 text-bold">
              No Data Found
            </span>
          ) : (
            <WeatherShow name={city} day={today} temp={celcius} logo={icon} />
          )}
        </div>

        <div>
          {!search ? (
            <div> </div>
          ) : (
              <div className="mycr">
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">

                  <Daynext day={dayOne} name={city} temp={tempOne} logo={icon2} />
                </div>
                <div className="carousel-item">
                  <Day2next day={dayTwo} name={city} temp={tempTwo} logo={icon3}
                  />
                </div>

              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>

              </div>
            
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
