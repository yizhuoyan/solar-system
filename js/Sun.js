
const Sun=function(cvs){
    this.cvs=cvs;    
    this.img=$("sun");
    this.w=this.img.width/4;
    this.h=this.img.height;
    this.r=this.w/2;
    this.x=-this.w/2;
    this.y=-this.h/2;
    this.cellX=0;
    this.animationFrameXArray=[0,this.w,this.w*2,this.w*3];
    this.currentAnaimationFrameIndex=0;
    this.lastChangeAnimationFrameIndexTime=0;
    
};

Sun.prototype.paint=function(g){
    if(Date.now()-this.lastChangeAnimationFrameIndexTime>100){
        this.currentAnaimationFrameIndex++;
        if(this.currentAnaimationFrameIndex>=this.animationFrameXArray.length){
            this.currentAnaimationFrameIndex=0;    
        }
        this.lastChangeAnimationFrameIndexTime=Date.now();
    }
    this.cellX=this.animationFrameXArray[this.currentAnaimationFrameIndex];
    
    g.drawImage(this.img,this.cellX,0,this.w,this.h,this.x,this.y,this.w,this.h);
};

