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

        function renderHistory() {
            $("#search-history").empty();
            for (var i = 0; i < searchArray.length; i++) {
                var searchBtn = $("<li>", "<button>").addClass("btn list-group-item");
                searchBtn.attr("data-name", searchArray[i]);
                searchBtn.text(searchArray[i]);
                $("#search-history").prepend(searchBtn);
              }
        }

        var queryURL2 = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + APIKey;
        
        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response) {
            console.log(response);
            var date = response.list[0].dt_txt;
            $("#date").text(date);
            var day1 = response.list[7].dt_txt;
            $("#day1").text(day1);
            var day2 = response.list[15].dt_txt;
            $("#day2").text(day2);
            var day3 = response.list[23].dt_txt;
            $("#day3").text(day3);
            var day4 = response.list[31].dt_txt;
            $("#day4").text(day4);
            var day5 = response.list[39].dt_txt;
            $("#day5").text(day5);

            var iconDiv1 = $("<img>");
            var condition1 = response.list[7].weather[0].icon;
            var iconSrc1 = "https://openweathermap.org/img/w/" + condition1 + ".png";
            iconDiv1.attr("src", iconSrc1);
            $("#condition1").html(iconDiv1);
            var iconDiv2 = $("<img>");
            var condition2 = response.list[15].weather[0].icon;
            var iconSrc2 = "https://openweathermap.org/img/w/" + condition2 + ".png";
            iconDiv2.attr("src", iconSrc2);
            $("#condition2").html(iconDiv2);
            var iconDiv3 = $("<img>");
            var condition3 = response.list[23].weather[0].icon;
            var iconSrc3 = "https://openweathermap.org/img/w/" + condition3 + ".png";
            iconDiv3.attr("src", iconSrc3);
            $("#condition3").html(iconDiv3);
            var iconDiv4 = $("<img>");
            var condition4 = response.list[31].weather[0].icon;
            var iconSrc4 = "https://openweathermap.org/img/w/" + condition4 + ".png";
            iconDiv4.attr("src", iconSrc4);
            $("#condition4").html(iconDiv4);
            var iconDiv5 = $("<img>");
            var condition5 = response.list[39].weather[0].icon;
            var iconSrc5 = "https://openweathermap.org/img/w/" + condition5 + ".png";
            iconDiv5.attr("src", iconSrc5);
            $("#condition5").html(iconDiv5);
                       
            var temp1 = response.list[7].main.temp;
            $("#temp1").text("Temp: " + temp1);
            var temp2 = response.list[15].main.temp;
            $("#temp2").text("Temp: " + temp2);
            var temp3 = response.list[23].main.temp;
            $("#temp3").text("Temp: " + temp3);
            var temp4 = response.list[31].main.temp;
            $("#temp4").text("Temp: " + temp4);
            var temp5 = response.list[39].main.temp;
            $("#temp5").text("Temp: " + temp5);

            var humid1 = response.list[7].main.humidity;
            $("#humid1").text("Humidity: " + humid1);
            var humid2 = response.list[15].main.humidity;
            $("#humid2").text("Humidity: " + humid2);
            var humid3 = response.list[23].main.humidity;
            $("#humid3").text("Humidity: " + humid3);
            var humid4 = response.list[31].main.humidity;
            $("#humid4").text("Humidity: " + humid4);
            var humid5 = response.list[39].main.humidity;
            $("#humid5").text("Humidity: " + humid5);
        })

        
    })
})