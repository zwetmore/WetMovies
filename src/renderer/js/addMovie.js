const fs = require('fs');
const path = require('path');
const csvLocationFromFile = "../../data/movies.csv";

/**
 * Appends a JSON object to a CSV file. If the file doesn't exist, it creates it and writes headers.
 * Special handling: if 'genres' is a list, it's joined with semicolons.
 * 
 * @param {Object} jsonObject - The JSON object to append
 * @param {string} filePath - Path to the CSV file
 */
function appendJsonToCsv(jsonObject, filePath) {
  const headers = Object.keys(jsonObject);
  const values = headers.map(key => {
    let val = jsonObject[key];
    if (Array.isArray(val)) {
      return `"${val.join(';')}"`; // wrap in quotes in case of commas or semicolons
    }
    if (typeof val === 'string') {
      return `"${val.replace(/"/g, '""')}"`; // escape quotes
    }
    return val;
  });

  const csvLine = values.join(',') + '\n';

  // If the file doesn't exist, write headers first
  if (!fs.existsSync(filePath)) {
    const headerLine = headers.join(',') + '\n';
    fs.writeFileSync(filePath, headerLine + csvLine, 'utf8');
  } else {
    fs.appendFileSync(filePath, csvLine, 'utf8');
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('addMovieForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const formData = new FormData(form);
    const jsonObject = {};

    for (const [key, value] of formData.entries()) {
      if (jsonObject[key]) {
        if (!Array.isArray(jsonObject[key])) {
          jsonObject[key] = [jsonObject[key]];
        }
        jsonObject[key].push(value);
      } else {
        jsonObject[key] = value;
      }
    }

    appendJsonToCsv(jsonObject, path.resolve(__dirname, csvLocationFromFile));

    alert("Movie added successfully!");
    form.reset();
    window.location.href = "../html/viewMovies.html";
  });
});
