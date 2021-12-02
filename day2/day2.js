fs = require('fs')
path = require('path'),    
filePath = path.join(__dirname, 'input.txt');


const getFileData = () => {
	const inputFile = fs.readFile('input.txt', function (err, str)  {
		if (!err) {	
			const allData = []
			let count, arr;
			const data = str.toString().split('\n')

			for (i = 0; i < data.length; i++ ) { 
				arr = data[i].split(" ");
				allData.push({direction: arr[0], value: arr[1]})
			}

			return allData;
		} else {
			console.log(err)
			return allData;
		}
	})
}

const partOne = () => {
	const values = getFileData()

	let horizontalDistance = 0;
	let verticalDistance = 0;

	for(i = 0; i < values.length; i++) {
		let value = Number(values[j].value)
		let direction = values[j].direction

		if(direction === "forward") {
			horizontalDistance += value
		}
		else if(direction === "up") {
			verticalDistance -= value
		}
		else {
			verticalDistance += value
		}
	}

	return horizontalDistance * verticalDistance

}

const partTwo = () => {
	let horizontalDistance = 0;
	let depth = 0
	let aim = 0;

	for(i = 0; i < allData.length; i++) {
		let value = Number(allData[i].value)
		let direction = allData[i].direction

		if(direction === "forward") {
			horizontalDistance += value
			depth += aim * value
		}
		else if(direction === "up") {
			aim -= value
		}
		else {
			aim += value
		}
	}
}

getFileData()