class Paper
{
    constructor(x,y,r)
    {
        var options ={
            isStatic:false,
            restitution :0,
            friction :0,
            density :1.2
        }

        this.x = x;
        this.y = y;
        this.r =20;
        this.width =50;
        this.height = 50;
        this.body = Bodies.circle(250,650, this.r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        imageMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
    
}
    