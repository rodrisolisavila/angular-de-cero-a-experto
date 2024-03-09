function addNumbers(a: number, b:number){
    return a + b;
 }
 const result: number = addNumbers(1, 2);
 console.log({ result });

 const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b}`;
 }
 const result2: string = addNumbersArrow(1, 2);
 console.log({ result2 });

 function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
 }
 const result3: number = multiply(5);
 console.log({ result3 });

 interface Character {
    name: string;
    hp: number;
    showHp: () => void;
 }
 
 const healCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
 }

 const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
       console.log(`Puntos de vida ${ this.hp }`);
    }
 }

 healCharacter(strider, 10);

strider.showHp();

export {}