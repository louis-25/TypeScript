{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT:number = 7; // class level - 변하지 않는 정적인요소 (매번 새로만들지 않음)
        coffeeBeans: number = 0; // instance (object) level - 인스턴스가 생성될때마다 할당됨

        //생성자는 클래스가 처음생성될때 실행된다.
        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        /*
        static을 붙여주면 객체를 생성하지않아도 접근이 가능하다
        하지만 정적인 요소이기 때문에 수정은 불가능
        */
        static makeMachine(coffeeBeans: number) { 
            return new CoffeeMaker(coffeeBeans);
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
    
    const maker = new CoffeeMaker(32);
    console.log(maker);
    const maker2 = new CoffeeMaker(12);
    console.log(maker2);
    //makeMachine은 정적인 요소로 객체생성 하지않고 바로 사용가능
    const maker3 = CoffeeMaker.makeMachine(3);
    console.log(maker3);
}