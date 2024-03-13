export class Person {
    // Forma 1

    // public name: string;
    // private address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    // Forma 2

    constructor(
        public firstName: string, 
        public lastName: string,
        private address: string = 'No address') {}
}

// export class Hero extends Person {
//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'New York')
//     }
// }
//const ironman = new Hero('Iron Man', 45, 'Tony');


export class Hero {
    //public person:Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person(realName, 'New York');
    }
}

const tony = new Person('Tony','Stark', 'New York')

const ironman = new Hero('Iron Man', 45, 'Tony', tony);

console.log(ironman);