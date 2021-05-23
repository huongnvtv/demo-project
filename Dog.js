function Dog(color){
	this.color=color;
	this.stomach=[];
}
Dog.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
	mouse.die=true;
};
module.exports=Dog;
