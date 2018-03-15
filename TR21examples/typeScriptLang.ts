/*Обобщение*/


function identity1(arg: number): number {
    return arg;
}

function identity2<t>(arg: T): T {
    return arg;
}
</t>;

let output = identity2<string>("myString");  // у output будет тип string

function loggingIdentity<t>(arg: Array<t>): Array<t> {
    console.log(arg.length);  // У массива есть .length, поэтому ошибки больше нет
    return arg;
}
</t></t></t>;

