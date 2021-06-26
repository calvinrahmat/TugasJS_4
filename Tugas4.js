const findClosestNum = ([...arr], num) => {
	sorted = arr.sort((a, b) => {
		awal = Math.abs(num - a);
		console.log('awal: ' + awal);
		return Math.abs(num - a) - Math.abs(num - b);
	});
	console.log(sorted[0]);
};

findClosestNum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
