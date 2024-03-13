class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("Green");
console.log(cookieOne.getColor());
cookieOne.setColor("Yellow");
console.log(cookieOne.getColor());
let cookieTwo = new Cookie("Blue");
