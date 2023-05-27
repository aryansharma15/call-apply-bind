
// .call()
let name = {
    firstname: "Aryan",
    lastname: "Sharma",
    printFullName: function(age, city){
        console.log(this.firstname + " " + this.lastname + ", age: " + age + ", from: " + city);
    }
}

name.printFullName(22, "Amritsar");

let name2 = {
    firstname: "Darth",
    lastname: "Vader",

}

name.printFullName.call(name2, 45, "Tattooine");

// .apply()
// in apply, we pass the arguments to age & city as an array

let name3 = {
    firstname: "Bruce",
    lastname: "Wayne",
}

name.printFullName.apply(name3, [41, "Gotham"]);
