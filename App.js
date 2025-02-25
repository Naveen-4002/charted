import React from 'react'
import {Chart as chartJs} from "chart.js/auto"
import {Bar,Doughnut,Dougnut,Line} from "react-chartjs-2"
import './App.css'
const App=()=>{
  return(
    <div className="chart">
      <div className="chart1">
      <h1>BAR-CHART</h1>
        <Bar
        data={{
          labels:['A','B','C'],
          datasets:[
            {
              label:"revenue",
              data:[200,300,400],
               backgroundColor:"green",
            },
            {
              label:"loss",
              data:[70,80,90],
              backgroundColor:"red"
            },

          ]

        }}

        />
      </div>
      <div className="b">
      <div className="chart2">
        <h1>LINE-CHART</h1>
        <Line
         data={{
          labels:['A','B','C'],
          datasets:[
            {
              label:"revenue",
              data:[20,12,15],
              backgroundColor:"blue",
              borderColor:"blue"
            },
            {
              label:"loss",
              data:[70,80,90],
              backgroundColor:"red",
              bordercolor:"green"
            },

          ]

        }}

        />
      </div>
      <div className="chart3">
      <h1>DOUGHNUT-CHART</h1>
        <Doughnut
        data={{
          labels:['A','B','C'],
          datasets:[
            {
              label:"revenue",
              data:[40,12,15],
              backgroundColor:"blue",

              borderRadius:5,
            },
          ]

        }}
/>
      </div>
      </div>
    </div>
  )}
  export default App