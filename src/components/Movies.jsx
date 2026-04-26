import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');

  const [page, setPage] = useState(1);


  const showMovies = async () => {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=a148bb4&s=batman&page=${page}`);
    setMovies(response.data);
  };


  useEffect(() => {
    showMovies();
  }, [page,]);

  const nextBtn = () => {
    setPage(e => e + 1);
    console.log(page);
  }

  const prevBtn = () => {
    if (page > 1) {
      setPage(e => e - 1);
      console.log(page);
    }



  }



  // search move

  // https://www.omdbapi.com/?apikey=a148bb4&s=movieName

  const searchMovies = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=a148bb4&s=${input}`);
      console.log(response)
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }




    setInput('');
  };



  return (
    <div className=' py-4 ' >


      <div className="max-w-293 mx-auto  p-3 my-3 rounded">

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-6">

          {/* Search */}
          <form
            onSubmit={searchMovies}
            className="w-full sm:flex-1"
          >
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              type="search"
              placeholder="Search movies..."
              className="w-full bg-white rounded p-2 text-lg text-black outline-none"
            />
          </form>

          {/* Pagination */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-3 text-white">

            <button
              onClick={prevBtn}
              disabled={page === 1}
              className={`px-4 py-2 rounded text-lg transition 
          ${page === 1
                  ? "bg-blue-700/50 cursor-not-allowed"
                  : "bg-blue-700 hover:bg-blue-800 cursor-pointer "
                }`}
            >
              Prev
            </button>

            <p className="text-lg font-semibold">
              Page {page}
            </p>

            <button
              onClick={nextBtn}
              className="px-4 cursor-pointer py-2 rounded text-lg bg-blue-700 hover:bg-blue-800 transition"
            >
              Next
            </button>

          </div>

        </div>
      </div>




      <div className=' p-5 sm:p-2  max-w-293 m-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-4 ' >

        {movies.Response === 'True' ? <Cart data={movies?.Search} /> :
          <h2 className='bg-white text-center  rounded  p-4 text-2xl font-semibold  capitalize  ' >No movies found</h2>
        }
      </div>



    </div>
  )
}



const Cart = ({ data }) => {
  return (
    data.map((item, i) => {
      return (
        <div key={i} className=' cursor-pointer text-white bg-[#222222] rounded-lg ' >
          <img className='w-full h-75 ' src={item.Poster} alt={item?.Title} />

          <div className='p-3 text-white ' >
            <h2 className='text-xl line-clamp-1 font-bold ' >{item?.Title}</h2>
            <h3 className='text-lg font-semibold py-1 ' >{item?.Year }</h3>
          </div>

        </div>
      )
    })

  )
}

export default Movies
