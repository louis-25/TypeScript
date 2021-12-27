{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    const BEANS_GRAMM_PER_SHOT:number = 7; //타입추론을 통해 number를 적지안아도 number로 인식해서 생략가능

    let coffeeBeans: number = 0;
    function makeCoffe(shots: number): CoffeeCup {
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffe beans!');
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots: shots,
            hasMilk: false,
        };
    }

    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffe(2);
    console.log(coffee);
}