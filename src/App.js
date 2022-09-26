import React, { useState } from "react";
import "./styles.css";

const travelDB = {
  HillStation: [
    { name: "Grindelwald, Switzerland", rating: "4.7/5" },
    { name: "Srinagar, India", rating: "4.7/5" },
    { name: "Lecco, Italy", rating: "4.7/5" },
    { name: "Hallstatt, Austria", rating: "4.6/5" },
    { name: "Dalat,Vietnam", rating: "4.6/5" }
  ],
  Deserts: [
    { name: "Lawrence of Arabia, Jorden", rating: "4.7/8" },
    { name: "Sahara, Morocco", rating: "4.7/5" },
    { name: "Thar desert Jaisalmer, India", rating: "4.6/5" },
    { name: "Al Hajar range, Oman", rating: "4.6/5" },
    { name: "Atacama desert, Chile", rating: "4.5/5" }
  ],
  Beaches: [
    { name: "Shoal Bay, Antigua", rating: " 4.8/5" },
    { name: "Glass Beach, California", rating: "4.7/5" },
    { name: "Fakistra, Greece", rating: "4.7/5" },
    { name: "Playa Del Amor(hidden beach), Mexico", rating: "4.6/5" },
    { name: "Goa, India", rating: "4.6/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("HillStation");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1> Travel ✈️ Destination </h1>

      <p style={{ padding: "1%", fontSize: "smaller" }}>
        I have given ratings for different kinds of Travel Destination. Select a
        genre to find out rating.
      </p>
      <hr />

      <div>
        {Object.keys(travelDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#60a5fa",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.8rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", width: "50%" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selectedGenre].map((destination) => (
            <li
              key={destination.name}
              style={{
                listStyle: "none",
                padding: "1rem 1rem",
                border: "1.5px solid black",
                width: "60%",
                margin: "4% 72.5%",
                borderRadius: "0.5rem",
                background: "#e5e7eb"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {destination.name}</div>
              <div style={{ fontSize: "smaller" }}> {destination.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
