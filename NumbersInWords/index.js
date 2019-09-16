const map = {
	1: 'one',
	2: 'two',
	3: 'three',
	4: 'four',
	5: 'five',
	6: 'six',
	7: 'seven',
	8: 'eight',
	9: 'nine',
	11: 'eleven',
	12: 'twelve',
	13: 'thirteen',
	14: 'fourteen',
	15: 'fifteen',
	16: 'sixteen',
	17: 'seventeen',
	18: 'eighteen',
	19: 'nineteen',
};

const tens = [
	'zero',
	'ten',
	'twenty',
	'thirty',
	'forty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety',
];

const isMultiple = (number, multipleOf) => !(number % multipleOf);
const whichMultiple = (number, multipleOf) => Math.floor(number / multipleOf);

const numbersLessThan100 = number => {
	if (isMultiple(number, 10)) {
		return tens[number / 10];
	}

	if (number < 20) {
		return map[number];
	}

	return `${tens[whichMultiple(number, 10)]} ${map[number % 10]}`;
};

module.exports = function(number) {
	if (number === 1000) {
		return 'one thousand';
	}

	if (number === 1100) {
		return 'one thousand and one hundred';
	}

	if (number > 1000) {
		let result = map[whichMultiple(number, 1000)] + ' thousand';
		if (!isMultiple(number, 1000)) {
			result += ` and ${numbersLessThan100(number % 1000)}`;
		}
		return result;
	}
	if (number >= 100) {
		let result = map[whichMultiple(number, 100)] + ' hundred';
		if (!isMultiple(number, 100)) {
			result += ` and ${numbersLessThan100(number % 100)}`;
		}
		return result;
	}
	return numbersLessThan100(number);
};
