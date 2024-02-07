// ES 5

// function Movies(movieTitle, releaseYear, villian){
//     this.title = movieTitle
//     this.year = releaseYear
//     this.antiprotagonist = villian
// }

// console.log(new Movies);

// Movies.prototype.getAge = function(){
//     const movieAge = new Date().getFullYear() - this.year
//     return movieAge
// }

// Movies.prototype.rate = function(movieRating){
//     this.rating = movieRating
// }

// const spiderman = new Movies('Spiderman: No way Home', 2021, ['Doctor Octopus', 'Green Goblin', 'Electro', 'Sandman', 'The Lizard'])
// const doctorStrange = new Movies('Doctor Strange in the Multiverse of Madness', 2022, 'The Scarlet Witch')

// console.log(spiderman, doctorStrange);

// console.log(spiderman.getAge());
// console.log(doctorStrange.getAge());

// spiderman.rate(10)
// doctorStrange.rate(9.5)
// console.log(spiderman, doctorStrange);

// ES 6

class Movies {
    constructor(movieTitle, releaseYear, villian) {
        this.title = movieTitle;
        this.year = releaseYear;
        this.antiprotagonist = villian;
    }
    getAge() {
        const movieAge = new Date().getFullYear() - this.year;
        return movieAge;
    }
    rate(movieRating) {
        this.rating = movieRating;
    }
}

console.log(new Movies);

const spiderman = new Movies('Spiderman: No way Home', 2021, ['Doctor Octopus', 'Green Goblin', 'Electro', 'Sandman', 'The Lizard'])
const doctorStrange = new Movies('Doctor Strange in the Multiverse of Madness', 2022, 'The Scarlet Witch')

console.log(spiderman, doctorStrange);

console.log(spiderman.getAge());
console.log(doctorStrange.getAge());

spiderman.rate(10)
doctorStrange.rate(9.5)
console.log(spiderman, doctorStrange);