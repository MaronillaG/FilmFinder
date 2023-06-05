const form = document.querySelector('#form');


form.addEventListener('submit', (e) => { 
    e.preventDefault();
    //creates a new object for data submissions in movieData format
    const filmData = new FormData(form); //creates an array of arrays from submission.

    const obj = Object.fromEntries(filmData); // create an object from the array of arrays. 

    const json = JSON.stringify(obj); // converts this into a JSON string.
    localStorage.setItem('form', json); //store JSON string in localstorage

    window.location.href = './confirm.html'
});