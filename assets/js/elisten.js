document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
canvas.addEventListener("click",function(event){
    var mx=event.clientX;
    var my=event.clientY;
    var cx=1100;
    var cy=300;
    var dist=Math.sqrt(((mx-cx)*(mx-cx))+((my-cy)*(my-cy)));
    if(dist<200&&lbpg){
        reset();
        generator();
        requestAnimationFrame(move);
    }
});
canvas.addEventListener("click",function(event){
    var mx=event.clientX;
    var my=event.clientY;
    if(mx>canvas.width-250&&mx<canvas.width-150&&my>y&&my<y+100){
        if(play){
            play=false;
        }
        else {
            play=true;
            requestAnimationFrame(move);
        }
    }
});
canvas.addEventListener("click",function(event){
    var mx=event.clientX;
    var my=event.clientY;
    if(mx>canvas.width-150&&mx<canvas.width-50&&my>y&&my<y+100){
        endg=true;
    }
});
canvas.addEventListener("mousemove",function(event){
    var mx=event.clientX;
    var my=event.clientY;
    var cx=1100;
    var cy=300;
    var dist=Math.sqrt(((mx-cx)*(mx-cx))+((my-cy)*(my-cy)));
    if(dist<200&&lbpg){
        var shift=100;
        tool.clearRect(900,100,200,200);
        tool.fillStyle = 'red';
        tool.beginPath();
        tool.arc(1000+shift,300,200,0,Math.PI*2);
        tool.fill();
        tool.closePath();
        tool.fillStyle = 'white';
        tool.font = "60px Arial";
        tool.fillText("Play Again",860+shift,320);
    }
    else{
        var shift=100;
        tool.clearRect(900,100,200,200);
        tool.fillStyle = 'chartreuse';
        tool.beginPath();
        tool.arc(1000+shift,300,200,0,Math.PI*2);
        tool.fill();
        tool.closePath();
        tool.fillStyle = 'white';
        tool.font = "60px Arial";
        tool.fillText("Play Again",860+shift,320);
    }
});