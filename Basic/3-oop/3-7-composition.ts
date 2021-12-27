//컴포지션 - 상속문제 해결
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
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAMM_PER_SHOT:number = 7; // class level - 변하지 않는 정적인요소 (매번 새로만들지 않음)
        private coffeeBeans: number = 0; // instance (object) level - 인스턴스가 생성될때마다 할당됨

        //생성자는 클래스가 처음생성될때 실행된다.
        constructor(
            coffeeBeans: number,
            private milk: MilkFrother,
            private sugar: SugarProvider
            ) { //protected는 생성하는 자식클래스에서 접근이 가능하다            
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
        
        private extract(shots: number):CoffeeCup {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
                hasSugar: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);            
        }
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }
    
    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class FancyMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class ColdMilkSteamer implements MilkFrother{
        private steamMilk(): void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            };
        }
    }
    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup):  CoffeeCup {
            return cup;
        }
    }
    // 설탕 제조기
    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from candy');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }
    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('Getting some sugar from jar');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }
    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    // Sugar
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();

    // 
    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const coldlatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}