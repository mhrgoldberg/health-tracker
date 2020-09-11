import React, { useContext } from "react";
import { AppContext } from "../../app_context";
import { parseData } from "./graph_utility";
import { Line } from "react-chartjs-2";

export default function Graph() {
  const { state } = useContext(AppContext);
	const data = parseData(state.healthData);
	
  const chartData = {
      datasets: [
        {
          label: "Totals",
          data: data.totals,
          type: "line",
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 0.6)"],
          order: 5,
          pointRadius: 5,
          pointStyle: "star",
					fill: true,
				},
				{
          label: "Energy",
          data: data.energy,
          type: "line",
          backgroundColor: ["rgba(120, 99, 132, 0.2)"],
          borderColor: ["rgba(120, 99, 132, 0.6)"],
          order: 4,
          pointRadius: 5,
          pointStyle: "star",
					fill: false,
        },
        {
          label: "Muscular Fatigue",
          data: data.muscularFatigue,
          type: "line",
          backgroundColor: ["rgba(255, 206, 86, 0.2)"],
          borderColor: ["rgba(255, 206, 86, 0.6)"],
          order: 3,
          pointRadius: 5,
          pointStyle: "cross",
					fill: false,
        },
        {
          label: "Hunger",
          data: data.hunger,
          type: "line",
          backgroundColor: ["rgba(54, 162, 235, 0.2)"],
          borderColor: ["rgba(54, 162, 235, 0.6)"],
          order: 2,
          pointStyle: "rectRounded",
          pointRadius: 2,
					fill: false,
        },
        {
          label: "Productivity",
          data: data.productivity,
          type: "line",
          fill: false,
          backgroundColor: ["rgba(153, 102, 255, 0.2)"],
          borderColor: ["rgba(153, 102, 255, 0.6)"],
          // this dataset is drawn on top
          order: 1,
          pointRadius: 5,
					pointStyle: "triangle",
        },
      ],
      borderWidth: 1,
      labels: data.times,
		};
		

    const options = {
      scales: {
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };




  return <Line data={chartData} options={options} />;
};