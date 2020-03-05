window.onload = setInterval(clock,1000);

function clock()
{
  let d = new Date();

  let date = d.getDate();

  let month = d.getMonth();
  let montharr =["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
  month=montharr[month];

  let year = d.getFullYear();

  let day = d.getDay();
  let dayarr =["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
  day=dayarr[day];

  let hour =d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();

  document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
  document.getElementById("time").innerHTML=hour+":"+min+":"+sec;
}

function weatherBalloon( cityID ) {
  let apiKey = 'c376e46a741dbd0dfc7a757a78547c06';
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + apiKey)
  .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        drawWeather(data);
      })
      .catch(function() {
    // catch any errors
  });
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);

  document.getElementById('description').innerHTML = d.weather[0].description;
  document.getElementById('temp').innerHTML = celcius + '&deg;';
}

window.onload = function() {
  weatherBalloon( 830153 );
};