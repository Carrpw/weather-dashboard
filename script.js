$(document).ready(function() {

    var APIKey = "&units=metric&appid=e222da09846714641d1de2e70cf4f020";
  
    var searchArray = [];

    $("#search-button").on("click", function() {
        event.preventDefault()
        if($("#city-name").val() === "") {
            alert("You must type in a city to look up.");
            return;
        }
        
        
    })
})