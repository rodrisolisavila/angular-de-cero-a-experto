export interface Passenger {
    name: string;
    children?: string[];
 }
 
 const passenger1: Passenger = {
    name: 'Ruri', 
 }
 
 
 const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia','Elizabeth'],
 }

//  const printChildren = (passenger: Passenger) => {
//     // Optional chainigin = children?.length
//     const { name } = passenger;
//     const howManyChildren = passenger.children?.length || 0;

//     console.log( `${ name } Tiene: ${ howManyChildren } pasajeros` );
//  }

const returnChildrenNumber = (passenger: Passenger) => {
    // Optional chainigin = ?
    // ! es para indicar que nunca se recibiar un valor null
    const { name } = passenger;
    const howManyChildren = passenger.children?.length || 0;

    console.log( `${ name } Tiene: ${ howManyChildren } pasajeros` );
 }

 returnChildrenNumber( passenger1 );