import { movieData } from './data.js';

// access the object via the key: 
movieData['The Grand Budapest Hotel'].plot;

// go through object using for-in loop
for (let title in movieData)
    console.log(title, movieData[title].year);

// check existence of title:
let searchTerm = 'X men' // this needs to be

   if ( searchTerm in movieData ) {
    console.log('Yes');
   } else { console.log("not found")};
