class Box{
     constructor(){
         this.body=Bodies.rectangle(200,100,50,50);
         World.add(world, this.body);
     }

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("white");
    rect(pos.x,pos.y,this.width,this.height);
    
}



}