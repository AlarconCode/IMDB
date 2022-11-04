// test class Movie

import { Movie } from "./Movie";
import { Professional } from "./Professional"

let cinemaProfessional = new Professional('Liam Neeson', 70, 85, false, 'Northern Ireland', 1, 'Actor')
let cinemaProfessional4 = new Professional('Ralph Fiennes', 60, 75, false, 'UK', 0, 'Actor' )
let cinemaProfessional2 = new Professional('Thomas Keneally', 87, 79, true, 'Australian', 1, 'Writer' )
let cinemaProfessional3 = new Professional('Steven Spielberg', 75, 70, false, 'American', 4, 'Director')

let schindlersList = new Movie("Schindler's List", 1993, "American", "Historic")

schindlersList.actors.push(cinemaProfessional, cinemaProfessional4)
schindlersList.director = cinemaProfessional3
schindlersList.writer = cinemaProfessional2
schindlersList.isMCU = false
schindlersList.distributor = 'Universal Pictures'
schindlersList.language = 'English'
schindlersList.mainCharacterName = 'Oskar Schindler'
schindlersList.producer = 'Amblin Entertainment'
schindlersList.platform = 'Netflix'

let reservoirDogs = new Movie('Reservoir Dogs', 1992, 'American', 'Crime')

let actor1 = new Professional('Harvey Keitel', 83, 70, true, 'USA', 0, 'Actor')
let actor2 = new Professional('Tim Roth', 61, 75, false, 'UK', 0, 'Actor')
let writer = new Professional('Roger Avary', 55, 70, false, 'Canada', 1, 'writer')
let director = new Professional('Quentin Tarantino', 53, 90, false, 'USA', 2, 'director')

reservoirDogs.actors.push(actor1,actor2)
reservoirDogs.director = director
reservoirDogs.writer = writer
reservoirDogs.isMCU = false
reservoirDogs.distributor = 'Universal Pictures'
reservoirDogs.language = 'English'
reservoirDogs.mainCharacterName = 'Mr. White'
reservoirDogs.producer = 'Lawrence Bender'
reservoirDogs.platform = 'HBO'

// console.log(schindlersList.printAll());
// console.log(schindlersList.actors);
// console.log(reservoirDogs.printAll());
// console.log(reservoirDogs.actors);

export {schindlersList, reservoirDogs}
