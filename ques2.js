var library = [             //creating an array which consists list of author, title and reading status
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true //defining the status in boolean form
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true 
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

for (var i = 0; i < library.length; i++) { //i = 0 its means intializing with 0 and library.lenght means if array size will increase it will work according to that.
    var bookName = "'" + library[i].title + "'" + 'by' + library[i].author + "."; 
    if (library[i].readingStatus) { //it will read the reading status
        console.log("Completed Reading" + bookName);//if reaading status is true it will come in console 

    }else 
    {
        console.log("Not Completed" + bookName);//if reading status is false then this will come in console.
    }
}

//var i = 0 it start intializing from zero postition of array that is Bill Gates
//i<library.lenght[i] basically it checking that it is not less than the lenght of variable and this also helps in if array size will increase it will work according to that.
//i++ This occurs before the next evaluation of condition. It is generally used to update or increment the counter variable.
//if (library[i].reading status) it is bascially checking the true or false statement in each array elements and if reading status is true then if condition will print and if reading status is false then else condition will execute.
