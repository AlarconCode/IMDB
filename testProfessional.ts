// test class Professional

import { Professional } from "./Professional";

let cinemaProfessional = new Professional('Will Mellor', 46, 80, false, 'English', 0, 'Actor')
let cinemaProfessional2 = new Professional('Michel Fassbender', 45, 79, false, 'Germany', 0, 'Actor' )
let cinemaProfessional3 = new Professional('Steven Spielberg', 75, 70, false, 'American', 4, 'Director')

console.log(cinemaProfessional2.printAll());
