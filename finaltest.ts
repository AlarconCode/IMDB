// Use the console to input data

import { Professional } from "./Professional"
import { Imdb } from "./Imdb"

let newProfessional = new Professional('', 0, 0, false, '', 0, '')

const input = require('readline-sync')

newProfessional.name = input.question('Enter name: ')
newProfessional.age = input.question('Enter age: ')
newProfessional.weight = input.question('Enter weight: ')
newProfessional.isRetired = input.question('She/He is retired?: ')
newProfessional.oscarsNumber = input.question('How many Oscars win?: ')
newProfessional.profession = input.question('What is your profession?: ')
newProfessional.nationality = input.question('What is your nationality: ')

let imdb = new Imdb([])
let imdb2:Imdb = imdb.readJSONtoImdb('imdbBBDD.json');
imdb.movies = imdb2.movies
imdb.movies[0].actors.push(newProfessional)

imdb.writeJSONToFile('./imdbBBDD.json')

console.log(imdb);






