// test class IMDB

import { Imdb } from "./Imdb";
import { Movie } from "./Movie"
import { schindlersList, reservoirDogs } from "./testMovie"

let movies:Movie[] = [schindlersList, reservoirDogs]
let movies_1:Movie[] = []

let myImdb = new Imdb(movies)

myImdb.writeJSONToFile('./imdbBBDD.json')

let myImdb_2 = myImdb.readJSONtoImdb('imdbBBDD.json')
console.log(typeof myImdb_2);
console.log(myImdb_2.movies);


