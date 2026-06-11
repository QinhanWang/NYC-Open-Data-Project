let $ = (selector) => document.querySelector(selector);


//card
function card( info ){
  let build = `<div class="cardfitted">
    <h2>${info.marketname}</h2>
              <hr>
              <p>Location: ${info.streetaddress}, ${info.borough}</p>
              <p>Year Opened: ${info.year}</p>
              <p>Community District: ${info.community_district}</p>
              <p>Operating hours: ${info.daysoperation}, ${info.hoursoperations}</p>
              <p>Open year round?:${info.open_year_round}</p>
              <p>Accepts EBT?: ${info.accepts_ebt}</p>`;
             
              if(info.latitude  && info.longitude){
                  build += `<input type="button" value="Map" onclick="showMap(${info.latitude},${info.longitude})">`;
                  }
     build +=   `</div>`;
return build;
}


//analysis


function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}


//map
// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}
// showMap() displays the map for a location [lat, lon] in the right panel
let mapObj;

function showMap(lat,lon){
  let location = [lat, lon];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);
}