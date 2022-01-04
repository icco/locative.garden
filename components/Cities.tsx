import d3 from "d3"
import { Component } from "react"
import rd3 from "react-d3-library"

class Cities extends Component {
  constructor(props) {
    super(props)
    this.state = { d3: "" }
  }

  doSomething() {
    const margin = { top: 20, right: 100, bottom: 20, left: 100 }
    const width = 400 - margin.left - margin.right
    const height = 1400 - margin.top - margin.bottom

    const y = d3.scale.linear().rangeRound([0, height]).domain([90, -90])
    const yAxis = d3.svg.axis().scale(y).ticks(19).orient("left")

    const node = document.createElement("div")

    const svg = d3
      .select(node)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

    // For data:
    // https://en.wikipedia.org/wiki/List_of_cities_by_latitude
    // http://transition.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html
    d3.json("cities.json", function (error, data) {
      if (error) {
        console.error(error)
      }

      console.log(data)

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
    })
  }

  componentDidMount() {
    this.setState({ d3: this.doSomething() })
  }

  render() {
    return (
      <div>
        <rd3.Component data={this.state.d3} />
      </div>
    )
  }
}

export { Cities }
