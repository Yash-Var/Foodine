const Cards = (props) => {
  const { img_id, name, cuisines, rating } = props;
  //   console.log(props);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${img_id}`}
        alt={name}
        className="card-image"
      />
      <h1>{name}</h1>
      <div>{cuisines.join(", ")}</div>
      <div>Star {rating}</div>
      {/* <div>{yash}</div> */}
    </div>
  );
};
export default Cards;
