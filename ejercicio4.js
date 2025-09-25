// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18.

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adultos = ages.filter(edad => edad >= 18);
console.log(adultos);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const agesDos = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages.filter(number => number % 2 === 0);
console.log(evenAges);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const jugadoresLol = streamers.filter(streamer =>{
    if (streamer.gameMorePlayed === 'League of Legends') {
        return streamer.name;
    }else{
        return streamers.name;
    }
}
);

console.log(jugadoresLol);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos usar la funcion .includes() para la comprobación.

const streamersDos = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersConU = streamersDos.filter(streamer => streamer.name.includes('u'));
console.log(streamersConU);


