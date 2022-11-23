'use strict';
// ========================= function constructor =======================

const Cars = function(make, speed = 0){
    this.make = make;
    this.speed = speed
}

Cars.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} going on ${this.speed} km/h speed`)
}
Cars.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} going on ${this.speed} km/h speed`)
}
const car1 = new Cars("BMW", 120);
const car2 = new Cars("Mercedes", 95);
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();

console.log("========================= class =======================")

class Car {
    constructor(make, speed){
        this.make = make;
        this.speed = speed
    }

    accelerate = function(){
        this.speed += 10;
        console.log(`${this.make} going on ${this.speed} km/h speed`)
    }

    brake = function(){
        this.speed -= 5;
        console.log(`${this.make} going on ${this.speed} km/h speed`)
    }
}

const bmw = new Cars("BMW", 120);
const mer = new Cars("Mercedes", 95);
mer.accelerate();
mer.accelerate();
mer.brake();
mer.accelerate();
mer.accelerate();
mer.accelerate();
mer.accelerate();
mer.brake();
mer.accelerate();