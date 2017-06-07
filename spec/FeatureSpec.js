describe('Feature test', function() {
    var thermostat;
    
    beforeEach(function() {
        thermostat = new Thermostat();
        
    })
    
    
    describe('Thermostat ', function() {
    
        it('starts at 20C', function() {
            expect(thermostat.temperature()).toEqual(20);
        });
    });
    
    
});