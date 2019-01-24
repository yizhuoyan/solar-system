/**
 * 火星
 */
const Mars=function(sun){
    this.img=$("mars");
    this.sun=sun;
    this.w=this.img.width;
    this.h=this.img.height;
    this.r=this.w/2;
    //公转相关
    //公转半径 1.52 为了显示改为3.04
    this.revolveRadius=sun.r+sun.rur*3.04+this.r;
    this.revolveSpeed=sun.earthRus*0.804333333;
    this.x=this.revolveRadius-this.r;
    this.y=-this.r;
    //当前公转弧度
     this.currentRevolveRadian=Math.random()*Math.PI*2;
    //自转
    
    
};

Mars.prototype.paint=function(g){
    g.save();
    
    g.beginPath();
    g.arc(0, 0, this.revolveRadius, 0, g.PI2);
    g.strokeStyle = "#97845F";
    g.stroke();
    
    g.rotate(this.currentRevolveRadian);
    g.drawImage(this.img,this.x,this.y);
    
    this.currentRevolveRadian+=this.revolveSpeed;
    if(this.currentRevolveRadian>g.PI2){
        this.currentRevolveRadian=0;
    }
    g.restore();
};

