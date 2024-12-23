// användare fyller i stad
window.onload = function() {
    let cityInput = prompt("Ange en stad:");
    let cityData = getCityData(cityInput);
  
    if (cityData) {
      let cityName = cityData.name;
      let cityCountry = cityData.country;
  
      // gör om sidans titel till den inskrivna staden
      document.title = `${cityName}`;
  
      document.querySelector('h2').textContent = `${cityName} (${cityCountry})`;
      
      let distancesInfo = calculateDistances(cityData);
      let closest = distancesInfo.closest;
      let furthest = distancesInfo.furthest;
      
      // om ifylld stad inte finns
      highlightCities(cityName, closest, furthest);
    } else {
      document.title = "Not Found";
      document.querySelector('h3').textContent = `${cityInput} finns inte i databasen`;
      
      
    }
  };
  
  
  // hämta stadsdata
  function getCityData(cityName) {
    return cities.find(city => city.name.toLowerCase() === cityName.toLowerCase()) || null;
  }
  
  //beräkn närmast o lägnst bort stad 
  function calculateDistances(cityData) {
    let closestDistance = Infinity;
    let furthestDistance = -Infinity;
    let closestCity = null;
    let furthestCity = null;
  
    distances.forEach(dist => {
      let otherCityId = null;
  
      if (dist.city1 === cityData.id) {
        otherCityId = dist.city2;
      } else if (dist.city2 === cityData.id) {
        otherCityId = dist.city1;
      }
  
      if (otherCityId !== null) {
        let otherCity = cities.find(city => city.id === otherCityId);
  
        if (otherCity) {
          console.log(`Checking distance between ${cityData.name} and ${otherCity.name}: ${dist.distance} mil`);
  
          if (dist.distance < closestDistance) {
            closestDistance = dist.distance;
            closestCity = otherCity;
          }
          if (dist.distance > furthestDistance) {
            furthestDistance = dist.distance;
            furthestCity = otherCity;
          }
        }
      }
    });
  
    console.log(`Closest city to ${cityData.name}: ${closestCity?.name} (${closestDistance} mil)`);
    console.log(`Furthest city from ${cityData.name}: ${furthestCity?.name} (${furthestDistance} mil)`);
  
    return {
      closest: closestCity ? { name: closestCity.name, distance: closestDistance } : null,
      furthest: furthestCity ? { name: furthestCity.name, distance: furthestDistance } : null
    };
  }
  
  
  
  //färger o avstånd städer
  function highlightCities(cityName, closest, furthest) {
    let cities = document.querySelectorAll('.cityBox');
  
    cities.forEach(cityBox => {
      cityBox.classList.remove('target', 'closest', 'furthest');
      cityBox.textContent = cityBox.textContent.split(' (')[0]; // tar bort tidigare avstånd om det finns
  
      if (cityBox.textContent === cityName) {
        cityBox.classList.add('target');
      } else if (closest && cityBox.textContent === closest.name) {
        cityBox.classList.add('closest');
        //gör om avståndet från km till mil
        
        let distanceInMil = (closest.distance / 10);
        cityBox.textContent += ` ligger ${distanceInMil} mil bort`;
      } else if (furthest && cityBox.textContent === furthest.name) {
        cityBox.classList.add('furthest');
        let distanceInMil = (furthest.distance / 10); 
        cityBox.textContent += ` ligger ${distanceInMil} mil bort`;
      }
    });
  
      //lägger i närmast o längst bort stad i h3
      let closestSpan = document.getElementById('closest');
      let furthestSpan = document.getElementById('furthest');
    
      if (closest) {
        closestSpan.textContent = `${closest.name}`;
      } else {
        closestSpan.textContent = "Ingen data";
      }
    
      if (furthest) {
        furthestSpan.textContent = `${furthest.name}`;
      } else {
        furthestSpan.textContent = "Ingen data";
      }
  }
  
  // Funktion för att hämta avstånd mellan två städer
  function getDistance(city1, city2) {
    if (city1 === city2) return ""; //tom cell för diagonalen
    const pair = distances.find(
      (d) =>
        (d.city1 === city1 && d.city2 === city2) ||
        (d.city1 === city2 && d.city2 === city1)
    );
    return pair ? (pair.distance / 10):"-" //dividera me 10 o 1 decimal
  }
  
  
  
  
  // Funktion för att hämta avstånd mellan två städer
  function getDistance(city1, city2) {
    if (city1 === city2) return ""; // Tom cell för diagonalen
    const pair = distances.find(
      (d) =>
        (d.city1 === city1 && d.city2 === city2) ||
        (d.city1 === city2 && d.city2 === city1)
    );
    return pair ? (pair.distance / 10) : "-"; // Dividera med 10 och format till 1 decimal
  }
  
  function createTable() {
    const table = document.getElementById("myTable");
  
    // Skapa rubrikraden
    const headerRow = document.createElement("div");
    headerRow.classList.add("row", "head_row");
    const emptyCell = document.createElement("div");
    emptyCell.classList.add("cell", "head_column");
    headerRow.appendChild(emptyCell);
  
    cities.forEach((city) => {
      const th = document.createElement("div");
      th.classList.add("cell", "head_column");
      th.innerText = city.id;
      headerRow.appendChild(th);
    });
  
    table.appendChild(headerRow);
  
    // Skapa övriga rader
    cities.forEach((city1, rowIndex) => {
      const row = document.createElement("div");
      row.classList.add("row", rowIndex % 2 === 0 ? "even_row" : "odd_row");
  
      // Första kolumnen
      const cityCell = document.createElement("div");
      cityCell.classList.add("cell", "head_column");
      cityCell.innerText = `${city1.id}-${city1.name}`;
      row.appendChild(cityCell);
  
      // Skapa övriga celler
      cities.forEach((city2, colIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("cell", colIndex % 2 === 0 ? "even_col" : "odd_col");
        const distance = getDistance(city1.id, city2.id);
        cell.innerText = distance || ""; // Visa tomt om det är diagonalen
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  }
  
  
  // Kör funktionen för att skapa tabellen
  createTable();
  
  