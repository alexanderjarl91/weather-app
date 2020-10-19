
    let long;
    let lat;

    let weatherDescription = document.querySelector('.temperature-description')
    let weatherTemp = document.querySelector('.degree')
    let userLocation = document.querySelector('.location-timezone')
    

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position =>{
        alert(JSON.stringify(navigator.geolocation))
        console.log(position);
        let long = position.coords.longitude;
        let lat = position.coords.latitude;

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        let api = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${long}&appid=78d1dd03beead1be1079897300268d33`




        //fetching API
        fetch(api)
            .then(response => {
                alert(JSON.stringify(response))
                return response.json();
            })
            .then(data => {
            console.log(data);
            const currentData = data.list[0];
            console.log(currentData.weather[0].icon)
            alert(JSON.stringify(data))

            //renaming one property for fun
            if (currentData.weather[0].description === "light intensity drizzle") {
                weatherDescription.innerHTML = "iz drizzlin baby";
            } else {
                weatherDescription.innerHTML = currentData.weather[0].description;
            }
            

            //set temp
            var celsius = currentData.main.temp - 273.15;
            var rndNum = celsius.toFixed(0);
            weatherTemp.innerHTML = `${rndNum} C`;

            userLocation.innerHTML = currentData.name;


            let icon = document.querySelector('.icon');
            let currentIconId = currentData.weather[0].icon;
            const iconApi = `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@4x.png`
            icon.src = iconApi;


        });
    }, error => {
        alert(error.message)
    })};



// MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];





// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}