/**
 * 月球
 */
const Moon=function(earth){
    this.img=$("moon");
    this.earth=earth;
    this.w=this.img.width;
    this.h=this.img.height;
    this.r=this.w/2;
    //公转相关
    this.revolveRadius=earth.r+this.r+1;
    this.revolveSpeed=0.01;
    this.x=this.revolveRadius-this.r;
    this.y=-this.r;
    //当前公转弧度
    this.currentRevolveRadian=0;
    //自转
    
    
};

Moon.prototype.paint=function(g){
    let earth=this.earth;
    g.save();
    g.rotate(this.currentRevolveRadian);
    g.drawImage(this.img,this.x,this.y);
    
    this.currentRevolveRadian+=this.revolveSpeed;
    if(this.currentRevolveRadian>g.PI2){
        this.currentRevolveRadian=0;
    }
    g.restore();
};

