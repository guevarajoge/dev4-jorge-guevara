# dev4-jorge-guevara
I started mapping and creating the card to append. 

I fetched all the arrays and put them together in one array. My idea was using this "mamaList" as an initial content(allcards). 

From there, using Spread sintax, I was planing to destructure this mamaList based on clicks.

I got stuck around 16hrs of sunday 25/5, got in panic and start making buttons to append the results... 

The current website shows the individual results of each filter.

-------

Analise 

Functional analysis om the existing app
Initial estate: an array with 100 different array elements - myArray
There is a possibility to filter the results based on 
Doelgroep
“Volwassenen” - button (e)
“Familie”
Genre
“Theater” - button (e)
“Dans”
“Muziektheater”
“Multidisciplinair”
“Literatuur”
“Comedy”
“Figurentheater”
“Opera”
“Concert”
“Circus”
- Once you click on any of the buttons ‘filter wissen’ appears, if clicked == 
erase any filter selection,
Goes back to initial state 
- Also it will give you an array back based on the .filter() you pressed -- New Array
- Everytime you click another filter buttons you create another  the other results to the New Array
- When you unclick 
it gets the data out of the New Array - 
Update the state of  NewArray
	- 

FEATURES 


HOME PAGE
NOTHING selected 

Header - footer ?? - NOT NECCESARY 
Filter option based on 
Doelgroep / “category”
Genre       / “genre-v2”
Cards/ videos  organized in 9 pages (“Pagina 1 van 9”) of 5 row x 3 column    
Two buttons 
Vorige
Volgende
		Is Red == indicates that it can be clicked   


Select one filter e.g “Multidiciplinair (7)”  

“Filters wissen” Button  == will erase the filter selection 
Cards/ Videos organized in 1 pages (“Pagina 1 van 1”) of 3 row x 3 column    
Each card contains
“thumbnail.url”
"genre-v2", on top of the thumbnail 
“name”
“excerpt”
"recorded-at"
“video-length”

Two buttons 
Vorige
Volgende
	



Select one card e.g “Duikvlucht”  redirects to video page  that contains the same info that in Home page

VIDEO PAGE
A div containing 
“link-to-video”  == Object { }   			 // embedded video 
“Excerpt” 			
“Name”
"video-notes" == html String to append 	// all info about the video 
“Key-takeaways” == html String to append   // a gray list that floats to the right  
theater
leeftijd
duur
tall
studio Orka

A Title “Meer video's” 
All the info from Home page with all filters selected -- I think that is a bug, there is no reason for all the filters to be selected ... 

