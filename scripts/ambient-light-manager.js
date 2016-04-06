
var AmbientLightManager = {
    /*
     * init
     * Initialize the object
     */
    init: function() {

        console.log("AmbientLightManager.init()");

        /* Initialize DOM Objects */
        this.ambience = document.querySelector('.ambience');
        this.lux = document.querySelector('#lux');

        var _self = this;

        // Ambient Light Sensor
        var s = new AmbientLightSensor();
        s.start();

        s.onchange = function(event) {
            console.log(event.reading.illuminance);

            _self.printLux(event.reading.illuminance);

            /* Check ambient light status */
            if (event.reading.illuminance > 500) { // snow
                _self.setSnow();
            }
            else if (event.reading.illuminance > 100) { // morning
                _self.setMorning();
            }
            else if (event.reading.illuminance > 10) { // evening
                _self.setEvening();
            }
            else { // night
                _self.setNight();
            }
        };

    },
    /*
     * printLux
     * Print the level of the ambient light in lux
     */
    printLux: function(lux) {
        console.log('AmbientLightManager.printLux ' + lux);
        this.lux.innerHTML = lux;
    },
    /*
     * setSnow
     * Show a well-lighted ambience
     */
    setSnow: function() {
        console.log('AmbientLightManager.setSnow');

        this.ambience.classList.remove('night');
        this.ambience.classList.remove('evening');
        this.ambience.classList.remove('morning');
        this.ambience.classList.add('snow');
    },
    /*
     * setMorning
     * Show morning lights
     */
    setMorning: function() {
        console.log('AmbientLightManager.setMorning');

        this.ambience.classList.remove('night');
        this.ambience.classList.remove('evening');
        this.ambience.classList.remove('snow');
        this.ambience.classList.add('morning');
    },
    /*
     * setEvening
     * Show evening lights
     */
    setEvening: function() {
        console.log('AmbientLightManager.setevening');

        this.ambience.classList.remove('night');
        this.ambience.classList.remove('morning');
        this.ambience.classList.remove('snow');
        this.ambience.classList.add('evening');
    },
    /*
     * setEvening
     * Show night lights
     */
    setNight: function() {
        console.log('AmbientLightManager.setNight');

        this.ambience.classList.remove('evening');
        this.ambience.classList.remove('morning');
        this.ambience.classList.remove('snow');
        this.ambience.classList.add('night');
    }
};
