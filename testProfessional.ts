// test class Professional

import { Professional } from "./Professional";

let cinemaProfessional = new Professional('Liam Neeson', 70, 85, false, 'Northern Ireland', 1, 'Actor')
let cinemaProfessional2 = new Professional('Thomas Keneally', 87, 79, true, 'Australian', 1, 'Writer' )
let cinemaProfessional3 = new Professional('Steven Spielberg', 75, 70, false, 'American', 4, 'Director')

console.log(cinemaProfessional2.printAll());
