import startView from './views/startView.js';
import statusView from './views/statusView.js';

const textInput = document.querySelector("#textInput");
const viewHtml = document.querySelector("#view");

const locations = {
   house: ['Frontyard', 'Backyard'],
   backyard: ['Frontyard', 'House'],
   frontyard: ['House', 'Backyard', 'Street']
};

const menuCommands = {
   travel: handleTravelCommand
}

function handleTravelCommand() {
   console.log('handling command');
}

const state = {
   view: {
      html: viewHtml
   },
   character: {
      name: 'Nathaniel',
      class: 'Software Developer',
      stats: {
         hp: 100
      },
      skills: {
         coding: 90,
         math: 85
      }
   },
   location: 'Frontyard'
};

addEvents();
changeView(statusView);

function addEvents() {
   textInput.addEventListener("keydown", keyDownEvent);
}

function keyDownEvent(event) {
   if (event.key == "Enter") {
      console.log(textInput.value);
      textInput.value = "";
   } 
}

function changeView(newView) {
   clearInnerHtml(state.view.html);
   addView(newView.html);
   updateView(newView.name)
}

function clearInnerHtml(htmlElement) {
   htmlElement.innerHTML = '';
}

function addView(view) {
   state.view.html.innerHTML = view;
}

function updateView(viewName) {
   switch (viewName) {
      case 'Status':
         updateStatusView();
         break;
      case 'Start':
         break;
      case 'Travel':
         break; 
   }  
}

function updateStatusView() {
   updateCurrentLocationHtml(state.location);
   updateTravelLocationsHtml(state.location);
}

function updateCurrentLocationHtml(location) {
   const currentLocationHtml = document.querySelector('#current-location');
   clearInnerHtml(currentLocationHtml);
   updateInnerText(currentLocationHtml, location);
}


function updateTravelLocationsHtml(currentLocation) {
   let travelLocationsListHtml = document.querySelector('#travel-locations');
   const newTravelLocationsArray = locations[ currentLocation.toLowerCase() ];
   
   let newLocationsHtml = '';
   for (let i = 0; i < newTravelLocationsArray.length; i++) {  
      newLocationsHtml = newLocationsHtml + `<li>${newTravelLocationsArray[i]}</li>`;
   }

   clearInnerHtml(travelLocationsListHtml);
   updateInnerHtml(travelLocationsListHtml, newLocationsHtml);
}

function updateInnerHtml(element, htmlString) {
   element.innerHTML = htmlString;
}

function updateInnerText(element, textString) {
   element.innerText = textString;
}


