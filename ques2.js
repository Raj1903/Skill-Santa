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

for (var i = 0; i < library.length; i++){ //intializing the array elements starting from 0. library.length helps in fetching the data if we increase the elements inside.
	var bookName = "'" + library[i].title + "'" + 'by' + library[i].author + "."; 
	if (library[i].readingStatus) { //it will read the reading status
		console.log("Completed Reading" + bookName);//if reaading status is true it will come in console 

	}else 
	{
		console.log("Not Completed" + bookName);//if reading status is false then this will come in console.
	}
}