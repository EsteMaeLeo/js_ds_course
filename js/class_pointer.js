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

//pointers
let obj1 = {
  value: 20,
};

let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj1.value = 30;

console.log(obj1);
console.log(obj2);
