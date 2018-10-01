"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.incSpd = function () {
        this.spd++;
    };
    Car.prototype.dscSpd = function () {
        this.spd--;
    };
    Car.prototype.prchDt = function () {
        return new Date();
    };
    return Car;
}());
exports.Car = Car;
var cr = new Car(); // cr is ORV(Object Reference Variable)
cr.incSpd();
