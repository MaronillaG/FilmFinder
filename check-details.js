import {movieData, updateMovieData} from "./data.js"


// display data from form:
const data = localStorage.getItem('form');

export const obj = JSON.parse(data); // converts from a JSON string back to an object

if(localStorage.getItem('form')) {

    for (let key in obj) {
        if (key != 'img') {
            const markup = `
            <div>
                <span> ${key}: ${obj[key]}</span>
            </div>
            `;
        document.querySelector('#data').innerHTML += markup;
        }
    console.log('obj for display purposes',obj);
    } 
} else {
    console.log('no data to add');
}
