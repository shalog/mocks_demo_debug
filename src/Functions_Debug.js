var MyType = function() {};

MyType.prototype.prototype_a = function(x) {
	console.log("REAL prototype_a");
	return x*2;
}

MyType.prototype.prototype_b = function(x) {
//	do something utterly useless for our purposes
	console.log("REAL Prototype_b (incoming parameter :", x,")");
}

MyType.prototype.prototype_c = function(x) {
	protoC = x;
	console.log("REAL Prototype_c (passing parameter :", protoC,")");
	this.prototype_b(protoC);
	this.prototype_b(protoC);
	return 1;
}

MyType.prototype.prototype_d = function(y) {
	console.log("REAL Prototype_d (incoming parameter :", y,")");
	var z =this.prototype_c(y);
	return this.prototype_a(y-z) + z;
}

module.exports=MyType