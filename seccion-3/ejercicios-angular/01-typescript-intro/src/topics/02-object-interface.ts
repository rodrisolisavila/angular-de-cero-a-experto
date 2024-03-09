interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}

// hometown?: string; el signo ? quiere decir que es opcional o
// hometown: string | undefined;

const skills: string[] = ['Bash', 'Cunter', 'Healing'];

const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash','counter'],
}

strider.hometown = 'Rivendel';
console.table(strider);

// const strider = {
//     name: 'strider',
//     hp: '100',
//     skills: ['bash','counter']
// }

export {}