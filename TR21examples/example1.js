var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var brand = 'Chevrolet';
var message = "Today it's a happy day!\n    I just bought a new " + brand + " car";
console.log(message);
/************65**********/
var age = 7;
var height = 5.6;
/************66**********/
var brands = ['Chevrolet', 'Ford', 'General Motors'];
var childrenAges = [8, 5, 12, 3, 1];
var Brands;
(function (Brands) {
    Brands[Brands["Chevrolet"] = 0] = "Chevrolet";
    Brands[Brands["Cadillac"] = 1] = "Cadillac";
    Brands[Brands["Ford"] = 2] = "Ford";
    Brands[Brands["Buick"] = 3] = "Buick";
    Brands[Brands["Chrysler"] = 4] = "Chrysler";
    Brands[Brands["Dodge"] = 5] = "Dodge";
})(Brands || (Brands = {}));
var myCar = Brands.Cadillac;
console.log(Brands);
var BrandsReduced;
(function (BrandsReduced) {
    BrandsReduced[BrandsReduced["Tesla"] = 1] = "Tesla";
    BrandsReduced[BrandsReduced["GMC"] = 2] = "GMC";
    BrandsReduced[BrandsReduced["Jeep"] = 3] = "Jeep";
})(BrandsReduced || (BrandsReduced = {}));
var myTruck = BrandsReduced.GMC;
/************68**********/
function sayHello(name) {
    return 'Hello, ' + name;
}
/************69***********/
function sayHi(input) {
    return 'Hi ' + input;
}
/************70***********/
function greetPeople(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + ', ' + names.join(' and ') + '!';
}
//alert(greetPeople('Hello', 'John', 'Ann', 'Fred'));
/************72***********/
var double = function (х) { return х * 2; };
var double2 = function (х, y) { return х * y; };
/************73***********/
var Car = (function () {
    function Car(isHybrid, color, make) {
        if (color === void 0) { color = 'red'; }
        this.isHybrid = isHybrid;
        this.distanceRun = 0;
        this.color = color;
    }
    Car.prototype.getGasConsumption = function () {
        return this.isHybrid ? 'Very low' : 'Too high!';
    };
    Car.prototype.drive = function (distance) {
        this.distanceRun += distance;
    };
    Car.honk = function () {
        return 'H000NK!';
    };
    Object.defineProperty(Car.prototype, "distance", {
        get: function () {
            return this.distanceRun;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
})();
var myCar = new Car(false);
console.log(myCar.color); // 'red'
// Открытый метод доступа вернет distanceRun:
console.log(myCar.distance); // 0
myCar.drive(15);
console.log(myCar.distance); // 15 (0 + 15)
myCar.drive(21);
console.log(myCar.distance); // 36 (15 + 21)
// Каков выхлоп автомобиля этого типа?
myCar.getGasConsumption(); // 'Too high!'
console.log(Car.honk()); // 'H000NK!' создавать экземпляр объекта не нужно
var Car2 = (function () {
    function Car2() {
    }
    return Car2;
})();
var ErrorHandler = (function () {
    function ErrorHandler(settings) {
        this.logAllExceptions = settings.logAllExceptions;
    }
    ErrorHandler.prototype.logException = function (message, id) {
        this.exceptions.push({ message: message, id: id });
    };
    return ErrorHandler;
})();
var Sedan = (function (_super) {
    __extends(Sedan, _super);
    function Sedan(make, model) {
        _super.call(this, make);
        this.model = model;
    }
    return Sedan;
})(Car);
/***********81***********/
function Greeter(target) {
    target.prototype.greet = function () {
        console.log('Hello I am decorator!');
    };
}
var Greeting = (function () {
    function Greeting() {
    }
    Greeting = __decorate([
        Greeter
    ], Greeting);
    return Greeting;
})();
var myGreeting = new Greeting();
myGreeting.greet(); // в консоль будет выведено 'Hello!'
/***********82***********/
function Greeter2(greeting) {
    return function (target) {
        target.prototype.greet = function () {
            console.log(greeting);
        };
    };
}
var Greeting2 = (function () {
    function Greeting2() {
        // Здесь находится реализация...
    }
    Greeting2 = __decorate([
        Greeter2('Howdy!')
    ], Greeting2);
    return Greeting2;
})();
var myGreeting2 = new Greeting2();
myGreeting2.greet(); // в консоль будет выведено 'Howdy!'
/***********83***********/
function LogChanges(target, key) {
    var propertyValue = this[key];
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: function () {
                return propertyValue;
            },
            set: function (newValue) {
                propertyValue = newValue;
                console.log(key + " is now " + propertyValue);
            }
        });
    }
}
var Fruit = (function () {
    function Fruit() {
    }
    __decorate([
        LogChanges
    ], Fruit.prototype, "name");
    return Fruit;
})();
function LogChanges2(callbackObject) {
    return function (target, key) {
        var propertyValue = this[key];
        if (delete this[key]) {
            Object.defineProperty(target, key, {
                get: function () {
                    return propertyValue;
                },
                set: function (newValue) {
                    propertyValue = newValue;
                    callbackObject.onchange.call(this, propertyValue);
                }
            });
        }
    };
}
var Fruit = (function () {
    function Fruit() {
    }
    __decorate([
        LogChanges2({
            onchange: function (newValue) {
                console.log("The fruit is " + newValue + " now");
            }
        })
    ], Fruit.prototype, "name");
    return Fruit;
})();
var fruit = new Fruit();
fruit.name = 'banana'; // консоль: 'The fruit is banana now'
fruit.name = 'plantain'; // консоль: 'The fruit is plantain now'
/***********84***********/
//function LogOutput(target: Function, key: string, descriptor: any) {
//    var originalMethod = descriptor.value;
//    var newMethod = function(...args: any[]): any {
//        var result: any = originalMethod.apply(this, args);
//        if (!this.loggedOutput) {
//            this.loggedOutput = new Array<any>();
//        }
//        this.loggedOutput.push({
//            method: key,
//            parameters: args,
//            output: result,
//            timestamp: new Date()
//        });
//        return result;
//    };
//
//    descriptor.value = newMethod;
//}
//
//
//class Calculator {
//    @LogOutput
//    double(num: number): number {
//        return num * 2;
//    }
//}
//
//var calc = new Calculator();
//calc.double(11);
//console.log(calc.loggedOutput); // Check [Object] array in console
function Log(target, key, parameterlndex) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log("\n    The parameter in position " + parameterlndex + " at\n    " + functionLogged + " has been decorated");
}
var Greeter = (function () {
    function Greeter(phrase) {
        this.greeting = phrase;
    }
    Greeter = __decorate([
        __param(0, Log)
    ], Greeter);
    return Greeter;
})();
/***********88***********/
var Greetings;
(function (Greetings) {
    var Greeting = (function () {
        function Greeting(name) {
            this.name = name;
            console.log("Hello " + name);
        }
        return Greeting;
    })();
    Greetings.Greeting = Greeting;
    var XmasGreeting = (function () {
        function XmasGreeting(name) {
            this.name = name;
            console.log("Merry Xmas " + name);
        }
        return XmasGreeting;
    })();
    Greetings.XmasGreeting = XmasGreeting;
})(Greetings || (Greetings = {}));
/***********89***********/
//import greetings = require('Greeting3');
//var XmasGreetings = greetings.XmasGreetings();
//var XmasGreetings = new XmasGreetings('Pete');
// выведет в консоль: 'Merry Xmas Pete'
//# sourceMappingURL=example1.js.map