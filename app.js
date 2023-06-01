import { movieData } from './data.js';
// ----- variables --------
const container = document.querySelector('#movie-container'); // generating html elements to show 
const submit = document.querySelector('#search-submit'); //search icon
const userInput = document.querySelector('#search-box'); // search box
const select = document.querySelector('#sort');  // sort icon
const menu = document.querySelector('#dropdown-menu'); // sort list
const options = document.querySelectorAll('.dropdown-menu li'); // list item
let movieDataArray = Object.entries(movieData);
let arraySort = Object.entries(movieData);

let search = ''; // this needs to be controlled by userinput somehow

if (search === '' ){
    displayTiles(movieDataArray);
}
else {
    removeTiles(movieDataArray);
}


// -------- search event listeners --------
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

// -------- SORT event listeners --------
select.addEventListener('click', () => {
    menu.classList.toggle('dropdown-menu-open');
});

/// sorting existing by year, rating 
// if button for 'Rating: Highest First' is clicked key variable = 'rating'.
// if button for 'Newest First' is clicked key variable is now = 'year'. 
// if button for 'Rating: Highest First' is clicked key variable = 'rating'.
// if button for 'Newest First' is clicked key variable is now = 'year'.

options.forEach( option => {
    option.addEventListener('click', () => {
        if (option && option.id === 'newest-first') {
            sortDescending(arraySort, 'year');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted newest first', arraySort)
        }
        if (option && option.id === 'rating-high') {
            sortDescending(arraySort,'rating');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted highly rated')
        }
        if (option && option.id === 'oldest-first') {
            sortAscending(arraySort, 'year');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted oldest first')
        }
        if (option && option.id === 'rating-low') {
            sortAscending(arraySort,'rating');
            menu.classList.toggle('dropdown-menu-open')
            console.log('sorted lowest first')
        }
        
        removeTiles();
        displayTiles(arraySort);
        menu.classList.remove('dropdown-menu-open')
    })
});


// function to display movie tiles:
function displayTiles(array) {
    for (let i = 0; i < array.length; i++) {
    const tile = document.createElement('div');
    tile.innerHTML = `
    <div id='film-tile'>
        <img id='film-poster' src=${array[i][1].img}>
        <h3 id='film-title'>${array[i][0]}</h3>
        <ul id='film-info'>
            <li id='year'>(${array[i][1].year}) </li>
            <li id='rating'>${array[i][1].rating}</li>
        <ul>
    </div>
    `
    container.append(tile)
}
}

// sort functions
function sortDescending(array, key) {
    const sortedData = array.sort(([, a], [,b ]) => {
     const item1 = a[key];
     const item2 = b[key];
 
     if (item1 < item2) return 1;
     if (item1 > item2) return -1;
     return 0;
    });
    return sortedData;
 }

 function removeTiles() {
    while(container.firstChild)
        container.firstChild.remove();
}

 function sortAscending(array, key) {
    const ascending = array.sort(([,a], [,b]) => {
        let item1 = a[key];
        let item2 = b[key];

        if (item1 < item2) return -1;
        if (item1 > item2) return 1;
        return 0;
    });
    return ascending;
}

// // searching array of movie titles pulled from movieData.
// let testArray = Object.keys(movieData);
// console.log(testArray);
// let findThis = 'royal tenenbaums' // input from user
// let searchList = testArray.map(item => item.trim().toLowerCase()); // cleansed movieData array for searching purposes.
// // do i need to sort searchList Alphabetically?
// let cleansedSearchTerm = findThis.split(' '); // convert input to multiple terms
// let found = searchList.filter(item => item.includes(findThis)) // returns an array of found items 
// console.log(found);
// // displayTiles(testArray)

// searching only keynames in array version of movieData object
let testArray = Object.entries(movieData);
console.log(testArray[0][0]); 
//accessing  the movie titles and store in an array
let titleList = []
for (let i = 0; i < testArray.length;i++) {
    titleList.push(testArray[i][0])
}
console.log('titleList = ' + titleList);
// return title from titleList array based on search term.
let ccc = 'royal'
let foundTitle = titleList.filter(item => {return item.toLowerCase().includes(ccc.toLowerCase())})

console.log('matched from: titleList', foundTitle);

//return movieData item based on titleList matches array. 
let getFilmsArray = foundTitle.filter(array => {return testArray.includes('array')})
console.log(getFilmsArray)
function cleanse(string) {
    return string.toLowerCase();
}


