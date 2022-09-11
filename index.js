// Add your Circle class here

//Define setter methods for diameter, circumference, and area which will accept values 
//for each calculation, calculate the radius based on the input value and set this.radius accordingly
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }


    get diameter() {
        return this.radius * 2;
    }

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    }


    get circumference() {
        return Math.PI * this.radius * 2;
    }


    set area(area) {
        //Math.sqrt(x) => this.radius
        this.radius = area / (this.radius * Math.PI)
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}


