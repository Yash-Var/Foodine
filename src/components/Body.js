import React, { useState } from "react";
import Crads from "./Crads";
import "../index.css";
import { cards } from "./Config";
// import Cards from "./Crads";
const Body = () => {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(cards);
  const filterData = (Cards, Search) => {
    console.log(Cards, Search);
    return Cards.filter((e) => e.data.name.includes(Search));
  };
  console.log(searchData);
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
        <button
          onClick={() => {
            const data = filterData(searchData, search);
            console.log(data);
            setSearchData(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="All-Cards">
        {searchData.map((e) => {
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
