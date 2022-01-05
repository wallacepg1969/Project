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
//Formcontainer variables
var formContainer = document.createElement('div');
//Indiviual image container variables
var imageContainer = document.createElement("div");
//Header container variables
var headerContainer = document.createElement("header");
var h1 = document.createElement("h1");
//Button container variables
var buttonContainer = document.createElement("div");
//Text container variables
var textContainer = document.createElement("div");
//Image button variables
var imageButton = document.createElement("button");
//Text button variables
var textButton = document.createElement("button");
//Text and image container variables
var para = document.createElement("p"); //Create a <p> element to put links on separate lines
var anchor = document.createElement("a"); //Create an <a> element
var image = document.createElement("img");
//Variables for suggestion input form
var inputform = document.createElement('form');//Create inputform tag
var labelname = document.createElement('label');//Create label for input
var nameinput = document.createElement('input');//Create nameinput tag
var hrefname = document.createElement('label');//Create href label tag
var hrefinput = document.createElement('input');//Create website input tag
var fieldset = document.createElement('fieldset');//Create fieldset tag;
var legend = document.createElement('legend');//Create legend tag
var linebreak = document.createElement('br');//Create linebreak tag
var linebreak1 = document.createElement('br');//Create linebreak tag
var submit = document.createElement("button");//Create submit button

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

//Function to create a button container div tag
function buttoncontainer() {
  buttonContainer.style.textAlign = "center";
  document.body.appendChild(buttonContainer);
}

//Function to remove button container div tag
function removebuttoncontainer() {
  buttonContainer.remove();
}

//Define button style
function buttonstyle(buttonName) {
  buttonName.style.margin = "5px";
  buttonName.style.backgroundColor = "yellow";
  buttonName.style.borderRadius = "7px";
  buttonName.style.bordercolor = "purple";
  }

//Function to create a button to use Image View in a div container
function imagebutton() {
  imageButton.innerHTML = "Click for Image View";
  buttonContainer.appendChild(imageButton);
  imageButton.id = "imageButton";
  buttonstyle(imageButton);
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
  buttonstyle(textButton);
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
  forminput();//Output form to html
}

//Function to output the array to HTML using images container
  function imageview() {//Function for image output
  removeformcontainer();//Clear input form, visible in text view only
  removetextcontainer();//Clear text version before loading images
  removeimagebutton();//Clear imagebutton while images are loaded
  textbutton();//Replace image button with text button
  for (var i = 0; i < radioPaperArray.length; i++) {//Cycle through array to output each websites links to html
    var anchor = document.createElement("a"); //Create an <a> element
    var image = document.createElement("img");//Create an <img> element
    var imageContainer = document.createElement("div");//Create an imageContainer div element
    imageContainer.style.display = "inline-block";//Set display to inline-block
    //imageContainer.style.float = "left";//Float the logo images left
    imageContainer.style.margin = "5px";//Create margin between images
    imageContainer.style.borderStyle = "solid";//Create a border around images
    imageContainer.style.borderWidth = "10px 10px 10px 10px";
    imageContainer.style.borderColor = "blue";
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

//Create a formcontainer function
function formcontainer() {
document.body.appendChild(formContainer);
}

//Create a function to remove the form container
function removeformcontainer() {
  formContainer.remove();
}

//Create a form input function to suggest a listing using HTML Form Input
function forminput() {
  inputform.action = "suggestions.html";//ust webpage to store suggestions
  inputform.target = "_isblank";//Set target to open suggestions.html in new tab/window
  inputform.method = "post";//Set method to post to avoid including inputted information in the suggestions.html URL
  labelname.for = "nameinput";//Label for name input box
  labelname.innerHTML = "Enter the name: ";//Label wording for name input
  nameinput.title = "Input name of title";
  nameinput.placeholder = "Name";
  nameinput.name = "nameinput";//Input field name
  nameinput.id = "nameinput";//Create input field id
  nameinput.type = "text";//Create input field type
  hrefname.for = "hrefinput";//Create label tag for href input box
  hrefname.innerHTML = "Enter the full website URL: ";//Create label for href input box
  hrefinput.title = "Website URL";
  hrefinput.placeholder = "Website URL";
  hrefinput.type = "url";//Create type for input href
  hrefinput.name = "hrefinput";//Create name for input box
  hrefinput.id = "hrefinput";//Create id for input box
  legend.innerHTML = "Suggest a title or station to add to the list using this form";//Description of the form
  fieldset.style.display = "inline";//Set display to avoid form using the full page width
  inputform.style.float = "center";//Float the form to the center of the page
  submit.innerHTML = "Submit";//Creat submit button
  submit.onclick = submit;//Run function to transfer input information to suggestions.html when submit button is clicked
  fieldset.appendChild(labelname);//Display label for name input field
  fieldset.appendChild(nameinput);//Display name input field
  fieldset.appendChild(linebreak);//Display linebreak
  fieldset.appendChild(hrefname);//Display label for URL field
  fieldset.appendChild(hrefinput);//Display URL field
  fieldset.appendChild(linebreak1);//Display linebreak
  fieldset.appendChild(legend);//Display legend
  fieldset.appendChild(submit);//Display submit button
  inputform.appendChild(fieldset);//Display fieldset heading
  fieldset.style.backgroundColor = "beige";//Set fieldset background as beige
  formContainer.appendChild(inputform);//Display form in form container div
}

//Create a function to submit data from the input form to the website suggestions.html
function submit() {
  //Create variables here from form input submissions and append variables to array to be included in output to HTML
}

//Run the functions to create the webpage
headercontainer();
buttoncontainer();
textview();
textcontainer();
imagecontainer();
formcontainer();