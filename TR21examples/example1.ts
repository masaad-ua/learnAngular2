var brand: string = 'Chevrolet';
var message: string = `Today it's a happy day!
    I just bought a new ${brand} car`;

console.log(message);

/************65**********/
var age: number = 7;
var height: number = 5.6;


/************66**********/
var brands: string[] = ['Chevrolet', 'Ford', 'General Motors'];
var childrenAges: number[] = [8, 5, 12, 3, 1];

enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge }
var myCar: Brands = Brands.Cadillac;

console.log(Brands);


enum BrandsReduced { Tesla = 1, GMC, Jeep }
var myTruck: BrandsReduced = BrandsReduced.GMC;


/************68**********/
function sayHello(name: string): string{
    return 'Hello, ' + name;
}

/************69***********/

function sayHi(input: string): string {
    return 'Hi ' + input;
}
/************70***********/
function greetPeople(greeting: string, ...names: string[]): string {
    return greeting + ', ' + names.join(' and ') + '!';
}
//alert(greetPeople('Hello', 'John', 'Ann', 'Fred'));

/************72***********/

var double = х => х * 2;
var double2 = (х, y) => х * y;


/************73***********/
class Car {
    private distanceRun: number = 0;
    color: string;

    constructor(public isHybrid: boolean, color: string = 'red', make:string) {
        this.color = color;
    }

    getGasConsumption(): string {
        return this.isHybrid ? 'Very low' : 'Too high!';
    }
    drive(distance: number): void {
        this.distanceRun += distance;
    }
    static honk(): string {
        return 'H000NK!';
    }
    get distance(): number {
        return this.distanceRun;
    }
}
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
console.log(Car.honk());// 'H000NK!' создавать экземпляр объекта не нужно

/************77***********/
//По своей сути интерфейс - это макет, определяющий конкретную
//схему полей и любых типов (классов или функций), реализующих
//этот интерфейс.

interface Vehicle {
    make: string;
}

class Car2 implements Vehicle {
// Компилятор выдаст предупреждение, если не определить свойство
    make: string;
}


/************78***********/
interface IException {
    message: string;
    id?: number;
}

interface IExceptionArrayltem {
    [index: number]: IException;
}

interface IErrorHandler {
    exceptions: IExceptionArrayltem[];
    logException(message: string, id?: number): void;
}

interface IExceptionHandlerSettings {
    logAllExceptions: boolean;
}

class ErrorHandler implements IErrorHandler {
    exceptions: IExceptionArrayltem[];
    logAllExceptions: boolean;
    constructor(settings: IExceptionHandlerSettings) {
        this.logAllExceptions = settings.logAllExceptions;
    }
    logException(message: string, id?: number): void {
        this.exceptions.push({ message, id });
    }
}

class Sedan extends Car {
    model: string;
    constructor(make: string, model: string) {
        super(make);
        this.model = model;
    }
}

/***********81***********/
function Greeter(target: Function): void {
    target.prototype.greet = function(): void {
        console.log('Hello I am decorator!');
    }
}

@Greeter
class Greeting {
    constructor() {

    }
}
var myGreeting = new Greeting();
myGreeting.greet(); // в консоль будет выведено 'Hello!'

/***********82***********/
function Greeter2(greeting: string) {
    return function(target: Function) {
        target.prototype.greet = function(): void {
            console.log(greeting);
        }
    }
}

@Greeter2('Howdy!')
class Greeting2 {
    constructor() {
// Здесь находится реализация...
    }
}

var myGreeting2 = new Greeting2();
myGreeting2.greet(); // в консоль будет выведено 'Howdy!'

/***********83***********/
function LogChanges(target: Object, key: string) {
    var propertyValue: string = this[key];
    if (delete this[key]) {
        Object.defineProperty(target, key, {
            get: function() {
                return propertyValue;
            },
            set: function(newValue) {
                propertyValue = newValue;
                console.log(`${key} is now ${propertyValue}`);
            }
        });
    }
}
class Fruit {
    @LogChanges
    name: string;
}


function LogChanges2(callbackObject: any): Function {
    return function(target: Object, key: string): void {
        var propertyValue: string = this[key];
        if (delete this[key]) {
            Object.defineProperty (target, key, {
                get: function() {
                    return propertyValue;
                },
                set: function(newValue) {
                    propertyValue = newValue;
                    callbackObject.onchange.call(this, propertyValue);
                }
            });
        }
    }
}

class Fruit {
    @LogChanges2({
        onchange: function(newValue: string): void {
            console.log(`The fruit is ${newValue} now`);
        }
    })
    name: string;
}


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

function Log(target: Function, key: string, parameterlndex: number) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log(`
    The parameter in position ${parameterlndex} at
    ${functionLogged} has been decorated`);
}

class Greeter {
    greeting: string;
    constructor(@Log phrase: string) {
        this.greeting = phrase;
    }
}
/***********88***********/

module Greetings {
    export class Greeting {
        constructor(public name: string) {
            console.log(`Hello ${name}`);
        }
    }
    export class XmasGreeting {
        constructor(public name: string) {
            console.log(`Merry Xmas ${name}`);
        }
    }
}

/***********89***********/


//import greetings = require('Greeting3');
//var XmasGreetings = greetings.XmasGreetings();
//var XmasGreetings = new XmasGreetings('Pete');
// выведет в консоль: 'Merry Xmas Pete'

