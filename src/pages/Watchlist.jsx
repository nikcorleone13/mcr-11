import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { DataContext } from "../context/DataContext";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { wishlist,removeFromWishlist } = useContext(DataContext);
  localStorage.setItem("watch",wishlist)


  const [showWish, setShowWish] = useState([...wishlist]);

  useEffect(() => {
    setShowWish(localStorage.getItem('watch')|| [...wishlist]);

  }, [wishlist]);

  const handleRemove = (movieId) =>{
    removeFromWishlist(movieId);
  }
  return (
    <div>
      <Navbar />
      <div>
        {wishlist.length <= 0 ? (
          <>
            <p className="text-6xl font-semibold text-center pt-20">
              Empty watch list.
            </p>
          </>
        ) : (
          <div>
            <div className="">
              <p className="text-6xl font-semibold text-center pt-4">Movies in Watch Later</p>
              <div className="w-[100%] flex justify-start flex-wrap gap-12 py-12 px-8">
                {[...showWish].map((item) => {
                  return (
                    <div className="shadow-md my-4 border-2 w-[25%] h-[400px] flex flex-col rounded-md justify-between pb-2">
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
                    <div className="w-[100%] flex flex-col justify-between  px-2">
                      <Link to={`/movies/${item.title}`}>
                        {" "}
                        <p className="my-1 cursor-pointer underline underline-offset-2 text-2xl text-center font-bold ">{item.title}</p>
                      </Link>
                      <p className="my-2 line-clamp-5 text-center">{item.summary}</p>
                    </div>
                    <button
                    onClick={() => handleRemove(item.id)}
                      className="w-[95%] mx-auto border-2 border-red-600   bg-white text-red-600  my-1 py-1 text-xl rounded-md">Remove from Watchlist</button>
                  </div>

                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
