
if(localStorage.getItem('updatedData')) {
    const newData = JSON.parse(localStorage.getItem('updatedData'))

    currentDisplay = newData;
// pickup the JSON string of updatedData
// convert to js object.
// use that object to update current display.


    console.log('movieData has been updated.',currentDisplay);
} else {
     console.log('movieData not updated');
}