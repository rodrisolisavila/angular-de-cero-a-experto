//Destructuración de objetos

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

console.log('song:', audioPlayer.song);
console.log('duration:', audioPlayer.songDuration);
console.log('author:', audioPlayer.details.author);


const song = 'New Song';

const {
    song: AnotherSong,
    songDuration: duration,
    details
} = audioPlayer;

console.log(AnotherSong, duration);

const { author, year } = details;
console.log(author, year);

//Destructuración de arreglos

//const dbz: string[] = ['Goku', 'Veegueta', 'Trunks'];
//const trunks: string = dbz[2];

const [p1, p2, trunks = 'not found'] = ['Goku', 'Veegueta'];

console.log(`Personaje 3: ${ trunks }`);

export { }