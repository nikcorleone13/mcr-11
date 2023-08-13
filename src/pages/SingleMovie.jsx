import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Navbar from "../components/Navbar";

const SingleMovie = () => {
  const [added, setAdded] = useState(false);
  const { movieTitle } = useParams();
  const { movies,updateWishlist } = useContext(DataContext);
  const showMovie = [...movies].filter(({ title }) =>
    title.toLowerCase().includes(movieTitle.toLocaleLowerCase())
  );

  const addedMessage = () => {
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const handleWishlistAdd =(movieToAdd) =>{
    updateWishlist(movieToAdd);
  }
  return (
    <div>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <div className="bg-gray-200 shadow-md rounded-lg h-[80%] w-[70%] flex items-center justify-center ">
          {[...showMovie].map((item) => {
            return (
              <>
                {/* // left image */}
                <div key={item.id}
                  style={{
                    backgroundImage: `url(${item.imageURL})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="rounded-t-md w-[30%] h-[90%]"
                ></div>
                {/* //right info */}
                <div className=" h-[70%] w-[50%] flex flex-col gap-4 mx-6 text-lg">
                  <p className="text-2xl font-bold capitalize">{item.title}</p>
                  <p>Year: {item.year}</p>
                  <p>
                    Genre:
                    {item.genre.map((genre, index) => (
                      <span key={index} className="ml-2">
                        {genre}
                        {index !== item.cast.length - 1 && ","}
                      </span>
                    ))}
                  </p>
                  <p>Rating: {item.rating}</p>
                  <p>Director: {item.director}</p>
                  <p>Writer: {item.writer}</p>
                  <p>
                    Cast:
                    {item.cast.map((actor, index) => (
                      <span key={index} className="ml-2">
                        {actor}
                        {index !== item.cast.length - 1 && ","}
                      </span>
                    ))}
                  </p>

                  <button
                    onClick={() => {
                      addedMessage();
                      setAdded(true);
                      handleWishlistAdd(item.id);
                    }}
                    className="w-[100%] mx-auto  bg-gray-800 text-white my-1 py-1 text-xl rounded-md"
                  >
                    Add to WatchList
                  </button>
                  {added && (
                    <p className="text-center font-medium">
                      Added to watchlist !!!!!
                    </p>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
