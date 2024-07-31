import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/MovieList.css";

const MovieApp = () => {
  const [movies, setMovies] = useState([
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      showDetails: false,
    },
    {
      title: "The Godfather",
      genre: "Crime",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      showDetails: false,
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      showDetails: false,
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      description:
        "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      showDetails: false,
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      showDetails: false,
    },
    {
      title: "Inception",
      genre: "Sci-Fi",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      showDetails: false,
    },
    {
      title: "Fight Club",
      genre: "Drama",
      description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      showDetails: false,
    },
    {
      title: "The Matrix",
      genre: "Sci-Fi",
      description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      showDetails: false,
    },
    {
      title: "Goodfellas",
      genre: "Biography",
      description:
        "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
      showDetails: false,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Fantasy",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      showDetails: false,
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const showDetailsForMovie = (index) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie, i) =>
        i === index ? { ...movie, showDetails: true } : movie
      )
    );
  };

  const deleteMovie = (index) => {
    setMovies((delMovies) => delMovies.filter((_, i) => i !== index));
  };

  return (
    <div className="col-12 d-flex justify-content-center align-items-center mt-5 ">
      <ul className="list-group text-center col-md-6 bg-dark rounded-5 shadow-lg">
        {movies.map((movie, index) => (
          <li
            key={index}
            type="button"
            className={
              selectedIndex === index
                ? "list-group-item active bg-dark border-dark"
                : "list-group-item"
            }
            aria-current="true"
            onClick={() => {
              setSelectedIndex(index);
              showDetailsForMovie(index);
            }}
          >
            <h1>{movie.title}</h1>
            <p>{movie.genre}</p>

            {selectedIndex === index && movie.showDetails && (
              <>
                <div class="card">
                  <div class="card-body">
                    <p>{movie.description}</p>
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => deleteMovie(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieApp;
