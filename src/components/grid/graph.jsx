import React, {useRef, useEffect, useState, useContext} from "react";
import Chart from "chart.js";
import { AppContext } from "../../app_context";

export default function Graph() {
	const { state, dispatch } = useContext(AppContext);
	
	// const parseData = () => {
	// 	state.healthData
	// }

	const chartConfig = {
		type: 'bar',
		data: {
				datasets: [{
						label: 'Bar Dataset',
						data: [10, 20, 30, 40],
						// this dataset is drawn below
						order: 1
				}, {
						label: 'Line Dataset',
						data: [10, 10, 10, 10],
						type: 'line',
						// this dataset is drawn on top
						order: 2
				}],
				labels: ['January', 'February', 'March', 'April']
		},
		options: {}
	};
		const chartContainer = useRef(null);
		const [chartInstance, setChartInstance] = useState(null);
	
		useEffect(() => {
			if (chartContainer && chartContainer.current) {
				const newChartInstance = new Chart(chartContainer.current, chartConfig);
				setChartInstance(newChartInstance);
			}
		}, [chartContainer]);
	
		return (
				<canvas ref={chartContainer} />
		);
		}
