// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;

    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

       let selectedPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
   })

    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let document = window.document;
        let pilot = document.querySelector("input[name=pilotName]");
        let pilotValue = pilot.value;
        let copilot = document.querySelector("input[name=copilotName]");
        let copilotValue = copilot.value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let fuelLevelValue = fuelLevel.value;
        let cargoMass = document.querySelector("input[name=cargoMass]");
        let cargoMassValue = cargoMass.value;
        let list = document.getElementById("faultyItems");
        formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoMassValue);
    }); 
   
});