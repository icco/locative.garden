import * as d3 from "d3"
import { useEffect } from "react"

// Built following https://medium.com/codesphere-cloud/creating-data-visualizations-with-d3-and-reactjs-c288d7890390
function Cities() {
  useEffect(() => {
    const margin = { top: 20, right: 100, bottom: 20, left: 100 }
    const width = 400 - margin.left - margin.right
    const height = 1400 - margin.top - margin.bottom

    const range = [0, height]
    const domain = [90, -90]
    const y = d3.scaleLinear(domain, range)
    const yAxis = d3.axisLeft(y).scale(y).ticks(19)

    const svg = d3
      .select("#cities-component-d3")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // For data:
    // https://en.wikipedia.org/wiki/List_of_cities_by_latitude
    // http://transition.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html
    d3.json("/cities.json").then(
      (
        data: {
          lat: number
          lon: number
          name: string
        }[]
      ): void => {
        // Add dots
        svg
          .selectAll("circle")
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", 0)
          .attr("cy", function (d) {
            return y(d.lat)
          })
          .attr("r", 5)

        // Create labels
        svg
          .selectAll("text")
          .data(data)
          .enter()
          .append("text")
          .text(function (d) {
            return d.name
          })
          .attr("x", 10)
          .attr("y", function (d) {
            return y(d.lat)
          })
          .attr("transform", "translate(5,5)")

        svg
          .append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", "1em")
          .style("text-anchor", "end")
          .text("Latitude")
      }
    )
  })

  return <div id="cities-component-d3"></div>
}

export { Cities }
