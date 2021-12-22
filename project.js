//Create a variable object for each newspaper and radio station
var theIrishExaminer = {title:"The Irish Examiner", href:"https://www.irishexaminer.com"};
var c103 = {title:"C103 Local Radio", href:"https://www.c103.ie" };
var _96fm = {title:"96fm Local Radio", href:"https://www.96fm.ie"};
var theEveningEcho = {title:"The Evening Echo", href:"https://www.echolive.ie"};
var cuhHospitalRadio = {title:"CUH Hospital Radio", href:"https://www.liveradio.ie/stations/cuh-fm-hospital-radio"};
var communityRadio = {title:"Cork City Community Radio", href:"https://www.cr.ie"};
var redfm = {title:"Red FM", href:"https://redfm.ie"};
var westCorkfm = {title:"West Cork FM", href:"https://www.westcorkfm.ie"};
var southernStar = {title:"The Southern Star", href:"https://www.southernstar.ie"};
var corkIndependent = {title:"Cork Independent", href:"https://www.corkindependent.com"};
var corkMan = {title:"The Corkman", href:"https://www.independent.ie/regionals/corkman/"};
var corkBeo = {title:"Cork Beo (Cork Live)", href:"https://www.corkbeo.ie"};

//Create an array using the radio station and newspaper variable objects
var radioPaperArray = [theIrishExaminer, c103, _96fm, theEveningEcho, cuhHospitalRadio, communityRadio, redfm, westCorkfm, southernStar, corkIndependent, corkMan, corkBeo];

//Output the array to HTML
for (var i = 0; i < radioPaperArray.length; i++) {
var para = document.createElement("p");// Create a <p> element
var anchor = document.createElement('a');//Create a <a> element
anchor.innerHTML = radioPaperArray[i].title;// Insert title
anchor.href = radioPaperArray[i].href;//Insert href attribute
anchor.target= "_blank";//Open link in new browser window
anchor.rel="noopener noreferrer";//Stop the linked pages from opening new window
anchor.style.display = "block";//Change display of anchor links as a block not inline
anchor.style.padding ="5px";//Add padding of 10px to anchor tags
document.body.appendChild(anchor);// Append <a> tags to the <body> tag



}