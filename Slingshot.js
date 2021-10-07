class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
           bodyA :bodyA,
           pointB :pointB,
           stiffness : 0.4,
           length: 1
        }
        this.sling =Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
      }

      display(){

        // if the body A is there only then the sling will show up otherwise we don't need the sling
        if (this.sling.bodyA){ 


          // storing the x,y position of the bodyA of the sling that we have created with the class in a variable pointA
          var pointA = this.sling.bodyA.position; 
          // storing the point to which the sling should be attached on the other side  in a variable pointA
          var pointB = this.pointB; 

          stroke("A64949"); // color of the line
          strokeWeight(3); // how bold the line would be 

          line(pointA.x, pointA.y,pointB.x,pointB.y); // draw the line from bodyA to point B i.e. line(x1,y1,x2,y2) line from(x1,y1 to x2,y2)


        }
       
      }

      fly(){
        this.sling.bodyA =null;
      }
    }