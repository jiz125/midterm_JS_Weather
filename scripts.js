let returnData;
let button;
let input;
let url;
let result;
let list;
let element;


button = document.getElementById('searchBar');
//input = document.getElementById('typingBar');
//console.log(input);


button.addEventListener('click', function () {
  input = document.getElementById('typingBar').value;
  console.log(input);
  searchData(input);
})



////////////////////------------------API are called by clicking search buttons. NEXT: use typingbar create a for loop to check matching data.
function searchData(city) {
  // url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b71c7a9022f0d952d1367526279a1fa4`;
  url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b71c7a9022f0d952d1367526279a1fa4`;
  console.log(url)
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(jsonData => {
      results = jsonData.list.map(element => element.weather[0].id);
      renderResults(results); // eventrigger
    })
    .catch(err => {
      console.log("there was an error");
      document.getElementById("resultsList").innerHTML = "This is not a city, Try again!";
    });
}


//////////////------------ render result ----------------//////////////////////////////////////////////////////
function renderResults(results) {
  list = document.getElementById("resultsList");

  list.innerHTML = " ";//empty previous data
  

  for(let i=0;i<3; i++) {
    let emoji = document.createElement("li"); ///emoji 
    emoji.classList.add("emoji");


//////////////------------ EMOJI ----------------//////////////////////////////////////////////////////

   if(results[i] === 800 ){ //sunny
    emoji.innerText = "👗 👒 🧢 🕶"; 

   } else if (results[i] > 800 && results[i] < 805){ // cloudy
    emoji.innerText = "👖 🌂 ";

   } else if (results[i] > 599 && results[i] < 623){ // snowing
    emoji.innerText = "🧣 🧤 🧥 🧦";
   
   } else if (results[i] > 499 && results[i] < 532){ // raining
    emoji.innerText = "🌂 🧥 🧦";

   }else {
    emoji.innerText = "💗";
   }

    // list.appendChild(element);
    list.appendChild(emoji);
  };
}







