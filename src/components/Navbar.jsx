import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { movies } from "../context/DataProvider";
import { DataContext } from "../context/DataContext";

const getActiveStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "yellow" : "white",
  font: isActive ? "bold" : "",
});

const Navbar = () => {
const navigate = useNavigate();
const {movies,updateMoviesOnSearch} = useContext(DataContext);



const handleMovieSearch = (movie) =>{
  console.log("searc",movie);
  if(movie.length >1){
    navigate("/");
    updateMoviesOnSearch(movie);  
  }
}

return (
    <div className="h-[80px] bg-gray-800 text-white  flex justify-center items-center">
      <div className="w-[90%] flex justify-between items-center text-xl">
        <div className="w-[20%] text-left items-start text-4xl uppercase font-bold cursor-pointer" onClick={() => navigate("/")}>IMDb</div>
        <div className="w-[40%] text-black">
        <input type="text" placeholder=" Search Movie" className="w-[100%] px-2 py-1 focus:outline-none rounded-md" onChange={(e) => handleMovieSearch(e.target.value)}/>
        </div>

        <div className="pl-[150px] text-2xl p-1 w-[40%] flex justify-center  ">
          <NavLink
            className=" navLink w-[50%] text-center"
            style={getActiveStyle}
            to="/"
          >
            Dashboard
          </NavLink>
          <NavLink
            className="navLink w-[50%]"
            style={getActiveStyle}
            to="/watchlist"
          >
            Watch Later
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
