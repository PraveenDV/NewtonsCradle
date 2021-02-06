class Bob{
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            'restitution':1,
            'friction':0,
            'density':0.8,
            
        }

        this.body=Bodies.circle(x,y,diameter,options);
        this.diameter=diameter;
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0,0,this.diameter,this.diameter);       
        pop();
    
        
    }
}