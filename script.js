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
//function checkRequired()
// form.addEventListener("submit", function(event) {
//    let pilotNameInput = document.querySelector("input[name=pilotName]");
//    let copilotNameInput = document.querySelector("input[name=copilotName]");
//    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
//    let cargoMassInput = document.querySelector("input[name=cargoMass]");
//      if (pilotNameInput.value === "" || 
//          copilotNameInput.value === "" || 
//          fuelLevelInput ==="" || 
//          cargoMassInput === "") {
//        alert("All fields are required!");
//        // stop the form submission
//        event.preventDefault();
//     }
//  //    if ((pilotNameInput.type !== string) ||
//  //    (copilotNameInput.type !== string) ||
//  //    (fuelLevelInput.type !== number) || cargoMassInput !== number)){
//  //    invalidEntryMessage()
//  //    };
//  });
// })
//invalid entry pop-up message
function invalidEntryMessage(){
   window.alert("Invalid entry")
}