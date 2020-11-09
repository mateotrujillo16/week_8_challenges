const tom = {
  name: "Tom",
  height: 9,
  mass: 8,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};


const jerry = {
  name: "Jerry",
  height: 10,
  mass: 45,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

tom.calcBMI();
jerry.calcBMI();

console.log(tom.bmi, jerry.bmi);

if (tom.bmi > jerry.bmi) {
  console.log(`Is ${tom.name}'s BMI higher than ${jerry.name}`)
} else if (jerry.bmi > tom.bmi) {
  console.log(`Is ${jerry.name}'s BMI higher than ${tom.name}`)
}