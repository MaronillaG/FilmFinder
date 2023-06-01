import { movieData } from './data.js';
// ----- variables --------
const container = document.querySelector('#movie-container'); // generating html elements to show 
const submit = document.querySelector('#search-submit'); //search icon
const userInput = document.querySelector('#search-box'); // search box
const select = document.querySelector('#sort');  // sort icon
const menu = document.querySelector('#dropdown-menu'); // sort list
const options = document.querySelectorAll('.dropdown-menu li'); // list item
let movieDataArray = Object.entries(movieData);

let searchTerm = '';

if (searchTerm === '' ){
    displayTiles(movieDataArray);
}
else {
    removeTiles(movieDataArray);
}


// -------- search event listeners --------
submit.addEventListener('click', function() {
    searchTerm = userInput.value;
    console.log('icon: ',searchTerm);
    displayMatches(movieDataArray,searchTerm);

});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        searchTerm = userInput.value;
        console.log('enter: ',searchTerm);
        displayMatches(movieDataArray,searchTerm);

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
            sortDescending(movieDataArray, 'year');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted newest first', movieDataArray)
        }
        if (option && option.id === 'rating-high') {
            sortDescending(movieDataArray,'rating');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted highly rated')
        }
        if (option && option.id === 'oldest-first') {
            sortAscending(movieDataArray, 'year');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted oldest first')
        }
        if (option && option.id === 'rating-low') {
            sortAscending(movieDataArray,'rating');
            menu.classList.toggle('dropdown-menu-open')
            console.log('sorted lowest first')
        }
        
        removeTiles();
        displayTiles(movieDataArray);
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

 function removeTiles() {
    while(container.firstChild)
        container.firstChild.remove();
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
let titleList = [];
// create an array showing film titles 
function getFilmTitles(array) {
    for (let i = 0; i < array.length;i++) {
      titleList.push(array[i][0])
    };
    return titleList;
}
// console.log(getFilmTitles(testArray))

// create an array of titles items that contain a search word
function matchesFromInput(target,word) {
    let matches = target.filter(item => {
        return item.toLowerCase().includes(word.toLowerCase())
    });
    return matches;
    console.log('successful matches: ', matches)
}

// create an array from database from successful matches.
function infoForMatched(target, matches) {
    let filmDetails = target.filter(item => {
        return matches.includes(item[0]);
    })
    return filmDetails;
}
searchTerm = 'grand';
// function that displays film tiles based on input from user search.
function displayMatches(dataArray,searchWord ) {
    removeTiles();
    const phase1 = getFilmTitles(dataArray);
    const phase2 = matchesFromInput(phase1,searchWord);
    const phase3 = infoForMatched(dataArray, phase2)
    displayTiles(phase3)
    // //checks:
    // console.log('phase1',phase1);
    // console.log('phase2',phase2);
    // console.log('phase3', phase3)
}

// displayMatches(movieDataArray,searchTerm); // works! 

// const phase1 = getFilmTitles(testArray);
// const phase2 = matchesFromInput(phase1,'royal');
// const phase3 = infoForMatched(testArray, phase2)
// // displayTiles(phase3)
// console.log('phase1',phase1);
// console.log('phase2',phase2);
// console.log('phase3', phase3)

