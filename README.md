# weather-dashboard

This homework was to make a weather dashboard using apis to query infomation.

Files included:
-html
-javascript
-readme

I started this project from scratch, there were no starter files or snippets of code to use.
I initally started with the html file, making sure that I linked jquery, bootstrap, and my javascript file to it. I then started to make the general shape of the website using rows and columns. I then started to make all of the necessary ids that my javascript would need to add dynamic buttons and information.
Once done, I went into the javascript and got the api key so that I would be able to get the information over. I started with a event listener next for clicking on the search button so that when they searched a city it would know to take that value. Then run that value to the api to query for information regarding it, which, I would then pick through and pull the pertanant information over to my weather dashboard and attach to the predesignated tags with ids in my html document. 
Once I had the current day forcast listed, I shifted to the five day forcast which involved using a different query to obtain information over a longer time period. I did the same with the second set of information and sifted through it to obtain the information I needed and then attach it to the correct places in my html.
Next was to start on my search history, I created a function to look through and array of values that were pushed into the array once the user searched a city. This allowed me to list buttons to the side that the user can click on to look again at their previous searches. 

![Screenshot (73)](https://user-images.githubusercontent.com/73077219/99139377-f8745e80-2605-11eb-8f78-2c6fd63816aa.png)

https://github.com/Carrpw/weather-dashboard
https://carrpw.github.io/weather-dashboard/