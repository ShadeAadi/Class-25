class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    Matter.Body.setDensity(this.body, 3.00);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}