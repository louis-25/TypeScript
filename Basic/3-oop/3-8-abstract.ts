//다형성
{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean; //optional - 값을 넣어도되고 안넣어도됨
        hasSugar?: boolean;
    };
        
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    //인터페이스의 내용들은 반드시 구현되어야한다
    abstract class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level - 변하지 않는 정적인요소 (매번 새로만들지 않음)
        private coffeeBeans: number = 0; // instance (object) level - 인스턴스가 생성될때마다 할당됨

        //생성자는 클래스가 처음생성될때 실행된다.
        constructor(coffeeBeans: number) { //protected는 생성하는 자식클래스에서 접근이 가능하다
            this.coffeeBeans = coffeeBeans;
        }                        

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans;
        }
        
        private grindBeans(shots) {
            console.log(`grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                    throw new Error('Not enough coffe beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        private preheat(): void {
            console.log('heating up...');
        }
        
        //자식클래스마다 다르게 만들어야함
        protected abstract extract(shots: number):CoffeeCup;            
        

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);            
        }
    }
    
    //상속 - inheritance
    class CaffeLatteMachine extends CoffeeMachine {
        /*
            자식 클래스에서 추가로 생성자를 구현하려면 super를 호출해야함
        */
        constructor(beans: number, public readonly serialNumber: string){ //readonly는 처음 값이 설정된 이후로 수정이 불가하다
            super(beans);
        }
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }

        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            };
        }
    }

    class SweetCoffeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {            
            return {
                shots,
                hasSugar: true,
            };
        }
    }
    
    const machines: CoffeeMaker[] = [        
        new CaffeLatteMachine(16, 's2'),
        new SweetCoffeMaker(16),        
        new CaffeLatteMachine(16, 's2'),
        new SweetCoffeMaker(16),        
        new CaffeLatteMachine(16, 's2'),
        new SweetCoffeMaker(16)
    ]

    machines.forEach(machine => {
        console.log('------------------------');
        machine.makeCoffee(1);        
    })
}