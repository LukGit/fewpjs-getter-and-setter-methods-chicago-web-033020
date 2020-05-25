// Add your Circle class here
const pi = Math.PI

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius  * 2
  }

  get circumference() {
    return (this.radius * 2) * pi
  }

  get area () {
    return (this.radius * this.radius) * pi
  }

  set diameter(diameter) {
    return this.radius = diameter / 2
  }

  set circumference(circumference) {
    return this.radius = (circumference / pi) / 2
  }

  set area(area) {
    return this.radius = Math.sqrt(area / pi)
  }
}