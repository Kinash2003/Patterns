"use strict";
var bmw = {
    color: 'blue',
    plateNumber: 1234,
    seatCapacity: 5,
    Fuel_consumption: 6,
};
var audi = {};
console.log(audi.color = "blue");
audi.plateNumber = 1234;
audi.seatCapacity = 5;
audi.Fuel_consumption = 6;
console.log(audi);
var User = /** @class */ (function () {
    function User(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.getFullName = function (surname) {
        return this.name + " " + surname;
    };
    return User;
}());
var julia = new User(9912462945624, "Julia", 24);
console.log(julia);
console.log(julia.getFullName("Shevchenko"));
