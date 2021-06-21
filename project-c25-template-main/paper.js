constructor(x,y,r);
var options={
isStatics:false,
restitition:0.3,
friction:0,
density:1.2

}
this,x=x;
this.y=y;
this.r=r
this.Image=Laodimage("paper.png")
this.body=bodies.circle(this.x,this.y,(this.r=20)/2,options)
world.add(world,this.body);
}
display()
{

    var paperpos=this.body.poition;
    
    
    Push()
    translate(paperpos.x,paperpos.y);
    rectmode(CENTER)
    FileList(255,0,255)
}




















