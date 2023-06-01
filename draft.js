import { movieData } from './data.js';
// --- take user input and store in javascript variable when user presses enter or clicks the search icon

const submit = document.querySelector('#search-submit');
const userInput = document.querySelector('#search-box');
let searchTerm = '';

submit.addEventListener('click', function() {
    searchTerm = userInput.value;
    console.log('icon: ',searchTerm);
});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchTerm = userInput.value;
        console.log('enter: ',searchTerm);
    }
});

console.log('is this changed?: '+searchTerm);

console.log( Object.keys(movieData));

for (let movieTitle of Object.keys(movieData)) {
    if (movieTitle === searchTerm) {
        console.log('match found');
    } else {
        console.log('not working')
    }
}

// --- return key as movie name and store in  variable for innerHTML.
let movieName = '';
for (let key of Object.keys(movieData)) {
    if (key === searchTerm)  movieName = key;
};
console.log(movieName)

// --- generate html film tile based on database contents: 
const tileDeck = document.querySelector('section'); // location of where to insert tile
const tile = document.createElement('div'); // tile that we are creating
tile.setAttribute('id', 'film-tile');

searchTerm = 'The Grand Budapest Hotel' // check that this works.

tile.innerHTML = `
<img id='film-poster' src=${movieData[searchTerm].img}>
<h3 id='film-title'>${movieName}</h3>
<ul id='film-info'>
   <li id='year'>(${movieData[searchTerm].year}) </li>
   <li id='rating'>${movieData[searchTerm].rating}</li>
<ul>
`
tileDeck.append(tile);

// if user input === keyName in movieData then generate html tile.

if ( searchTerm in movieData ) {
    console.log('Yes'); // display tile.
} else { console.log("not found")};


// access the object via the key: 
// movieData['The Grand Budapest Hotel'].plot;

// go through object using for-in loop
// for (let title in movieData)
//     console.log(title, movieData[title].year);

// --- check existence of title:
// return true if userInput === a key in movieData:

// if result is true then display tile.
// let searchTerm = 'The Grand Budapest Hotel' // this needs to be linked to search bar.

if ( searchTerm in movieData ) {
    console.log('Yes'); // display tile.
} else { console.log("not found")};


// --- show all database info:
// --- sort database info by rating / year:







// --- generate html film tile based on all database contents: 
const tileDeck = document.querySelector('section'); // location of where to insert tile

let obj = movieData;
for ( let movie in obj) {
    const tile = document.createElement('div'); // tile that we are creating. must be inside loop otherwise overwrite occurs.
    tile.setAttribute('id', 'film-tile');
    
    tile.innerHTML = `
    <img id='film-poster' src=${movieData[movie].img}>
    <h3 id='film-title'>${movie}</h3>
    <ul id='film-info'>
       <li id='year'>(${movieData[movie].year}) </li>
       <li id='rating'>${movieData[movie].rating}</li>
    <ul>
    `
    tileDeck.append(tile);
}



// --- generate html film tile based on all database contents: 
// logic: display movie information for matched userInput, otherwise: show all movies as tile  (limit to 10)
// let data = movieData;
// const tileDeck = document.querySelector('section'); // location of where to insert tile
// searchTerm = 'The Darjeeling Limited';
// createTile(movieData);

// function createTile(data) {
//         const tile = document.createElement('div'); // tile that we are creating. must be inside loop otherwise overwrite occurs.
        
//         if (searchTerm in data) {
//             console.log('show one tile only');
//             tile.setAttribute('id', 'film-tile2');

//             tile.innerHTML = `
//             <img id='film-poster' src=${data[searchTerm].img}>
//             <div id='film-info'>
//                 <h3 id='film-title' class='info'>${searchTerm}</h3>
//                 <ul >
//                     <li id='year'class='info'>(${data[searchTerm].year}) </li>
//                     <li id='rating'class='info'>${data[searchTerm].rating}</li>
//                     <li id='plot'class='info'>${data[searchTerm].plot}</li>
//                     <li id='cast'class='info'>Main Actors:${data[searchTerm].cast}) </li>
//                 <ul>
//             </div>
//             `
//             tileDeck.append(tile);
//         } else {
//             for ( let item in data) {
//                 const tile = document.createElement('div'); 
//                 tile.setAttribute('id', 'film-tile');
//                 console.log('')
    
//                 tile.innerHTML = `
//                 <img id='film-poster' src=${movieData[item].img}>
//                 <h3 id='film-title'>${item}</h3>
//                 <ul id='film-info'>
//                 <li id='year'>(${movieData[item].year}) </li>
//                 <li id='rating'>${movieData[item].rating}</li>
//                 <ul>
//                 `
//                 tileDeck.append(tile);
//             };
//         }
// }

// --- return key as movie name and store in  variable for innerHTML.
let movieName = '';
for (let key of Object.keys(movieData)) {
    if (key === searchTerm)  movieName = key;
};
// console.log(movieName)
// console.log(array[0][1].year)

