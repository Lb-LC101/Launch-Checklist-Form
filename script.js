// Write your JavaScript code here!
window.addEventListener("load", function(){
   //random number from 0 to 5
   let randomPlanet = Math.floor(Math.random()*5) 
   fetch("https://handlers.education.launchcode.org/static/planets.json").
      then(function(response) {
      response.json().then( function(json) {
      let data = json[randomPlanet];


// This block of code shows how to format the HTML once you fetch some planetary JSON!

let target = document.getElementById("missionTarget");
target.innerHTML = `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${data.name}</li>
   <li>Diameter: ${data.diameter}</li>
   <li>Star: ${data.star}</li>
   <li>Distance from Earth: ${data.distance}</li>
   <li>Number of Moons: ${data.moons}</li>
   </ol>
   <img src="${data.image}">
`
      });
   });
//Validate all form fields are complete


   let form = document.querySelector("form");
//invalid entry pop-up message
function invalidEntryMessage(){
   window.alert("Invalid entry") 
}



form.addEventListener("submit", function(event) {
let pilotNameInput = document.querySelector("input[name=pilotName]");
let copilotNameInput = document.querySelector("input[name=copilotName]");
let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
let cargoMassInput = document.querySelector("input[name=cargoMass]");
//check for required fields
   if (pilotNameInput.value === "" || 
       copilotNameInput.value === "" || 
       fuelLevelInput.value ==="" || 
       cargoMassInput.value === "") {
       alert("All fields are required!");  
//check for correct value t ypes   
   } else if (isNaN(fuelLevelInput.value)|| 
      isNaN(cargoMassInput.value) ||
      isNaN(pilotNameInput.value)===false ||
      isNaN(copilotNameInput.value)===false)
   {   
      invalidEntryMessage();
  
   } else {
   // Updating Shuttle Requirements on Form
   function shuttleNotReady(){
      let launchStatusVar = document.getElementById("launchStatus");
      launchStatusVar.innerHTML = "Shuttle not ready for launch";
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").style.color = "red";
   }
   function shuttleReady(){
      let launchStatusVar = document.getElementById("launchStatus");
      launchStatusVar.innerHTML = "Shuttle is ready for launch";
      document.getElementById("launchStatus").style.color = "green";
      document.getElementById("faultyItems").style.visibility = "visible";
   }
   
      let pilotStatusVar = document.getElementById("pilotStatus");
      let copilotStatusVar = document.getElementById("copilotStatus");
      let fuelStatusVar = document.getElementById("fuelStatus");
      let cargoStatusVar = document.getElementById("cargoStatus");
      pilotStatusVar.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
      copilotStatusVar.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
     
      if (fuelLevelInput.value < 10000) {
         fuelStatusVar.innerHTML = `There is not enough fuel for the journey`;
          shuttleNotReady();
      } else {
         fuelStatusVar.innerHTML = `Fuel level high enough for launch`;
         shuttleReady();
      }
      if (cargoMassInput.value >10000) {
         cargoStatusVar.innerHTML = `There is too much mass for the shuttle to take off`;
         shuttleNotReady();
      } else {
         cargoStatusVar.innerHTML = `Cargo mass low enough for launch`;
         shuttleReady();
      }
      if (fuelLevelInput.value >= 10000 && 
         cargoMassInput.value <=10000) {
         shuttleReady();
       } else {
          shuttleNotReady();
       }
      
   }
      event.preventDefault();
   });
      
}); 

