var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth*.996;
canvas.height=window.innerHeight*.994;

var c = canvas.getContext('2d');

var mx,my, pl1=0,pl2=1;activeplayer= 1;
var a=[ [-1,-2,-3] ,[-4,-5,-6] ,[-7,-8,-9] ];
var cx=canvas.width/2, cy=canvas.height/2, r=canvas.width/15;

addEventListener('click', function(event){
  mx = event.clientX;
  my = event.clientY;
    getXY();
    //console.log(mx,my);
});

addEventListener('resize', function() {
  canvas.width = window.innerWidth*.996;
  canvas.height = window.innerHeight*.994;
  init();
});

function init(){//drawing lines

cx=canvas.width/2;
cy=canvas.height/2;
r=canvas.width/15;
c.strokeStyle="#fff";
c.lineWidth=2;

c.beginPath();
c.moveTo(cx+r,cy+3*r);
c.lineTo(cx+r,cy-3*r);
c.stroke();

c.beginPath();
c.moveTo(cx-r,cy+3*r);
c.lineTo(cx-r,cy-3*r);
c.stroke();

c.beginPath();
c.moveTo(cx+3*r,cy+r);
c.lineTo(cx-3*r,cy+r);
c.stroke();

c.beginPath();
c.moveTo(cx+3*r,cy-r);
c.lineTo(cx-3*r,cy-r);
c.stroke();
}
var drawx,drawy;
function getXY(){
    
    if(mx < cx-r && my < cy-r){
        drawx=cx-2*r;
        drawy=cy-2*r;
        if(a[0][0]===-1){
        a[0][0]=activeplayer%2;
        selplayer();
        }
    }else if(mx < cx+r && mx> cx-r && my < cy-r){
        drawx=cx;
        drawy=cy-2*r;
        if(a[0][1]===-2){
        a[0][1]=activeplayer%2;
        selplayer();
        }
    }else if(mx > cx+r && my <cy-r){
        drawx=cx+2*r;
        drawy=cy-2*r;
        if(a[0][2]===-3){
        a[0][2]=activeplayer%2;
        selplayer();
        }
    }else if(mx < cx-r && my > cy-r && my < cy+r){
        drawx=cx-2*r;
        drawy=cy;
        if(a[1][0]===-4){
        a[1][0]=activeplayer%2;
        selplayer();
        }
    }else if(mx > cx-r && mx < cx+r && my > cy-r && my < cy+r){
        drawx=cx;
        drawy=cy;
        if(a[1][1]===-5){
        a[1][1]=activeplayer%2;
        selplayer();
        }
    }else if(mx > cx+r && my > cy-r && my < cy+r){
        drawx=cx+2*r;
        drawy=cy;
        if(a[1][2]===-6){
        a[1][2]=activeplayer%2;
        selplayer();
        }
    }else if(mx < cx-r && my > cy+r){
        drawx=cx-2*r;
        drawy=cy+2*r;
        if(a[2][0]===-7){
        a[2][0]=activeplayer%2;
        selplayer();
        }
    }else if(mx > cx-r && mx < cx+r && my > cy+r){
        drawx=cx;
        drawy=cy+2*r;
        if(a[2][1]===-8){
        a[2][1]=activeplayer%2;
        selplayer();
        }
    }
    else if(mx > cx+r && my > cy+r){
        drawx= cx+2*r;
        drawy= cy+2*r;
        if(a[2][2]===-9){
        a[2][2]=activeplayer%2;
        selplayer();
        }
    }
    
   // console.log(drawx,drawy);
     
}

function selplayer(){
        if(activeplayer%2===0) p1();
        else p2();
        activeplayer++;
        setTimeout(cheakWinner,200);
 //console.log(a);
}

function p1(){
    c.strokeStyle="#e0a3af";
    c.lineWidth=6;
    c.beginPath();
    c.ellipse(drawx,drawy,50,60,0,0,Math.PI*2);
    c.stroke();   
}
function p2(){
    var t=50;
    c.strokeStyle="#e0a3af";
    c.lineWidth=6;
    c.beginPath();
    c.moveTo(drawx,drawy);
    c.lineTo(drawx+t,drawy+t);
    c.lineTo(drawx-t,drawy-t);
    c.lineTo(drawx,drawy);
    c.lineTo(drawx+t,drawy-t);
    c.lineTo(drawx-t,drawy+t);
    c.stroke();
}

function cheakWinner(){
    for(var i=0;i< 3;i++){
        var j=0;
        if(a[i][j] === a[i][j+1]&& a[i][j] === a[i][j+2]){
            alert('Winner '+ activeplayer%2);
            setTimeout(function(){document.location.reload();},300);
        }
    }
    for(var i=0;i< 3;i++){
        var j=0;
        if(a[j][i] === a[j+1][i]&& a[j][i] === a[j+2][i]){
            alert('Winner '+ activeplayer%2);
            setTimeout(function(){document.location.reload();},300);
        }
    } 
        var i=0;
        if(a[i][i] === a[i+1][i+1] && a[i][i] === a[i+2][i+2])
          {  alert("Winner"+ activeplayer%2);
          setTimeout(function(){document.location.reload();},300);
          }
        else if(a[i][i+2] === a[i+1][i+1] && a[i][i+2] === a[i+2][i])
           { alert("Winner"+ activeplayer%2);
           setTimeout(function(){document.location.reload();},300);
           }
            else if(activeplayer>9){
                alert("Draw");
           setTimeout(function(){document.location.reload();},300);
            }
    
    /*for(var i=0;i< 3;i++)
        for(var j=0;j<3;j++){}*/
    }


init();
