//Declare global variables

//Create a variable object for each newspaper and radio station using images of logos from their websites as links
var theIrishExaminer = { title: "The Irish Examiner", href: "https://www.irishexaminer.com", imageLink: "images/Irish_Examiner_logo.png" };
var c103 = {title: "C103 Local Radio", href: "https://www.c103.ie", imageLink: "images/c103.png"};
var $96fm = {title: "96fm Local Radio", href: "https://www.96fm.ie", imageLink: "images/96fmlogo.png"};
var theEveningEcho = {title: "The Evening Echo", href: "https://www.echolive.ie", imageLink: "images/Echo-live-logo.png"};
var cuhHospitalRadio = {title: "CUH Hospital Radio", href: "https://www.liveradio.ie/stations/cuh-fm-hospital-radio", imageLink: "images/cuh_fm_hospital_radio.jpg"};
var communityRadio = {title: "Cork City Community Radio", href: "https://www.cr.ie", imageLink: "images/communityradio.png"};
var redfm = {title: "Red FM", href: "https://redfm.ie", imageLink: "images/White-RedFM.png"};
var westCorkfm = {title: "West Cork FM", href: "https://www.westcorkfm.ie", imageLink: "images/westcorklogo.png"};
var southernStar = {title: "The Southern Star", href: "https://www.southernstar.ie", imageLink: "images/southernstarlogo.png"};
var corkIndependent = {title: "Cork Independent", href: "https://www.corkindependent.com", imageLink: "images/CORK-LOGO.png"};
var corkMan = {title: "The Corkman", href: "https://www.independent.ie/regionals/corkman/", imageLink: "images/thecorkman.png"};
var corkBeo = {title: "Cork Beo (Cork Live)", href: "https://www.corkbeo.ie", imageLink: "images/corkbeo.png"};

//Create an array using the radio station and newspaper variable objects
var radioPaperArray = [theIrishExaminer, c103, $96fm, theEveningEcho, cuhHospitalRadio, communityRadio, redfm, westCorkfm, southernStar, corkIndependent, corkMan, corkBeo];

//Createfunction variables
var imageContainer = document.createElement("div");
var headerContainer = document.createElement("header");
var h1 = document.createElement("h1");
var buttonContainer = document.createElement("div");
var textContainer = document.createElement("div");
var imageButton = document.createElement("button");
var textButton = document.createElement("button");
var para = document.createElement("p"); //Create a <p> element to put links on separate lines
var anchor = document.createElement("a"); //Create an <a> element
var image = document.createElement("img");

//Group all Functions

//Function to create a header container for the webpage
function headercontainer() {
  "use strict";
  h1.style.margin = "0px";
  headerContainer.style.backgroundColor = "navy";
  headerContainer.style.color = "white";
  h1.style.textAlign = "center";
  h1.innerHTML = "Links to Cork Radio Stations and Newspapers";
  headerContainer.display = "flex";
  document.body.appendChild(headerContainer);
  headerContainer.appendChild(h1);
}

//Function to remove headercontainer
function removeheader() {
  headerContainer.remove();
}

//Function to create an image container
function imagecontainer() {
  document.body.appendChild(imageContainer);
}

//Function to create a button container div tag
function buttoncontainer() {
  buttonContainer.style.textAlign = "center";
  document.body.appendChild(buttonContainer);
}

//Function to remove button container div tag
function removebuttoncontainer() {
  buttonContainer.remove();
}

//Function to create a button to use Image View in a div container
function imagebutton() {
  imageButton.innerHTML = "Click for Image View";
  buttonContainer.appendChild(imageButton);
  imageButton.id = "imageButton";
  imageButton.onclick = imageview;
}

//Function to remove image view button
function removeimagebutton() {
  imageButton.remove();
}

//function to create a button to use Text View
function textbutton() {
  textButton.innerHTML = "Click for Text View";
  buttonContainer.appendChild(textButton);
  textButton.onclick = refreshpage;
}

//Create function to refresh page
function refreshpage() {
  window.document.location.reload();
}

//Function to remove text view button
function removetextbutton() {
  textButton.remove();
}

//Function to create a textContainer
function textcontainer() {
  document.body.appendChild(textContainer);
}

//Function to remove text container
function removetextcontainer() {
  textContainer.remove();
}

//Function to create an imageContainer
function imagecontainer() {
  document.body.appendChild(imageContainer);
}

//Function to remove image container
function removeimagecontainer() {
  imageContainer.remove();
}



//Function to output the array to HTML using the textContainer
function textview() {
  imagebutton();//Add image button when text links are shown
  removeimagecontainer();//Remove images before loading text links
  for (var i = 0; i < radioPaperArray.length; i++) {//Cycle through each websites text links in html
    var para = document.createElement("p"); //Create a <p> element to put links on separate lines
    var anchor = document.createElement("a"); //Create an <a> element
    anchor.href = radioPaperArray[i].href; //Insert href attribute
    anchor.target = "_blank"; //Open link in new browser window
    anchor.rel = "noopener noreferrer"; //Stop the linked pages from opening new window
    anchor.innerHTML = radioPaperArray[i].title; //Use the object title as the link description
    para.appendChild(anchor); //Append <a> tags to <p> tags
    textContainer.appendChild(para);//Append <p> tag to textContainer div
  }
}

//Function to output the array to HTML using images container
  function imageview() {//Function for image output
  removetextcontainer();//Clear text version before loading images
  removeimagebutton();//Clear imagebutton while images are loaded
  textbutton();//Replace image button with text button
  for (var i = 0; i < radioPaperArray.length; i++) {//Cycle through array to output each websites links to html
    var anchor = document.createElement("a"); //Create an <a> element
    var image = document.createElement("img");//Create an <img> element
    var imageContainer = document.createElement("div");//Create an imageContainer div element
    imageContainer.style.float = "left";//Float the logo images left
    imageContainer.style.margin = "10px";//Create margin between images
    imageContainer.style.borderStyle = "solid";//Create a border around images
    imageContainer.style.borderwidth = "thick";
    imageContainer.style.bordercolor = "blue";
    anchor.href = radioPaperArray[i].href; //Insert href attribute
    anchor.target = "_blank"; //Open link in new browser window
    anchor.rel = "noopener noreferrer"; //Stop the linked pages from opening new window
    image.title = "Picture of Website Logo";//Create title if images don't load in browser
    image.src = radioPaperArray[i].imageLink;//Define image src for HTML output
    imageContainer.appendChild(image);//Embed image tags in div tag
    anchor.appendChild(imageContainer);//Embed div tags in anchor tag
    document.body.appendChild(anchor);//Embed anchor tag links in the document body
  }
}

//Create a function to add a listing using HTML Form Input
function forminput() {
  
}

//Run the basic functions to create the webpage
headercontainer();
buttoncontainer();
textview();
textcontainer();
imagecontainer();