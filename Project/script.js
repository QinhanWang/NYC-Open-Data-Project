async function init(){
  let link ="farm.json"; //https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=50";
  info = await fetch(link);
  data = await info.json();
  //console.log(data);
  leftPanel = get("leftPanel");
  let build = "";

  // generate cards
  for(let i = 0; i < data.length; i+=1) {
    let farm = data[i];
    build += card(farm);
  }

  //Display results
  leftPanel.innerHTML = build;  

   let years = fillDropDown("year");
  document.getElementById("year").innerHTML = years;

   let boro = fillDropDown("borough");
  document.getElementById("boro").innerHTML = boro;

  let ebt = fillDropDown("accepts_ebt");
  document.getElementById("ebt").innerHTML = ebt;  

     let days = fillDropDown("daysoperation");
  document.getElementById("days").innerHTML = days;

  let hours = fillDropDown("hoursoperations");
  document.getElementById("hours").innerHTML = hours;
}

//filter by year
function filterbyyear(){
  leftPanel = get("leftPanel");
  let year= get("year").value;
  let result = document.getElementById("result");
  let build ="";
  let ct=0;

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.year == year){
      build+= card(farm);
      ct+=1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  leftPanel.innerHTML=build;
}

function filterbyboroandebt(){
  leftPanel = get("leftPanel");
  let result = document.getElementById("result");
  let boros= get("boro").value;
  let ebts= get("ebt").value;
  let build ="";
  let ct=0;

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.borough == boros && farm.accepts_ebt == ebts){
      build+= card(farm);
      ct+=1;
    }
  }
  result.innerHTML = `${ct} Results found.`
 leftPanel.innerHTML = build; 
}
  

//FIlter by Operating hours and days (use select)
function filterbyoperatingdayandhour(){
  leftPanel = get("leftPanel");
  let day= get("days").value;
  let hour= get("hours").value;
  let result = document.getElementById("result");
  let build ="";
  let ct=0;

   for(let i=0; i<data.length; i++){
    let farm=data[i];
    if(farm.hoursoperations == hour || farm.daysoperation == day){
      build+= card(farm);
      ct+=1;
    }
  }
  result.innerHTML = `${ct} Results found.`;
  leftPanel.innerHTML=build;
}

//modal function
/*function initialize(){
  createModal("<img src='images/cow.webp'>", "<img src='images/cow2.webp'>", "modal_output");
}*/

//showmap
function displayMap(){
  //Retrieve the latitude & longitude from the user via text inputs and pass it to the showMap() function to generate the map and display it.
  let lat = get("lat").value;
  let lon = get("lon").value;
  showMap(lat,lon);
}



//Analysis.html of  function(1) 

function accidentsByBorough(){
//Create and initialize variables:
let q = 0, bk = 0, bx = 0, m = 0, s = 0;

for(let i = 0; i < data.length; i++){
    let farm = data[i];
    if(farm.borough == "Queens"){
      q++;
    }else if(farm.borough == "Manhattan"){
      m++;
    }else if(farm.borough == "Brooklyn"){
      bk++;
    }else if(farm.borough == "Bronx"){
      bx++;
    }else if(farm.borough == "Staten Island"){
      s++;
    }
  }

  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
];

let chartType = get("chartType").value;

displayChart(chartData,"chart",chartType)
}

//Analysis.html of  function(2) 
function accidentsByborough(){
//Create and initialize variables:
let a = 0 ; b = 0 ; c = 0 ; d = 0 ; e = 0 ; f = 0 ; g = 0 ; h = 0;

for(let i = 0; i < data.length; i++){
    let farm = data[i];
    if(farm.year == 2025){
      a++;
    }else if(farm.year == 2024){
      b++;
    }else if(farm.year == 2023){
      c++;
    }else if(farm.year == 2022){
      d++;
    }else if(farm.year == 2021){
      e++;
    }else if(farm.year == 2020){
      f++;
    }else if(farm.year == 2019){
      g++;
    }else if(farm.year == 2018){
      h++;
    }
  }

  let chartData = [
    ["2025",a],
    ["2024",b],
    ["2023", c],
    ["2022", d],
    ["2021", e],
    ["2020", f],
    ["2019", g],
    ["2018", h]
];

let chartTypes = get("chartTypes").value;

displayChart(chartData,"charts",chartTypes)
}