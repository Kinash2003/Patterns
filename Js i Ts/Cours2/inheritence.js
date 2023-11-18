"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Description = /** @class */ (function () {
    function Description(name, age) {
        this.name = name;
        this.age = age;
        this.Employee = true;
    }
    Description.prototype.getInfo = function () {
        console.log('name', this.name);
        console.log('age', this.age);
    };
    return Description;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.salary = salary;
        return _this;
    }
    Doctor.prototype.teachDevs = function () {
        console.log("".concat(this.name, " works as a doctor."));
    };
    Doctor.prototype.getInfo = function () {
        console.log('name', this.name);
        console.log('age', this.age);
        console.log('salary', this.salary);
    };
    return Doctor;
}(Description));
var doctor = new Doctor('Andriy', 27, 50000);
console.log(doctor.Employee);
console.log(doctor);
doctor.getInfo();
doctor.teachDevs();
