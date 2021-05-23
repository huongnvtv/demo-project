var Dog=require('./Dog');
var Cat=require('./Mouse');
var tom = new Dog('white');
var jerry = new Mouse('orange');
tom.eat(jerry);
tom.sayHi();
console.log(tom);