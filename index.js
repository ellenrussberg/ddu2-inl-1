window.onload = function() {
    let cityInput = prompt("Ange en stad:");
    let cityData = getCityData(cityInput);
  
    if (cityData) {
      let cityName = cityData.name;
      let cityCountry = cityData.country;
  
      document.title = `${cityName}`;
  
      document.querySelector('h2').textContent = `${cityName} (${cityCountry})`;
      
      let distancesInfo = calculateDistances(cityData);
      let closest = distancesInfo.closest;
      let furthest = distancesInfo.furthest;
      
      highlightCities(cityName, closest, furthest);
    } else {
      document.title = "Not Found";
      document.querySelector('h3').textContent = `${cityInput} finns inte i databasen`;
      
      
    }
  };
  

  function getCityData(cityName) {
    return cities.find(city => city.name.toLowerCase() === cityName.toLowerCase()) || null;
  }
  
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
  
  
  
  function highlightCities(cityName, closest, furthest) {
    let cities = document.querySelectorAll('.cityBox');
  
    cities.forEach(cityBox => {
      cityBox.classList.remove('target', 'closest', 'furthest');
      cityBox.textContent = cityBox.textContent.split(' (')[0];
  
      if (cityBox.textContent === cityName) {
        cityBox.classList.add('target');
      } else if (closest && cityBox.textContent === closest.name) {
        cityBox.classList.add('closest');
        
        let distanceInMil = (closest.distance / 10);
        cityBox.textContent += ` ligger ${distanceInMil} mil bort`;
      } else if (furthest && cityBox.textContent === furthest.name) {
        cityBox.classList.add('furthest');
        let distanceInMil = (furthest.distance / 10); 
        cityBox.textContent += ` ligger ${distanceInMil} mil bort`;
      }
    });
  
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
  
  function getDistance(city1, city2) {
    if (city1 === city2) return "";
    const pair = distances.find(
      (d) =>
        (d.city1 === city1 && d.city2 === city2) ||
        (d.city1 === city2 && d.city2 === city1)
    );
    return pair ? (pair.distance / 10):"-"
  }
  
  
  
  
  function getDistance(city1, city2) {
    if (city1 === city2) return "";
    const pair = distances.find(
      (d) =>
        (d.city1 === city1 && d.city2 === city2) ||
        (d.city1 === city2 && d.city2 === city1)
    );
    return pair ? (pair.distance / 10) : "-";
  }
  
  function createTable() {
    const table = document.getElementById("myTable");
  
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
  
    cities.forEach((city1, rowIndex) => {
      const row = document.createElement("div");
      row.classList.add("row", rowIndex % 2 === 0 ? "even_row" : "odd_row");
  
      const cityCell = document.createElement("div");
      cityCell.classList.add("cell", "head_column");
      cityCell.innerText = `${city1.id}-${city1.name}`;
      row.appendChild(cityCell);
  
      cities.forEach((city2, colIndex) => {
        const cell = document.createElement("div");
        cell.classList.add("cell", colIndex % 2 === 0 ? "even_col" : "odd_col");
        const distance = getDistance(city1.id, city2.id);
        cell.innerText = distance || "";
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  }
  
  
  createTable();
  
  