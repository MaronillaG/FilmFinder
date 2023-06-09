 export function updateMovieData(obj) {
  console.log('imported obj', obj)
  const title = obj.title; // access and store the film's title in a variable.
  delete obj.title; // remove the key:val pair of title:'tile of movie'
  const filmEntry = {[title]: obj} // create new object with only one key:val pair. key is the title. value are all the other key:val pairs.
  console.log('cleansed:', filmEntry); // check

  const key = Object.keys(filmEntry)[0]; // stores title property in a key variable
  movieData[key] = filmEntry[key]; // updates/adds a new object inside movieData. Problem: data lost when switching between windows. 

  localStorage.setItem('updatedData', JSON.stringify(movieData)); // movieData should now have new entry. Then this is added to local storage
  console.log('should show update object: ',movieData) //check
}

export const movieData = {
    "The Darjeeling Limited": {
      plot: "A year after their father's funeral, three brothers travel across India by train in an attempt to bond with each other.",
      cast: ["Jason Schwartzman", "Owen Wilson", "Adrien Brody"],
      runtime: 151,
      rating: 7.2,
      year: 2007,
      img: "https://raw.githubusercontent.com/MaronillaG/FilmFinder/main/Assets/Darjeeling_Limited_Poster.jpg",
    },
    "Battle Royale": {
      plot: "In the future, the Japanese government captures a class of ninth-grade students and forces them to kill each other under the revolutionary \"Battle Royale\" act.",
      cast: ["Tatsuya FujiwaraAki", "Aki Maeda", "Tarô Yamamoto"],
      runtime: 113,
      rating: 7.6,
      year: 2000,
      img: "https://raw.githubusercontent.com/MaronillaG/FilmFinder/main/Assets/BR.jpg",
    },
    "The Royal Tenenbaums": {
      plot: "The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons",
      rating: 7.6,
      year: 2001,
      cast: ["Gene Hackman", "Gwnyeth Paltrow", "Anjelica Huston"],
      runtime: 170,
      img: "https://raw.githubusercontent.com/MaronillaG/FilmFinder/main/Assets/The_Royal_Tenenbaums_Poster.webp",
    },
    "Fantastic Mr. Fox": {
      year: 2009,
      plot: "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
      cast: [
        "George Clooney",
        "Meryl Streep",
        "Bill Murray",
        "Jason Schwartzman",
      ],
      runtime: 147,
      rating: 7.9,
      img: "https://raw.githubusercontent.com/maronillaG/filmFinder/main/Assets/fantastic_fox.jpeg",
    },
    "The Grand Budapest Hotel": {
      rating: 8.1,
      runtime: 159,
      year: 2014,
      plot: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric"],
      img: "https://raw.githubusercontent.com/maronillaG/filmFinder/main/Assets/Grand_Budapest_Hotel.webp",
    },
    "Harry Potter and the Half-Blood Prince": {
      rating: 8.1,
      runtime: 153,
      year: 2009,
      plot: "As Harry Potter begins his sixth year at Hogwarts, he discovers an old book marked as \"the property of the Half-Blood Prince\" and begins to learn more about Lord Voldemort's dark past.",
      cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
      img: "https://raw.githubusercontent.com/maronillaG/filmFinder/main/Assets/hp.webp",
    },
  };