// Um tipo de vetor

class Vector {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(anotherVector) {
    return new Vector(
      this.x += anotherVector.x,
      this.y += anotherVector.y
    );
  }

  minus(anotherVector) {
    return new Vector(
      this.x -= anotherVector.x,
      this.y -= anotherVector.y
    );
  }

  get length() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));

console.log(new Vector(1, 2).minus(new Vector(2, 3)));

console.log(new Vector(3, 4).length);
