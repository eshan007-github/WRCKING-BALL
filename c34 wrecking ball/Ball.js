class Ball{
     constructor(x,y){
         var options = {
             friction : 1.0,
             restitution : 1.0,
             density : 1.0
         }
         this.body = Bodies.circle(x,y,50,options)
         World.add(world,this.body)
         this.r = 50
     }

    display(){
        var pos = this.body.position;
        push ()
         ellipseMode(RADIUS)
         ellipse(pos.x,pos.y,this.r,this.r)
        pop  ()
    }

}