import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { DataContext } from "../context/DataContext";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const { movies, movieAddFunction } = useContext(DataContext);
  const [showMovies, setShowMovies] = useState([...movies]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("1950");
  const [rating, setRating] = useState("5");
  const [addItem, setAdd] = useState(false);

  // add item
  const [titleAdd, setTitleAdd] = useState("");
  const [yearAdd, setYearAdd] = useState("");
  const [genreAdd, setGenreAdd] = useState("");
  const [directorAdd, setDirectorAdd] = useState("");
  const [writerAdd, setWriterAdd] = useState("");
  const [castAdd, setCastAdd] = useState("");
  const [summaryAdd, setSummaryAdd] = useState("");
  const [imageURLAdd, setImageURLAdd] = useState("");
  useEffect(() => {
    setShowMovies([...movies]);
  }, [movies]);

  const handleGenreFilter = (gen) => {
    if (!gen) {
      setShowMovies([...movies]);
    }
    const genreFind = gen.toLowerCase();
    console.log("", gen);
    const op = [...movies];
    const filterOnGenre = [...op].filter((item) =>
      item.genre.some(
        (genre) => genreFind.toLowerCase() === genre.toLowerCase()
      )
    );
    console.log("fil gen", filterOnGenre);
    setRating("");
    setShowMovies([...filterOnGenre]);
  };

  // year
  const handleYearFilter = (age) => {
    console.log("", age);
    const op = [...showMovies];
    const filterOnyear = op.filter((item) => item.year >= age);
    setShowMovies([...filterOnyear]);
  };

  // rating

  const handleRatingsFilter = (rat) => {
    console.log("", rat);
    const op = [...showMovies];
    const filterOnrating = op.filter((item) => item.rating >= rat);
    setShowMovies([...filterOnrating]);
  };

  return (
    <div>
      <Navbar />
      {showMovies.length < 1 ? (
        <>
          <p className="text-6xl font-semibold text-center pt-20">
            Sad.....No movies found
          </p>
        </>
      ) : (
        <div className="w-[100%]">
          {addItem && (
            <div className=" absolute top-0 w-full h-[100%] bg-white flex items-start justify-center">
              <div className="bg-white h-[100%] w-[60%]">
                <button
                  onClick={() => setAdd(!addItem)}
                  className="text-xl px-3 py-1 bg-red-600 text-white rounded-lg flex items-center justify-center "
                >
                  Cancel
                </button>

                <div className="flex justify-center items-center  flex-col">
                  <div className=" w-[50%]">
                    <p>Title:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 border-bgPrimary px-2 rounded-md"
                      onChange={(e) =>setTitleAdd(e.target.value)}

                     />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Year:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      onChange={(e) => setYearAdd(e.target.value)}
                    />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Genre:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      onChange={(e) => setGenreAdd(e.target.value)}
                    />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Director:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      onChange={(e) => setDirectorAdd(e.target.value)}
                    />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Writer:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      onChange={(e) => setWriterAdd(e.target.value)}
                    />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Cast:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      value={castAdd}
                      onChange={(e) => setCastAdd(e.target.value)}
                    />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Summary:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      onChange={(e) => setSummaryAdd(e.target.value)}
                    />
                  </div>

                  <div className=" w-[50%] my-2">
                    <p>Image URL:</p>
                    <input
                      type="text"
                      className="w-[100%] border-2 p-2"
                      onChange={(e) => setImageURLAdd(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    setAdd(!addItem);
                    movieAddFunction(
                    {  titleAdd,
                      yearAdd,
                      genreAdd,
                      directorAdd,
                      writerAdd,
                      castAdd,
                      summaryAdd,
                      imageURLAdd
                    });
                  }}
                  className="text-xl px-3 py-1 bg-green-400 text-white rounded-lg flex items-center justify-center "
                >
                  Update
                </button>
              </div>
            </div>
          )}

          <div className="border-b-2  w-[100%] h-[70px] flex items-center">
            <div className=" w-[90%] flex justify-between items-center mx-auto text-lg">
              <p className="text-2xl font-semibold">Filters: </p>

              {/* genre */}
              <div className=" flex justify-center items-center gap-2">
                <h3 className="">Genre:</h3>
                <select
                  onChange={(e) => {
                    setGenre(e.target.value);
                    handleGenreFilter(e.target.value);
                  }}
                  className="border-2 border-bgPrimary px-2 rounded-md "
                >
                  <option value="Allgenre">All Genre</option>
                  <option value="Drama">Drama</option>
                  <option value="Crime">Crime</option>
                  <option value="Action">Action</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Fantasy">Fantasy</option>
                  <option value="Romance">Romance</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Biography">Biography</option>
                </select>
              </div>

              {/* year */}
              <div className=" flex justify-center items-center gap-2">
                <h3 className="">Release Year:</h3>
                <select
                  onChange={(e) => {
                    setYear(e.target.value);
                    handleYearFilter(e.target.value);
                  }}
                  className="border-2 border-bgPrimary px-2 rounded-md "
                >
                  <option value="Allgenre">All Year</option>
                  <option value="1990">1990</option>
                  <option value="2000">2000</option>
                  <option value="2010">2010</option>
                </select>
              </div>

              {/* rating */}
              <div className=" flex justify-center items-center gap-2">
                <h3 className="">Rating:</h3>
                <select
                  onChange={(e) => {
                    setRating(e.target.value);
                    handleRatingsFilter(e.target.value);
                  }}
                  className="border-2 border-bgPrimary px-2 rounded-md "
                >
                  <option value="">Rating</option>
                  <option value="9">9.0+</option>
                  <option value="8">8.0+</option>
                  <option value="7">7.0+</option>
                </select>
              </div>

              {/* add */}

              <button
                className="p-2 bg-blue-950 text-white rounded-md"
                onClick={() => setAdd(true)}
              >
                Add New Movie
              </button>
            </div>
          </div>
          <div className="w-[100%] flex justify-evenly flex-wrap gap-6 py-12">
            {[...showMovies].map((item) => {
              return <MovieCard item={item} key={item.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
