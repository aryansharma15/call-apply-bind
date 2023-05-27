
// .call()
let name = {
    firstname: "Aryan",
    lastname: "Sharma",
    printFullName: function(){
        console.log(this.firstname + " " + this.lastname);
    }
}

name.printFullName();

let name2 = {
    firstname: "Darth",
    lastname: "Vader",

}

name.printFullName.call(name2);