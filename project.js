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

//Create function variables
//Text and form container
var textFormContainer = document.createElement('div');
//Formcontainer variables
var formContainer = document.createElement('div');
//Container for all images
var imagesContainer = document.createElement('div');
//Individual image container variables
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
//variables for input suggestion values
var newname = document.getElementById("nameinput");
var website = document.getElementById("hrefinput");
//Variables for footer
var footerContainer = document.createElement("div");//Create footer container

//Group all Functions

//Function to create a header container for the webpage
function headercontainer() {
  "use strict";
  headerContainer.style.backgroundColor = "navy";
  headerContainer.style.color = "white";
  headerContainer.style.display = "flex-wrap";
  headerContainer.style.width = "100%";
  h1.style.margin = "0px";
  h1.style.textAlign = "center";
  h1.innerHTML = "Links to Cork Radio Stations and Newspapers";
  document.body.appendChild(headerContainer);
  headerContainer.appendChild(h1);
}

//Function to remove headercontainer
function removeheader() {
  headerContainer.remove();
}

//Function to create a button container div tag
function buttoncontainer() {
  buttonContainer.id = "buttonContainer";
  buttonContainer.style.textAlign = "center";
  document.body.appendChild(buttonContainer);
}

//Function to remove button container div tag
function removebuttoncontainer() {
  buttonContainer.remove();
}

//Function to define button style
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

//Function to create text and form container
function textformcontainer() {
  textFormContainer.id = "textFormContainer";
  textFormContainer.style.justifyContent = "center";
  textFormContainer.style.alignItems = "center";
  textFormContainer.style.display = "flex";
  textFormContainer.style.justifyContent = "space-around";
  document.body.appendChild(textFormContainer);
}

//Function to remove text and container
function removetextformcontainer() {
  textFormContainer.remove();
}

//Function to create a textContainer to put text and form containers side by side
function textcontainer() {
  textContainer.style.borderStyle ="solid";
  textContainer.style.borderColor = "green";
  textContainer.style.borderWidth = "2px";
  textContainer.style.width = "300px";
  textContainer.style.display = "flex-wrap";
  textContainer.style.padding = "0px 0px 0px 10px";
  textContainer.style.backgroundColor = "#c6ccb8";
  textFormContainer.appendChild(textContainer);
}

//Function to remove text container
function removetextcontainer() {
  textContainer.remove();
}

//Function to create an image container for all images
function imagescontainer() {
  imagesContainer.id = "imagesContainer";
  imagesContainer.style.display = "flex-wrap";
  imagesContainer.style.flexDirection = "column-wrap";
  imagesContainer.style.justifyContent = "space-between";
  document.body.appendChild(imagesContainer);
}

//Function to remove images container
function removeimagescontainer() {
  imagesContainer.remove();
}

//Function to create a formcontainer
function formcontainer() {
  formContainer.style.display = "flex";
  textFormContainer.appendChild(formContainer);
}

//Function to remove the form container
function removeformcontainer() {
  formContainer.remove();
}

//Function to output the array to HTML using the textContainer
function textview() {
  imagebutton();//Add image button when text links are shown
  removeimagescontainer();//Remove images before loading text links
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
  removeimagebutton();//Clear image button
  textbutton();//Replace image button with text button
  for (var i = 0; i < radioPaperArray.length; i++) {//Cycle through array to output each websites links to html
    var anchor = document.createElement("a"); //Create an <a> element
    var image = document.createElement("img");//Create an <img> element
    var imageContainer = document.createElement("div");//Create an imageContainer div element
    imageContainer.style.display = "inline-block";//Set display to inline block
    imageContainer.style.margin = "5px";//Create margin between images
    imageContainer.style.borderStyle = "solid";//Create a border around images
    imageContainer.style.borderWidth = "10px 10px 10px 10px";//Set border width
    imageContainer.style.borderColor = "blue";//Set border colour
    anchor.href = radioPaperArray[i].href; //Insert href attribute
    anchor.target = "_blank"; //Open link in new browser window
    anchor.rel = "noopener noreferrer"; //Stop the linked pages from opening new window
    image.style.display = "flex-wrap";
    image.title = "Picture of Website Logo";//Create title if images don't load in browser
    image.src = radioPaperArray[i].imageLink;//Define image src for HTML output
    imageContainer.appendChild(image);//Embed image tags in div tag
    anchor.appendChild(imageContainer);//Embed div tags in anchor tag
    imagesContainer.appendChild(anchor);//Embed anchor tag links in container for all images
  }
 }

//Function to create a form input to suggest a listing using HTML Form Input
function forminput() {
  inputform.action = "suggestions.txt";//Submission file
  inputform.method = "post";//Set method to post to avoid including inputted information in the URL
  inputform.target = "_blank";//Open action file in new tab
  labelname.for = "nameinput";//Label for name input box
  labelname.innerHTML = "Enter the name: ";//Label wording for name input
  nameinput.title = "Input name of title";
  nameinput.placeholder = "Name";
  nameinput.name = "nameinput";//Input field name
  nameinput.id = "nameinput";//Create input field id
  nameinput.type = "text";//Create input field type
  nameinput.required = true;//require a value
  hrefname.for = "hrefinput";//Create label tag for href input box
  hrefname.innerHTML = "Enter the full website URL: ";//Create label for href input box
  hrefinput.title = "Website URL";
  hrefinput.placeholder = "Website URL";
  hrefinput.type = "url";//Create type for input href
  hrefinput.name = "hrefinput";//Create name for input box
  hrefinput.id = "hrefinput";//Create id for input box
  legend.innerHTML = "Suggest a title or station to add to the list using this form";//Description of the form
  fieldset.style.display = "inline";//Set display to avoid form using the full page width
  submit.innerHTML = "Submit";//Creat submit button
  fieldset.appendChild(labelname);//Display label for name input field
  fieldset.appendChild(nameinput);//Display name input field
  fieldset.appendChild(linebreak);//Display linebreak
  fieldset.appendChild(hrefname);//Display label for URL field
  fieldset.appendChild(hrefinput);//Display URL field
  fieldset.appendChild(linebreak1);//Display linebreak
  fieldset.appendChild(legend);//Display legend
  fieldset.appendChild(submit);//Display submit button
  inputform.appendChild(fieldset);//Display fieldset heading
  fieldset.style.backgroundColor = "#f5f5dc";//Set fieldset background as beige
  formContainer.appendChild(inputform);//Display form in form container div
}

//Function to submit data from the input form
function submit() {
    
  //Create variables here from form input submissions and append variables to array to be included in output to HTML
}

//Function containing footer text
function footercontainer() {
  var para = document.createElement("p");
  var para1 = document.createElement("p");
  var anchor = document.createElement("a");  
  footerContainer.style.backgroundColor = "navy";
  footerContainer.style.color = "white";
  footerContainer.style.width = "100%";
  para.style.textAlign = "center";
  para.innerHTML = "This website was created by Pat Wallace as a course project and is not intended for commercial use";
  footerContainer.appendChild(para);
  para1.innerHTML = "View the Readme.md file for further details";
  para1.style.textAlign = "center";
  anchor.style.color = "white";
  anchor.target = "_blank";
  anchor.href = "README.md";
  anchor.appendChild(para1);
  footerContainer.appendChild(anchor);
  document.body.appendChild(footerContainer);
}

//Function to remove footercontainer
function removefootercontainer() {
  footercontainer.remove();
  }


//Run the functions and statements to create the webpage
headercontainer();
buttoncontainer();
textview();
textcontainer();
textformcontainer();
imagescontainer();
formcontainer();
footercontainer();