class Tree{
    constructer(x,y,r)
    {
        var options={
            isStatic:true,
            
         }
         this.x=x;
         this.y=y;
        
         this.image=loadImage("tree.png");
         this.body=Bodies.rectangle(this.x,this.y,options);
         World.add(world,this.body);
    }
    display(){
        pop();
        imageMode(CENTER);
        push();
    }
}