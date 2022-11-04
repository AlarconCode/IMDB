// class IMDB

import { Movie } from "./Movie";

export class Imdb {

    public movies:Movie[]

    constructor(movies:Movie[]) {

        this.movies = movies

    }

    // Methods

    writeJSONToFile(path:string):void {
        const fs = require("fs");
        let strJSON = JSON.stringify(this)
        fs.writeFileSync(path, strJSON)
        
    }
    
    readJSONtoImdb(file:string):Imdb {
        file = './'+file
        const fs = require("fs");
        let data = fs.readFileSync(file)
        return JSON.parse(data)
    }

}