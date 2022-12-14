// class Movie

import { Professional } from "./Professional"

export class Movie {

    public title:string
    public releaseYear:number
    public actors:Professional[]
    public nationality:string
    public director:Professional
    public writer:Professional
    public language:string
    public platform:string
    public isMCU:boolean
    public mainCharacterName:string
    public producer:string
    public distributor:string
    public genre:string

    constructor(title:string, releaseYear:number, nationality:string, genre:string) {

        this.title = title
        this.releaseYear = releaseYear
        this.actors = []
        this.nationality = nationality
        this.director = 
        this.writer
        this.language
        this.platform
        this.isMCU
        this.mainCharacterName
        this.producer
        this.distributor
        this.genre = genre

    }

    // Methods

    printAll() {

        let allAttribute = ''
        for (let attribute in this) {

            if (this.hasOwnProperty(attribute)){

                allAttribute += `
                ${attribute}: ${this[attribute]}`
            
            }

        }

        return allAttribute

    }

}