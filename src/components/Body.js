import React, { useState, useEffect } from "react";
import Crads from "./Crads";
import "../index.css";
import { cards } from "./Config";
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
  return allSearchData?.length === 0 ? (
    <>
      <h1>Shimmer Ui.....</h1>
    </>
  ) : (
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
      <div className="All-Cards">
        {console.log(searchFilterData?.length)}
        {searchFilterData?.length === 0 ? (
          <>
            <h1>restaurant does not found....</h1>
            {console.log(searchFilterData?.length)}
          </>
        ) : (
          searchFilterData.map((e) => {
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
          })
        )}
      </div>
    </>
  );
};

export default Body;
