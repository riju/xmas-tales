
function ChristmasTreeViewController() {

    console.log("ChristmasTreeViewController()");

    /* Initialize DOM Objects */
    this.pinkBauble = document.querySelector('.pink.bauble');
    this.redBauble = document.querySelector('.red.bauble');
    this.blueBauble = document.querySelector('.blue.bauble');
    this.yellowBauble = document.querySelector('.yellow.bauble');
    this.greenBauble = document.querySelector('.green.bauble');

    /* Turn Christmas Tree lights on */
    this.blinkRandomly();
}


ChristmasTreeViewController.prototype = {
    /* 
     * blinkRandomly
     * Make baubles blink randomly     
     */
    blinkRandomly: function() {
        console.log('ChristmasTreeViewController.blinkRandomly');

        var _self = this;

        /* Make the pink bauble blink */
        window.setInterval(function() {
            _self.pinkBauble.classList.add('on');
            window.setTimeout(function() {
                _self.pinkBauble.classList.remove('on');
            }, Math.random() * 8000);
        }, Math.random() * 11000);

        /* Make the red bauble blink */
        window.setInterval(function() {
            _self.redBauble.classList.add('on');
            window.setTimeout(function() {
                _self.redBauble.classList.remove('on');
            }, Math.random() * 8000);
        }, Math.random() * 11000);

        /* Make the blue bauble blink */
        window.setInterval(function() {
            _self.blueBauble.classList.add('on');
            window.setTimeout(function() {
                _self.blueBauble.classList.remove('on');
            }, Math.random() * 8000);
        }, Math.random() * 9000);

        /* Make the yellow bauble blink */
        window.setInterval(function() {
            _self.yellowBauble.classList.add('on');
            window.setTimeout(function() {
                _self.yellowBauble.classList.remove('on');
            }, Math.random() * 7000);
        }, Math.random() * 8000);

        /* Make the green bauble blink */
        window.setInterval(function() {
            _self.greenBauble.classList.add('on');
            window.setTimeout(function() {
                _self.greenBauble.classList.remove('on');
            }, Math.random() * 6000);
        }, Math.random() * 6000);
    }
};
