var chalk=require('chalk')
function Dog(color){
	this.color=color;
	this.stomach=[];
}
Dog.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
	mouse.die=true;
};
Dog.prototype.sayHi = function() {
	// body...
	console.log('Hi .My color is '+chalk.blue(this.color))
};
module.exports=Dog;
