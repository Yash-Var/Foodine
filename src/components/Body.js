import React, { useState, useEffect } from "react";
import Crads from "./Crads";
import "../index.css";
import { cards } from "./Config";
import Shimmmer from "./Shimmer";
import { Link } from "react-router-dom";
// import Cards from "./Crads";
const Body = () => {
  const [search, setSearch] = useState("");
  const [allSearchData, setAllSearchData] = useState([]);
  const [searchFilterData, setSearchFilterData] = useState([]);
  const filterData = (Cards, Search) => {
    return Cards.filter((e) =>
      e?.data?.name?.toLowerCase()?.includes(Search?.toLowerCase())
    );
  };

  const getFetchdata = () => {
    return fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((d) => {
        setAllSearchData(d?.data?.cards[2]?.data?.data?.cards);
        setSearchFilterData(d?.data?.cards[2]?.data?.data?.cards);
      });
  };
  useEffect(() => {
    getFetchdata();
  }, []);
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
            const data = filterData(allSearchData, search);

            setSearchFilterData(data);
          }}
        >
          Search
        </button>
      </div>
      {allSearchData?.length === 0 ? (
        <>
          <Shimmmer />
        </>
      ) : (
        <div className="All-Cards">
          {searchFilterData?.length === 0 ? (
            <>
              <h1>restaurant does not found....</h1>
            </>
          ) : (
            searchFilterData.map((e) => {
              return (
                <Link to={"/restaurant/" + e.data.id} key={e.data.id}>
                  <Crads
                    name={e.data.name}
                    img_id={e.data.cloudinaryImageId}
                    cuisines={e.data.cuisines}
                    rating={e.data.avgRating}
                  />
                </Link>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
