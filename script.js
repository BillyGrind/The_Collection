let listMovies = [
  "Interstellar",
  "Evil Dead",
  "Saving Private Ryan",
  "Cloud Atlas",
  "John Wick",
  "Gravity",
  "Stalingrad",
  "Kingdom of Heaven",
  "Super 8",
  "Iron Sky",
];

const collection = [
  {
    movie_title: "Interstellar",
    release_date: "2014",
    genre: ["Sci-Fi", "Adventure"],
    movie_poster: "src/movie_poster/interstellar.jpg",
    director: "Christopher Nolan",
    resume:
      "In Earth's future, a global crop blight and second Dust Bowl are slowly rendering the planet uninhabitable. Professor Brand (Michael Caine), a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole. But first, Brand must send former NASA pilot Cooper (Matthew McConaughey) and a team of researchers through the wormhole and across the galaxy to find out which of three planets could be mankind's new home.",
  },
  {
    movie_title: "Evil Dead",
    release_date: "1981",
    genre: ["SuperNatural Horror"],
    movie_poster: "src/movie_poster/evil_dead.jpg",
    director: "Sam Raimi",
  },
  {
    movie_title: "Saving Private Ryan",
    release_date: "1998",
    genre: ["War", "Drama"],
    movie_poster: "src/movie_poster/saving_private_ryan.jpg",
    director: "Steven Spielberg",
  },
  {
    movie_title: "Cloud Atlas",
    release_date: "2012",
    genre: ["Sci-Fi"],
    movie_poster: "src/movie_poster/cloud_atlas.jpg",
    director: "Lana Wachowski",
  },
  {
    movie_title: "John Wick",
    release_date: "2014",
    genre: ["Action", "Thriller"],
    movie_poster: "src/movie_poster/john_wick.jpg",
    director: "Derek Kolstad",
  },
  {
    movie_title: "Gravity",
    release_date: "2013",
    genre: ["Sci-Fi", "Thriller"],
    movie_poster: "src/movie_poster/gravity.jpg",
    director: "Alfonso Cuaron",
  },
  {
    movie_title: "Stalingrad",
    release_date: "1993",
    genre: ["War", "Drama"],
    movie_poster: "src/movie_poster/stalingrad.jpg",
    director: "Joseph Vilsmaier",
  },
  {
    movie_title: "Kingdom of Heaven",
    release_date: "2005",
    genre: ["Historical", "Epic"],
    movie_poster: "src/movie_poster/kingdom_of_heaven.jpg",
    director: "Ridley Scott",
  },
  {
    movie_title: "Super 8",
    release_date: "2011",
    genre: ["Sci-Fi", "Thriller"],
    movie_poster: "src/movie_poster/super_8.jpg",
    director: "J.J. Abrams",
  },
  {
    movie_title: "Iron Sky",
    release_date: "2012",
    genre: ["Sci-Fi", "Action"],
    movie_poster: "src/movie_poster/iron_sky.jpg",
    director: "Timo Vuorensola",
  },
];

let container = document.querySelector(".container");

collection.forEach((element) => {
  //create new card
  let newCard = document.createElement("div");
  newCard.classList = "card";

  //construct content
  let content = `       
  <img src=${element.movie_poster}
 alt="interstellar"
 class="image"
 />
 <div class="contentText">
 <h2 class="title">${element.movie_title}</h2>
 <p class="genre">${element.genre}</p>
 <p class="director">${element.director}</p>
 <p class="release_date">${element.release_date}</p>
 <p class="resume">${element.resume}</p>
  <button class="delete_button">Delete</button>
 </div> `;

  newCard.innerHTML += content;

  // let caca = document.getElementsByClassName("delete_button");
  //  caca.addEventListener("click", () =>{
  //    newCard.remove();
  //  });

  let deleteButton = newCard.querySelector(".delete_button");
  deleteButton.addEventListener("click", () => {
    newCard.remove();
  });

  container.appendChild(newCard);

  console.log(`${element.genre}`);

  //   console.log(`${element.movie_title}`);
});
