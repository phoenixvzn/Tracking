describe("Tracker", function() {
	it("Login successfully done",function(){
		expect(isLoginSuccess()).toEqual(true);
	});
	it("Login successfully done",function(){
		expect(isOneTimepasswordVerified()).toEqual(true);
	});
	it("Can view Technician's location",function(){
		expect(isTrackTechinician()).toEqual(true);
	});
	it("Can view your car's location",function(){
		expect(isTrackCar()).toEqual(true);
	});
	it("Can view your son's location",function(){
		expect(isTrackCar()).toEqual(true);
	});
});