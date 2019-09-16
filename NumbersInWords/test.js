const toWords = require('./index.js');

test('1 should be one', () => {
	expect(toWords(1)).toEqual('one');
});

test('2 should be two', () => {
	expect(toWords(2)).toEqual('two');
});

test('3 should be three', () => {
	expect(toWords(3)).toEqual('three');
});

test('4 should be four', () => {
	expect(toWords(4)).toEqual('four');
});

test('11 should be eleven', () => {
	expect(toWords(11)).toEqual('eleven');
});

test('12 should be twelve', () => {
	expect(toWords(12)).toEqual('twelve');
});

test('20 should be twenty', () => {
	expect(toWords(20)).toEqual('twenty');
});

test('21 should be twenty one', () => {
	expect(toWords(21)).toEqual('twenty one');
});

test('37 should be thirty seven', () => {
	expect(toWords(37)).toEqual('thirty seven');
});

test('47 should be forty seven', () => {
	expect(toWords(47)).toEqual('forty seven');
});

test('100 should be one hundred', () => {
	expect(toWords(100)).toEqual('one hundred');
});

test('101 should be one hundred and one', () => {
	expect(toWords(101)).toEqual('one hundred and one');
});

test('201 should be two hundred and one', () => {
	expect(toWords(201)).toEqual('two hundred and one');
});

test('200 should be two hundred', () => {
	expect(toWords(200)).toEqual('two hundred');
});

test('742 should be seven hundred and forty two', () => {
	expect(toWords(742)).toEqual('seven hundred and forty two');
});

test('1000 should be one thousand', () => {
	expect(toWords(1000)).toEqual('one thousand');
});

test('1001 should be one thousand and one', () => {
	expect(toWords(1001)).toEqual('one thousand and one');
});

test('1100 should be one thousand and one hundred', () => {
	expect(toWords(1100)).toEqual('one thousand and one hundred');
});
