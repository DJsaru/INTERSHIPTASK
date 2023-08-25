import React from "react";
import { useQuery } from "react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";
import "moment/locale/en-gb";


  {/* ========= Fetching the Covid-19 Count Data ========= */}

const fetchWorldwideData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  return response.json();
};

  {/* ========= Fetching the Covid-19 Countries Data ========= */}

const fetchCountryData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  return response.json();
};

function Dashboard() {

    {/*==== Re-Fetching the data ====*/}
  const { data: worldwideData } = useQuery("worldwideData", fetchWorldwideData);
  const { data: countryData } = useQuery("countryData", fetchCountryData);


     {/* ========= Displaying the Country Data ========= */}

  const countryMarkers = countryData?.map((country) => (
    <Marker
      key={country.country}
      position={[country.countryInfo.lat, country.countryInfo.long]}
    >

        {/* ======= Details Of Each Country ======== */}
      <Popup>
        <div>

            {/*==== After clicking it shows country para ===== */}
          <h2>{country.country}</h2>
          <p>Total Active: {country.active}</p>
          <p>Total Recovered: {country.recovered}</p>
          <p>Total Deaths: {country.deaths}</p>


        </div>
      </Popup>
    </Marker>
  ));

  return (
    <div className="App">
      <header className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-semibold">COVID-19 Dashboard</h1>
      </header>
      <main className="p-4">
        <div className="mb-8">

            {/* ========= Displaying the Covid Data ========= */}

          <div className="flex justify-around">

                {/* ======== Total Cases ====== */}

            <div className="bg-blue-200 p-4 rounded shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Cases</h3>
              <h3>{worldwideData?.cases}</h3>
            </div>

                {/* ======== Total Recovered ====== */}

            <div className="bg-green-200 p-4 rounded shadow-md text-center">
              <h3 className="text-lg font-semibold text-red">Total Recovered</h3>
              <h3>{worldwideData?.recovered}</h3>             
            </div>

                {/* ======== Total Deaths ====== */}

            <div className="bg-red-200 p-4 rounded shadow-md text-center">
              <h3 className="text-lg font-semibold">Total Deaths</h3>
              <h3>{worldwideData?.deaths}</h3>
            </div>
          </div>
        </div>


        {/*========= Displaying the Country Data On Map =======*/}
        <div>
        <header className="bg-blue-600 p-2 text-white">
        <h1 className="text-2xl font-semibold">COUNTRY DATA</h1>
      </header>
          <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px" }}>

            {/*==== Country Map Image ====*/}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/*==== Marker Display On Map ====*/}
            {countryMarkers}

          </MapContainer>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
