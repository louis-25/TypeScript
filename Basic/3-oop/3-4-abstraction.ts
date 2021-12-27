//추상화
{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };
        
    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    //인터페이스의 내용들은 반드시 구현되어야한다
    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
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
            return new CoffeeMachine(coffeeBeans);
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans = beans;
        }

        clean() {
            console.log('cleaning the machine...');
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
        
        private extract(shots: number):CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);            
        }
    }
    
    class AmateurUser { // 첫번째 인터페이스(아마추어용)
        constructor(private machine: CoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista { // 두번째 인터페이스(프로용)
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(22);
            this.machine.clean();
        }
    }

    // 클래스 내부의 public함수에 한하여 접근가능
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(32);
    maker.makeCoffee(2);    
        
    //인터페이스에 정의된 함수들만 접근가능
    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker2.fillCoffeeBeans(32);
    maker2.makeCoffee(2);
    maker2.clean();
    
    const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);    
    const amateur = new AmateurUser(maker3);
    const pro = new ProBarista(maker3);
    amateur.makeCoffee();
    pro.makeCoffee();
}