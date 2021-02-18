//캡슐화
{    
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
    
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level - 변하지 않는 정적인요소 (매번 새로만들지 않음)
        private coffeeBeans: number = 0; // instance (object) level - 인스턴스가 생성될때마다 할당됨

        //생성자는 클래스가 처음생성될때 실행된다.
        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        /*
        static을 붙여주면 객체를 생성하지않아도 접근이 가능하다
        하지만 정적인 요소이기 때문에 수정은 불가능
        */
        static makeMachine(coffeeBeans: number) { 
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans;
        }

        makeCoffe(shots: number): CoffeeCup {
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffe beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false,
            };
        }
    }
    
    const maker = CoffeeMaker.makeMachine(32);
    console.log(maker);

    class User {
        private firstName: string;
        private lastName: string;        
        private internalAge = 4;
        
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        set age(num: number) {
            this.internalAge=num;
        }
        constructor(firstName: string, lastName:string) {
            this.firstName = firstName;
            this.lastName = lastName;            
        }        
    }

    const user = new User('hello', 'world');
    console.log(user.fullName);
    
}