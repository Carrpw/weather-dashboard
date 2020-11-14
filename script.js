$(document).ready(function() {

    var APIKey = "&units=metric&appid=e222da09846714641d1de2e70cf4f020";
  
    var searchArray = [];

    $("#search-button").on("click", function() {
        event.preventDefault()
        if($("#city-name").val() === "") {
            alert("You must type in a city to look up.");
            return;
        }
        var cityName = $("#city-name").val();
        searchArray.push(cityName);
        $("#city-name").val("");
        var queryURL = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + cityName + APIKey;
        
        $.ajax({
            url:queryURL,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var city = response.name;
            $("#city").text(city);
            var temp = response.main.temp;
            $("#temp").text("Temp: " + temp);
            var humid = response.main.humidity;
            $("#humid").text("Humidity: " + humid);
            var wind = response.wind.speed;
            $("#wind").text("Wind Speed: " + wind);
            var iconDiv = $("<img>");
            var icon = response.weather[0].icon;
            var iconSrc = "https://openweathermap.org/img/w/" + icon + ".png";
            iconDiv.attr("src", iconSrc);
            $("#icon").html(iconDiv);

            renderHistory();
  
        })

        

        
    })
})