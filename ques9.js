
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
        
    },
   
};
console.log(gimli["name"]) //Gimli
console.log(gimli["race"]) //dwarf
console.log(gimli["weapon"]) //axe
console.log(gimli.greet()); //output = Hi my name is Gimli
