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
  
      console.log('Form JSON:', jsonObject);
  
      // You can add code here to send jsonObject somewhere or handle it
    });
  });
  