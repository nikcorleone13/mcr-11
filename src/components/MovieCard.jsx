import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const MovieCard = ({ item }) => {
  const {updateWishlist} =useContext(DataContext);


  const handleAddToWishlist = (movieToAdd) =>{
    updateWishlist(movieToAdd);
  }
  return (
    <div className="shadow-md my-4 border-2 w-[25%] h-[475px] flex flex-col rounded-md justify-between pb-2">
      <div
        style={{
          backgroundImage: `url(${item.imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          
        }}
        className="rounded-t-md w-[100%] h-[300px]"
      ></div>
      {/* info */}
      <div className="w-[100%]  text-center px-2">
        <Link to={`/movies/${item.title}`}>
          {" "}
          <p className="my-1 cursor-pointer underline underline-offset-2 text-2xl text-center font-bold ">{item.title}</p>
        </Link>
        <p className="my-2 line-clamp-5 text-center">{item.summary}</p>
      </div>
      <button
        onClick={() => handleAddToWishlist(item.id)}
      className="w-[95%] mx-auto  bg-gray-800 text-white my-1 py-1 text-xl rounded-md">Add to WatchList</button>
    </div>
  );
};

export default MovieCard;
