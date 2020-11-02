let long;
let lat;

let weatherDescription = document.querySelector(".temperature-description");
let weatherTemp = document.querySelector(".degree");
let userLocation = document.querySelector(".location-timezone");
let icon = document.querySelector(".icon");

function clearData() {
  userLocation.innerHTML = "Fetching..";
  weatherDescription.innerHTML = "";
  weatherTemp.innerHTML = "";
  icon.src = "";
}
// on click, check users location and fetch weather api using those coordinates.
let currentLocationBtn = document.querySelector(".current");
currentLocationBtn.addEventListener("click", function fetchCurrent() {
  try {
    //checking if user allowed location
    if (navigator.geolocation) {
      clearData();
      //getting users current coords and declaring them as lets.
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;

        //declaring api link as 'api' with variable coordinates depending on users geolocation
        let api = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&appid=78d1dd03beead1be1079897300268d33`;

        //fetching API
        fetch(api)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            //declaring the current location information object as currentData
            const currentData = data.list[0];
            console.log(currentData);

            //renaming one property for fun; if the description is X, set innerHTML to y.
            if (
              currentData.weather[0].description === "light intensity drizzle"
            ) {
              weatherDescription.innerHTML = "iz drizzlin baby";
            } else {
              weatherDescription.innerHTML = currentData.weather[0].description;
            }

            //set temp as celcius
            var celsius = currentData.main.temp - 273.15;
            var rndNum = celsius.toFixed(0);
            //push temp to html
            weatherTemp.innerHTML = `${rndNum} C`;
            // push user location to html
            userLocation.innerHTML = currentData.name;

            // get icon from a different source, but still depending on current data
            let icon = document.querySelector(".icon");
            let currentIconId = currentData.weather[0].icon;
            const iconApi = `http://openweathermap.org/img/wn/${currentIconId}@4x.png`;
            icon.src = iconApi;
          });
      });
    }
    //if theres
  } catch {
    alert("Runtime error");
  }
});

///Refetch for New York
let nyBtn = document.querySelector(".ny");
nyBtn.addEventListener(
  "click",
  function () {
    clearData();
    const proxy = "https://cors-anywhere.herokuapp.com/";
    let api = `https://api.openweathermap.org/data/2.5/find?lat=40.71427&lon=-74.00597&appid=78d1dd03beead1be1079897300268d33`;

    //fetching API
    fetch(api)
      .then((response) => {
        //alert(JSON.stringify(response));
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const currentData = data.list[0];
        console.log(currentData.weather[0].icon);
        //alert(JSON.stringify(data));

        //set temp
        var celsius = currentData.main.temp - 273.15;
        var rndNum = celsius.toFixed(0);
        weatherTemp.innerHTML = `${rndNum} C`;

        userLocation.innerHTML = currentData.name;

        //renaming one property for fun; if the description is X, set innerHTML to y.
        if (currentData.weather[0].description === "light intensity drizzle") {
          weatherDescription.innerHTML = "iz drizzlin baby";
        } else {
          weatherDescription.innerHTML = currentData.weather[0].description;
        }

        let icon = document.querySelector(".icon");
        let currentIconId = currentData.weather[0].icon;
        const iconApi = `https://openweathermap.org/img/wn/${currentIconId}@4x.png`;
        icon.src = iconApi;
      });
  },
  (error) => {
    alert(error.message);
  }
);

///Refetch data from data for Marbella
////asynchronous function because it has to fetch data before it can continue running..
async function fetchMarbella() {
  try {
    //await so that rest of code doesnt run until it has fetched all data.
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/find?lat=36.516666&lon=-4.883333&appid=78d1dd03beead1be1079897300268d33"
    );
    //data fetched, format it to JSON and then do alot of stuff.
    JSON.stringify(response);
    response.json().then((data) => {
      const currentData = data.list[0];

      //set temperature
      ////changing temp to celcius
      var celsius = currentData.main.temp - 273.15;
      ////rounding number to next integer
      var rndNum = celsius.toFixed(0);
      ////setting innerhtml to the number
      weatherTemp.innerHTML = `${rndNum} C`;

      //set user location
      userLocation.innerHTML = currentData.name;

      //renaming one property for fun; if the description is X, set innerHTML to y.
      if (currentData.weather[0].description === "light intensity drizzle") {
        weatherDescription.innerHTML = "iz drizzlin baby";
      } else {
        weatherDescription.innerHTML = currentData.weather[0].description;
      }

      //set weather icon
      let icon = document.querySelector(".icon");
      let currentIconId = currentData.weather[0].icon;
      const iconApi = `https://openweathermap.org/img/wn/${currentIconId}@4x.png`;
      icon.src = iconApi;
    });
  } catch (err) {
    console.log("fetch failed");
  }
}

//Make the button run the function
let marbellaBtn = document.querySelector(".marbella");
marbellaBtn.addEventListener("click", function () {
  //clear current data
  clearData();
  //fetch weather data for Marbella
  fetchMarbella();
});

// MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
