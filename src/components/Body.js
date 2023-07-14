import React, { useState } from "react";
import Crads from "./Crads";
import "../index.css";
import { cards } from "./Config";
// import Cards from "./Crads";
const Body = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search restaurant "
          className="search-box"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button>Search</button>
      </div>
      <div className="All-Cards">
        {cards.map((e) => {
          //   console.log(e.data.cloudinaryImageId);
          return (
            <Crads
              name={e.data.name}
              img_id={e.data.cloudinaryImageId}
              cuisines={e.data.cuisines}
              rating={e.data.avgRating}
              key={e.data.id}
            />
          );
        })}
        {/* <Crads name="yash" cuisines="yash" rating="8.0" /> */}
        {/* <Crads />
        <Crads />
        <Crads />
        <Crads />
        <Crads />
        <Crads />
        <Crads />
        <Crads />
        <Crads /> */}
      </div>
    </>
  );
};

export default Body;
