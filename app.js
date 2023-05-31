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

searchTerm = 'The Grand Budapest Hotel';

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


/// sorting existing by year, runtime, rating 

let checkData = Object.entries(movieData);

let sorted = checkData.sort(([, a], [, b]) => {
    const first = a.rating;
    const second = b.rating;

    if (first < second) return 1;
    if (first > second) return -1;
    return 0;
})

console.log('Newest First: ', checkData, checkData[0][1].year);




// * convert movieData to an Array.
let arrayData = Object.entries(movieData)

// generating html elements to show 
const container = document.querySelector('#movie-container');

for (let i = 0; i < arrayData.length; i++) {
    const tile = document.createElement('div');
    tile.innerHTML = `
    <div id='film-tile'>
        <img id='film-poster' src=${arrayData[i][1].img}>
        <h3 id='film-title'>${arrayData[i][0]}</h3>
        <ul id='film-info'>
            <li id='year'>(${arrayData[i][1].year}) </li>
            <li id='rating'>${arrayData[i][1].rating}</li>
        <ul>
    </div>
    `
    container.append(tile)
}

// console.log(array[0][1].year)



// ammending array for sorting:
// this function takes the array of movieData and a key to sort the movies by.

function sortDecending(array, key) {
    const sortedData = array.sort(([, a], [,b ]) => {
     const item1 = a[key];
     const item2 = b[key];
 
     if (item1 < item2) return 1;
     if (item1 > item2) return -1;
     return 0;
    });
    return sortedData;
 }
 
 
 console.log(sortDecending(checkData, 'rating'));

 // if button for 'Rating: Highest First' is clicked key variable = 'rating'.
 // if button for 'Newest First' is clicked key variable is now = 'year'.
 
 // if button for 'Rating: Highest First' is clicked key variable = 'rating'.
 // if button for 'Newest First' is clicked key variable is now = 'year'.

// menu.classList.toggle('dropdown-menu-open')

const select = document.querySelector('#sort');
 const menu = document.querySelector('#dropdown-menu');

 
 select.addEventListener('click', () => {
    menu.classList.toggle('dropdown-menu-open');
 });