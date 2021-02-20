interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay() {
        console.log(`full time!!`);
    }

    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay() {
        console.log(`part time!!`);
    }

    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 다시 추상적인 타입으로 리턴하면 안된다
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

//K extends keyof T -> K는 T의 요소중 하나의 key이다
function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];    
}

const obj = {
    name: 'dong',
    age: 25,
};

console.log(getValue(obj, 'name')); // dong
console.log(getValue(obj, 'age')); // 25
