const name = [
	'Abigail',
	'Alexandra',
	'Fatih',
	'Amanda',
	'Angela',
	'Bella',
	'Carol',
	'Caroline',
	'fatih',
	'Deirdre',
	'Diana',
	'Elizabeth',
	'Ella',
	'Faith',
	'Olivia',
	'Penelope',
	'Diani',
	'fatih',
	'carol',
	'fatih',
	'Faith',
];

const findRepeatName = (name) => {
	const counts = {};
	name.forEach((y) => {
		counts[y] = (counts[y] || 0) + 1;
	});

	value = Object.values(counts);
	max = Math.max(...value);

	find = Object.keys(counts).find((key) => counts[key] === max);
	console.log(find);
};

findRepeatName(name);
