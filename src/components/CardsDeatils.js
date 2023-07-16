import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmmer from "./Shimmer";
const CardsDetails = () => {
  const [cardDetails, setCardDetails] = useState("");
  const resid = useParams();
  console.log(resid);
  const getFetchCardDetails = () => {
    fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resid?.id}`
    )
      .then((data) => data.json())
      // .then((d) => console.log(d))
      .then((d) => setCardDetails(d));
    console.log(cardDetails);
  };
  // console.log(resid);
  useEffect(() => {
    getFetchCardDetails();
  }, []);
  if (!cardDetails) return <Shimmmer />;

  return (
    <>
      <h1>
        Restaurant ID : {cardDetails?.data?.cards[0]?.card?.card?.info?.id}
      </h1>
      <h1>
        Restaurant Name : {cardDetails?.data?.cards[0]?.card?.card?.info?.name}{" "}
      </h1>
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cardDetails?.data?.cards[0]?.card?.card?.info.cloudinaryImageId
        }
        alt="Restaurant Image"
      />
      {console.log()}
    </>
  );
};

export default CardsDetails;
