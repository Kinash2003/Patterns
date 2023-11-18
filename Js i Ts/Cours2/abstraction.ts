
abstract class Figure {
  constructor(
    public width: number, 
    public height: number){ 
  }
  abstract getArea(): void;
}
class Rectangle extends Figure{
   
  constructor(
    public width: number, 
    public height: number
  ){ 
    super(width,height);
  }
   
  getArea(): void{
      let square = this.width * this.height;
      console.log("Area =", square);
  }
}
let someFigure = new Rectangle(10, 15);
someFigure.getArea();
