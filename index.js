const a = parseFloat(prompt ("Enter A"));
const b = parseFloat(prompt ("Enter B"));
const c = parseFloat(prompt ("Enter C"));


function solveQuadrEq(a, b, c) {
let disckr =((b*b)-4*a*c);
if (disckr <0) {
	return ("no solution");
	}
const x1 = (-b+ Math.sqrt(disckr))/(2*a);
const x2 = (-b- Math.sqrt(disckr))/(2*a);
if (disckr==0) {return x1;} else {return ("x1="+x1+"x2"+x2);}
}
alert (solveQuadrEq(a,b,c));
