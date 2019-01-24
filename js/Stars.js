const Stars=function(cvs){
    this.starsArray=[];
    
    this.w=cvs.width;
    this.h=cvs.height;
    
    
    
    for(let i=100,x,y;i-- >0;){
        x=Math.random()*this.w;
        y=Math.random()*this.h;
        this.starsArray.push({x,y});
    }
};



Stars.prototype.paint=function(g){
    g.clearRect(0,0,this.w,this.h);
    for(let arr=this.starsArray,i=arr.length;i-- >0;){
        g.fillStyle="hsla(0,0%,100%,"+Math.random()+")";
        g.beginPath();
        g.arc(arr[i].x,arr[i].y,1,0,g.PI2);
        g.fill();
    }
}