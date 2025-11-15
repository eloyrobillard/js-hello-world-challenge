const one = !![];
const two = one + one;
const three = two + one;
const six = three + three;
const eight = six + two;
const _12 = two * six;
const _32 = two ** (six - one);
const _44 = _12 + _32;
const _64 = two ** six;
const _102 = _32 + _64 + six;
const _108 = _102 + six;

const c = String.fromCharCode(_102 - three);
const o = String.fromCharCode(_108 + three);
const n = String.fromCharCode(_102 + eight);
const s = String.fromCharCode(_108 + six + one);
const l = String.fromCharCode(_108);
const e = String.fromCharCode(_102 - one);
const dot = String.fromCharCode(_44 + two);
const g = String.fromCharCode(_102 + one);
const lparen = String.fromCharCode(_32 + eight);
const quote = String.fromCharCode(_32 + two);
const H = String.fromCharCode(_64 + eight);
const comma = String.fromCharCode(_44);
const space = String.fromCharCode(_32);
const W = String.fromCharCode(_64 + two * _12 - one);
const r = String.fromCharCode(_108 + three * two);
const d = String.fromCharCode(_102 - two);
const exclam = String.fromCharCode(_32 + one);
const rparen = String.fromCharCode(_32 + eight + one);

Function(
	c +
		o +
		n +
		s +
		o +
		l +
		e +
		dot +
		l +
		o +
		g +
		lparen +
		quote +
		H +
		e +
		l +
		l +
		o +
		comma +
		space +
		W +
		o +
		r +
		l +
		d +
		exclam +
		quote +
		rparen,
)();
