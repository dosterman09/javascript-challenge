// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");


console.log(data);
function buildTable(data){
    tbody.html("");
    data.forEach(function(UFO) {
//   console.log(UFO);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
    // console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
  });
});
}

//  button
var button = d3.select("#button");

//  form
var form = d3.select("#form");

d3.selectAll("#filter-btn").on("click", runEnter);


function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  console.log(inputValue);

//   console.log(date);
  let filteredData = tableData
  if (inputValue) {
    
    filteredData = filteredData.filter(row => row.datetime === inputValue);
  };
  
//   filteredData = filteredData.filter(row => row.datetime === inputValue);
  console.log(filteredData);
  buildTable(filteredData);
  
};
buildTable(tableData);

