
var AmbientLightManager = {
    /* 
     * init
     * Initialize the object
     */
    init: function() {

        console.log("AmbientLightManager.init()");

        /* Initialize DOM Objects */
        this.ambient = document.querySelector('.ambient');
        this.lux = document.querySelector('#lux');

        var _self = this;

        /* Ambient Light Events */
        window.addEventListener('devicelight', function(deviceLightEvent) {

            /* Debug */
            console.log(deviceLightEvent);

            /* Ambient light level (lux) to screen */
            _self.printLux(deviceLightEvent.value);

            /* Check ambient light status */
            if (deviceLightEvent.value > 500) { // snow
                _self.setSnow();
            }
            else if (deviceLightEvent.value > 100) { // morning
                _self.setMorning();
            }
            else if (deviceLightEvent.value > 10) { // evening
                _self.setEvening();
            }
            else { // night
                _self.setNight();
            }

        });
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
     * Show a well-lighted ambient
     */
    setSnow: function() {
        console.log('AmbientLightManager.setSnow');

        this.ambient.classList.remove('night');
        this.ambient.classList.remove('evening');
        this.ambient.classList.remove('morning');
        this.ambient.classList.add('snow');
    },
    /*
     * setMorning
     * Show morning lights
     */
    setMorning: function() {
        console.log('AmbientLightManager.setMorning');

        this.ambient.classList.remove('night');
        this.ambient.classList.remove('evening');
        this.ambient.classList.remove('snow');
        this.ambient.classList.add('morning');
    },
    /*
     * setEvening
     * Show evening lights
     */
    setEvening: function() {
        console.log('AmbientLightManager.setevening');

        this.ambient.classList.remove('night');
        this.ambient.classList.remove('morning');
        this.ambient.classList.remove('snow');
        this.ambient.classList.add('evening');
    },
    /*
     * setEvening
     * Show night lights
     */
    setNight: function() {
        console.log('AmbientLightManager.setNight');

        this.ambient.classList.remove('evening');
        this.ambient.classList.remove('morning');
        this.ambient.classList.remove('snow');
        this.ambient.classList.add('night');
    }
};
