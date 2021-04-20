var margin = { top: 10, right: 30, bottom: 30, left: 60 },
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3
  .select("#my_dataviz")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv(
  "https://raw.githubusercontent.com/nickrinaldi88/Knicks-DEF-DataVis/main/knicks.csv",

  // When reading the csv, I must format variables:

  // Now I can use this dataset:
  function (data) {
    // Add X axis --> it is a date format
    var x = d3
      .scaleTime()

      .domain(
        d3.extent(data, function (d) {
          return d.Year;
        })
      )
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    var y = d3
      .scaleLinear()
      .domain([
        d3.max(data, function (d) {
          return +d.Rank;
        }),
        0,
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.Year);
          })
          .y(function (d) {
            return y(d.Rank);
          })
      );
  }
);
