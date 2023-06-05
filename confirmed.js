import { movieData, updateMovieData } from "./data.js";

// submit data to movieData
const confirmed = document.querySelector('#confirm');

confirmed.addEventListener('click', () => {
    // e.preventDefault();
    const data = localStorage.getItem('form');
    const obj = JSON.parse(data); // converts from a JSON string back to an object

    updateMovieData(obj); 

    confirmed.innerHTML = 'Confirmed.'

    window.location.href = './index.html'
    console.log('updated object: ', movieData)
})

const edit = document.querySelector('#edit');

edit.addEventListener('click', () => {

    window.location.href = './form.html'
})
