const callback = () => {};
includeHTML("navbar.html", "navbar-included", callback);

const callback2 = () => {
  //min, max, avg megjelenítése

  let minDegree = document.querySelector("span#min-degree");
  let minFahrenheit = document.querySelector("span#min-fahrenheit");
  let minCelsiusTemp = minTemp(weekDegree);
  minDegree.innerHTML = minCelsiusTemp;
  minFahrenheit.innerHTML = celsiusToFahrenheit(minCelsiusTemp);

  let maxDegree = document.querySelector("span#max-degree");
  let maxFahrenheit = document.querySelector("span#max-fahrenheit");
  let maxCelsiusTemp = maxTemp(weekDegree);
  maxDegree.innerHTML = maxCelsiusTemp;
  maxFahrenheit.innerHTML = celsiusToFahrenheit(maxCelsiusTemp);

  let avgDegree = document.querySelector("span#avg-degree");
  let avgFahrenheit = document.querySelector("span#avg-fahrenheit");
  let avgCelsiusTemp = avgTemp(weekDegree);
  avgDegree.innerHTML = avgCelsiusTemp;
  avgFahrenheit.innerHTML = celsiusToFahrenheit(avgCelsiusTemp);

  // Balázs Kiegészítés
  let datum = new Date();
  let nap = datum.getDay();
  kiir(nap);
  if (nap == 0) {
    document.getElementById("days-of-week").selectedIndex = 7;
    kiir(6);
  } else {
    document.getElementById("days-of-week").selectedIndex = nap;
    kiir(nap);
  }
  // Balázs Kiegészítés vége
};
includeHTML("weather.html", "weather-included", callback2);
