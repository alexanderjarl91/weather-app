This webapp uses the Geolocation web API to fetch the users coordinates. Then it collects specific data from the OpenWeatherMap API: name of location, temperature, weather description and weather icon.

The Marbella button is the cleanest coded one. It fetches API data with an asynchronous function where it awaits for the data to be received before it continues to run the rest of the function. That function also uses the try..catch statement to display an error message if theres an error fetching from the API

I had to translate the temperature to celsius from kelvin and use a seperate API to fetch the icons corresponding to the weather description. I had alot of trouble hosting this page. It wouldn't work on Surge because the geolocation web api won't run unless the page is secured by an SSL certificate.

Theres comments in the code for explanation.

By the way, I stole this modal from a codepen I found online and styled it to fit this design 🤫
