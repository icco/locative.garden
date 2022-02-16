import * as d3 from "d3"
import { useEffect, useMemo } from "react"

// References:
// - https://wattenberger.com/blog/react-and-d3
// - https://wattenberger.com/blog/d3-force
// - https://medium.com/codesphere-cloud/creating-data-visualizations-with-d3-and-reactjs-c288d7890390
// - https://observablehq.com/@ben-tanen/a-tutorial-to-using-d3-force-from-someone-who-just-learned-ho#link_sect
// - https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
//
// Data:
// - https://en.wikipedia.org/wiki/List_of_cities_by_latitude
// - http://transition.fcc.gov/mb/audio/bickel/DDDMMSS-decimal.html

const Axis = ({ domain = [0, 100], range = [10, 290] }) => {
  const ticks = useMemo(() => {
    const yScale = d3.scaleLinear().domain(domain).range(range)

    const width = range[1] - range[0]
    const pixelsPerTick = 30
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick))

    return yScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      yOffset: yScale(value),
    }))
  }, [domain, range])

  // M x y : start at x1, y1
  // h -6  : draw horizantal line to x1-6
  // v y2  : draw vertical line to y2
  // h x2  : draw horizantal line to x2
  return (
    <svg>
      <path
        d={["M", 6, range[0], "h", -6, "v", range[1], "h", 6].join(" ")}
        fill="none"
        stroke="currentColor"
      />
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(0, ${yOffset})`}>
          <line x2="6" stroke="currentColor" />
          <text
            key={value}
            style={{
              fontSize: "10px",
              textAnchor: "middle",
              transform: "translateX(20px)",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  )
}

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

        // Draw Axis
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

  return (
    <>
      <Axis domain={[-90, 90]} range={[10, 1440]} />
      <div id="cities-component-d3"></div>
    </>
  )
}

export { Cities }
