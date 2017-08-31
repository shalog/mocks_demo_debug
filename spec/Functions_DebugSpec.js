var MyType = require("../src/Functions_Debug.js");

describe("Functions", function() {
	it("should test function c using a dummy for b", 
		function() {
			console.log("\nMock Test 1");

			//dummy setup
			var f = new MyType();
			f.prototype_b = function() {
				console.log("FAKE prototype_b");
				// actually do nothing here.  
				// C will call B, and b will do nothing.  
				// Success...allows c to run independently.
			};
			//actual test
			expect(f.prototype_c(1)).toBe(1);
		}
	);

	it("should test function c using a dummy for b with Jasmine spyOn", 
		function() {
			console.log("\nMock Test 2");

			//setup
			var f = new MyType();
			spyOn(f,"prototype_b").and.stub();
			//actual test
			expect(f.prototype_c(2)).toBe(1);
		}
	);
	
	it("should test function d using fakes for a + c", 
		function() {
			console.log("\nMock Test 3");

			var f = new MyType();
			//fake setup #1
			f.prototype_a = function() {
				console.log("FAKE 1st prototype_a");
				// return 3, as a fake
				// d will call a, and a will return 3.  
				// Success...allows d to run without a.
				return 3;
			};

			//fake setup #2
			f.prototype_c = function() {
				console.log("FAKE 1st prototype_c");
				// return 3, because that's what fakes do.  Return a fixed value  
				// Success...allows d to run independently of c.
				return 3;
			};
			//actual test
			expect(f.prototype_d(3)).toBe(6);
		}
	);

	it("should test function d using fakes for a + c with Jasmine spyOn", 
		function() {
			console.log("\nMock Test 4");

			var f = new MyType();
			//fakes setup 
			spyOn(f, "prototype_a").and.returnValue(5);
			spyOn(f, "prototype_c").and.returnValue(5);
			
			//actual test
			expect(f.prototype_d(4)).toBe(10);
		}
	);

	it("should test function d using a fake for a, and a stub for c", 
		function() {
			console.log("\nMock Test 5");

			var f = new MyType();
			//fake setup #1
			f.prototype_a = function() {
				console.log("FAKE 2nd prototype_a");
				// return whatever the tester decides, from this stub function.   
				// note, this is very flexible, and won't usually be defined here...rather outside the 
				// individual tes			// d will call a, and a will return whatever i specified.  
				// Success...allows d to run without a.
				return temp;
			};
			
			var temp;
			//fake setup #2
			f.prototype_c = function() {
				console.log("FAKE 2nd prototype_b");
				// return 3, because that's what fakes do.  Return a fixed value  
				// Success...allows d to run independently of c.
				return 3;
			};
			
			temp=2;
			expect(f.prototype_d(5)).toBe(5);
		}
	);

	it("should test function d using fakes for a + stub for c with Jasmine spyOn", 
		function() {
			console.log("\nMock Test 6");

			var f = new MyType();
			//fakes setup 
			spyOn(f, "prototype_c").and.returnValue(3);
			spyOn(f, "prototype_a").and.callFake(function() { return temp;});
			
			temp=4;
			//actual test
			expect(f.prototype_d(6)).toBe(7);
		}
	);
	
	it ("should test function c using mocks for b", 
		function() {
			console.log("\nMock Test 7");

			//mocks setup
			var f = new MyType();

			var hitCounter = 0;
			f.prototype_b = function() {
				hitCounter ++;
			}
			
			//execution
			f.prototype_c(7);
			//actual test
			expect(hitCounter).toBe(2);
		}
	);
	it ("should test function c using mocks for b using Jasmine spyOn capabilities", 
		function() {
			console.log("\nMock Test 8");

			var f = new MyType();
			//mocks setup
			spyOn(f,"prototype_b").and.callFake(function() { console.log("spyOn Fake B");});
			//execution
			f.prototype_c(8);
			//actual test
//			var check = expect(f.prototype_b).toHaveBeenCalled();
//			console.log("Test 8: was prototype_b called? :", check);
			expect(f.prototype_b.calls.count()).toEqual(2);
			console.log("Test 8: prototype_b called: ", f.prototype_b.calls.count(), "times");
		}
	);	
	
	it("should test function d using stub for c, spy for a, using Jasmine spyOn, because the manual test starts to suck here",
		function() {
			console.log("\nMock Test 9");

			var f = new MyType();
			//mocks setup
			spyOn(f, "prototype_a").and.callThrough();
			spyOn(f, "prototype_b").and.callThrough();
			spyOn(f, "prototype_c").and.callThrough();
			//test
			expect(f.prototype_d(9)).toBe(17);	
			//spy testing
			expect(f.prototype_a.calls.count()).toEqual(1);
			console.log("Test 9: prototype_a called: ", f.prototype_a.calls.count(), "times");
			expect(f.prototype_b.calls.count()).toEqual(2);
			console.log("Test 9: prototype_b called: ", f.prototype_b.calls.count(), "times");
			expect(f.prototype_c.calls.count()).toEqual(1);
			console.log("Test 9: prototype_c called: ", f.prototype_c.calls.count(), "times");
		}
	);		
});