import './style.css';
import Submit from './submit'
console.log("works")

//event listener on buttons 
let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", function () { Submit()})

let lookupButton = document.getElementById("lookupButton")
lookupButton.addEventListener("click", function () {console.log("clicked lookup")})

//create a user class 
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    get name(){
        return this._name;
    }
    get email(){
        return this._email;
    }
    set name(newName){
         this._name = newName;
    }
    set email(email){
         this._email = email;
    }
}

//create a promoter class 
class Promter {
    constructor(name, email, company, venue, incident){
        this.name = name;
        this.email = email;
        this.company = company;
        this.venue = venue; 
        this.incident = incident; 
    }
}

const jack = new User("Jack", "jack@wearee.nl")
console.log(jack)
console.log(jack.name)