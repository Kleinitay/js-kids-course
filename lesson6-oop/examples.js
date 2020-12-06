let person = {
    height: 173,
    weight: 72,
    run: function (speed) { console.log(`I am running at ${speed} km/s`) },
    eat: function () { console.log('yum yum') }
}

class Person {
    constructor(height, weight, soundWhenEating) {
        this.height = height;
        this.weight = weight;
        this.sound = soundWhenEating;
    }

    run(speed) { console.log(`I am running at ${speed} km/s`) }
    eat() { console.log(this.sound) }
}