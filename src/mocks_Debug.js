var MyType = require("./Functions_Debug.js");

// Call prototype_a
var f = new MyType();
parmA = 3;
//console.log("\nCalling prototype_a without a parameter");
//Proto_A = f.prototype_a();
//console.log("prototype_a returned: ", Proto_A);
//console.log("prototype_a returned: function text");
console.log("\nCalling prototype_a with parameter:", parmA);
Proto_A = f.prototype_a(parmA);
console.log("prototype_a returned: ", Proto_A);

// Call prototype_b
parmB = 5;
//console.log("\nCalling prototype_b without a parameter");
//Proto_B = f.prototype_b;
//console.log("prototype_b returned:\n", Proto_B);
//console.log("prototype_b returned: function text");
console.log("\nCalling prototype_b with parameter:", parmB);
Proto_B = f.prototype_b(parmB);
console.log("prototype_b returned: ", Proto_B);

// Call prototype_c
parmC = 9;
//console.log("\nCalling prototype_c without a parameter");
//Proto_C = f.prototype_c;
//console.log("prototype_c returned:\n", Proto_C);
//console.log("prototype_c returned: function text");
console.log("\nCalling prototype_c with parameter:", parmC);
Proto_C = f.prototype_c(parmC);
console.log("prototype_c returned: ", Proto_C);

// Call prototype_d
parmD = 7;
//console.log("\nCalling prototype_d without a parameter");
//Proto_D = f.prototype_d;
//console.log("prototype_d returned:\n", Proto_D);
//console.log("prototype_d returned: function text");
console.log("\nCalling prototype_d with parameter:", parmD);
Proto_D = f.prototype_d(parmD);
console.log("prototype_d returned: ", Proto_D);