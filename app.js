import { movieData } from './data.js';
// ----- variables --------
const container = document.querySelector('#movie-container'); // generating html elements to show 
const submit = document.querySelector('#search-submit'); //search icon
const userInput = document.querySelector('#search-box'); // search box
const select = document.querySelector('#sort');  // sort icon
const menu = document.querySelector('#dropdown-menu'); // sort list
const options = document.querySelectorAll('.dropdown-menu li'); // list item
// const plot = document.getElementById('plot') // for toggling plot summary
// const storedData = localStorage.getItem('updatedData'); // picks up updated JSON object

let movieDataArray = Object.entries(movieData);
let currentDisplay = [];
let searchTerm = '';
let titleList = [];

if(localStorage.getItem('updatedData')) {
    const newData = JSON.parse(localStorage.getItem('updatedData'))

    movieDataArray = Object.entries(newData);
// pickup the JSON string of updatedData
// convert to js object.
// use that object to update current display.


    console.log('movieDataArray',movieDataArray);
} else {
     console.log('movieData not updated');
}

// movieDataArray = storedData ? JSON.parse(storedData) : movieData;
currentDisplay = movieDataArray;
displayTiles(currentDisplay)
// console.log('movieDataAray = ', movieDataArray);

function clearSearch() {
    searchTerm = '';
    
}

const notFoundMessage = document.querySelector('#message');


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

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    clearSearch();
    userInput.value = '';
    currentDisplay = movieDataArray;
    removeTiles();
    displayTiles(currentDisplay);    
})
// -------- SORT event listeners --------
select.addEventListener('click', () => {
    menu.classList.toggle('dropdown-menu-open');
});


/// sorting existing by year, rating 
options.forEach( option => {
    option.addEventListener('click', () => {
        if (option && option.id === 'newest-first') {
            sortDescending(currentDisplay, 'year');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted newest first', currentDisplay)
        }
        if (option && option.id === 'rating-high') {
            sortDescending(currentDisplay,'rating');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted highly rated')
        }
        if (option && option.id === 'oldest-first') {
            sortAscending(currentDisplay, 'year');
            menu.classList.remove('dropdown-menu-open')
            console.log('sorted oldest first')
        }
        if (option && option.id === 'rating-low') {
            sortAscending(currentDisplay,'rating');
            menu.classList.toggle('dropdown-menu-open')
            console.log('sorted lowest first')
        }
        
        removeTiles();
        displayTiles(currentDisplay);
        menu.classList.remove('dropdown-menu-open')
    })
});

// display event listener for plot

// plot.addEventListener('click', () => {
//     this.classList.toggle('expanded');
// })

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
        <li id='rating' class='rating'>${array[i][1].rating}</li>
        </ul>
        <p id="plot" class="collapsed">${array[i][1].plot}</p>
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

// create an array showing film titles 
function getFilmTitles(array) {
    for (let i = 0; i < array.length;i++) {
        titleList.push(array[i][0])
    };
    return titleList;
}

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

// function that displays film tiles based on input from user search.
function displayMatches(dataArray,searchWord ) {
    removeTiles();
    const phase1 = getFilmTitles(dataArray);
    if(phase1.length === 0) {
        return console.log('not found');
        notFoundMessage.classList.remove('message')
    }
    const phase2 = matchesFromInput(phase1,searchWord);
    const phase3 = infoForMatched(dataArray, phase2);
    currentDisplay = phase3;
    displayTiles(phase3)
    //checks:
    // console.log('phase1',phase1);
    // console.log('phase2',phase2);
    // console.log('phase3', phase3)
}