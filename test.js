const test = require('ava');
const m = require('.');

test('moo', t => {
	t.is(m('Moo'), '🐄Moo');
	t.is(m('Mooooooooooooooooooooooooooo'), '🐄Mooooooooooooooooooooooooooo');
});
