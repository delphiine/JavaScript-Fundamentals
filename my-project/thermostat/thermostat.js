class Thermostat {
    constructor () {
        this.temperature = 20;
        this.powerSavingMode = true;
    }

    getTemperature () {
        return this.temperature;
    }

    up () {
        if (this.powerSavingMode === true && this.temperature < 25) {
            this.temperature ++;
        } else if (this.powerSavingMode === false && this.temperature < 32) { 
            this.temperature ++;
        };
    }

    down () {
        this.temperature --;
    }

    setPowerSavingMode () {
        if (this.powerSavingMode === true) {
            this.powerSavingMode = false
        } else {
            this.powerSavingMode = false
        };

        return this.powerSavingMode;
    }

    reset () {
        return this.temperature = 20;
    }

}

module.exports = Thermostat;