

export function parseData(dataArray) {

	const totals = [];
	const energy = [];
	const muscularFatigue = [];
	const hunger = [];
	const productivity = [];
	const times = [];
	
	for (let i = 0; i < dataArray.length; i++) {
		const healthData = dataArray[i];
		totals.push(healthData.energy -
      healthData.muscularFatigue -
      healthData.hunger +
			healthData.productivity)
		energy.push(healthData.energy)
		muscularFatigue.push(healthData.muscularFatigue)
		hunger.push(healthData.hunger)
		productivity.push(healthData.productivity)
		times.push(healthData.time)
	}

  return {totals, energy, muscularFatigue, hunger, productivity, times};
}
