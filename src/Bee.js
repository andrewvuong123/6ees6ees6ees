// extend keyword used to set the class as a subclass
class Bee extends Grub {
  constructor() {
    // super keyword used as a function to call parent class with the params passed into this subclass (must call before using this)
    super(arguments);
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};
