// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

//Validate all form fields are complete

window.addEventListener("load", function() {
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

   if (pilotNameInput.value === "" || 
       copilotNameInput.value === "" || 
       fuelLevelInput ==="" || 
       cargoMassInput === "") {
       alert("All fields are required!");  
   // stop the form submission
     //  event.preventDefault();     
   } else if (isNaN(fuelLevelInput.value)|| 
      isNaN(cargoMassInput.value) ||
      isNaN(pilotNameInput.value)===false ||
      isNaN(copilotNameInput.value)===false)
   {   
      invalidEntryMessage();
  
   } else 
   // Updating Shuttle Requirements
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
   }
   {
      let pilotStatusVar = document.getElementById("pilotStatus");
      let copilotStatusVar = document.getElementById("copilotStatus");
      let fuelStatusVar = document.getElementById("fuelStatus");
      let cargoStatusVar = document.getElementById("cargoStatus");
      pilotStatusVar.innerHTML = `Pilot ${pilotNameInput.value} Ready`;
      copilotStatusVar.innerHTML = `Co-pilot ${copilotNameInput.value} Ready`;
     
      if (fuelLevelInput.value < 10000) {
         fuelStatusVar.innerHTML = `There is not enough fuel for the journey`;
          shuttleNotReady();
      }
      if (cargoMassInput.value >10000) {
         cargoStatusVar.innerHTML = `There is too much mass for the shuttle to take off`;
         shuttleNotReady();
      }
      if (fuelLevelInput.value >= 10000 && 
         cargoMassInput.value <=10000) {
         shuttleReady();
         }
      
   }
      event.preventDefault();
   });
}); 

