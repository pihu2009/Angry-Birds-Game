class Bird extends Baseclass
{
 constructor(x,y,w,h,)
 {

  super(x,y,w,h)
  this.image=loadImage("sprites/bird.png")
  this.image2=loadImage("sprites/smoke.png")
 this.path=[]
 }
  
 display()
 {
    super.display()   
  var pos =  this.body.position 
  if(pos.x>300&&this.body.velocity.x>7)
  {
    var birdpos = [pos.x,pos.y]
    this.path.push(birdpos)
 }
  
  


  
  
  
  for(var i=0;i<this.path.length;i++)
  {
   image(this.image2,this.path[i][0],this.path[i][1])


  }
  

 }





 }











































































































