// Use the console to input data

import { Professional } from "./Professional"
import { Imdb } from "./Imdb"
const fs = require('fs')

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
let movies:Imdb = imdb.readJSONtoImdb('imdbBBDD.json');
imdb.movies = movies.movies
imdb.movies[0].actors.push(newProfessional)

imdb.writeJSONToFile('./imdbBBDD.json')

console.log(imdb);






