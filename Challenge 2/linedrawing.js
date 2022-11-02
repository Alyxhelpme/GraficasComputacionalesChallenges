
function setup(){
    createCanvas(400,400);
    background(220);
}


function plotLow(x1,y1,x2,y2){
    dx = x2-x1;
    dy = y2-y1;
    yi = 1;

    if (dy<0) {
        yi = -1;
        dy = -dy;
    }
    D = (2*dy)-dx;
    y = y1;
    for (let x = x1; x <= x2; x++) {
        point(x,y);
        if (D>0) {
            y=y+yi;
            D=D+(2*(dy-dx));
        }else{
            D=D+2*dy;
        }
    }
}
function plotHigh(x1,y1,x2,y2){
    dx = x2-x1;
    dy = y2-y1;
    xi = 1;

    if (dx<0) {
        xi = -1;
        dx = -dx;
    }
    D = (2*dx)-dy;
    x = x1;
    for (let y = y1; y <= y2; y++) {
        point(x,y);
        if (D>0) {
            x=x+xi;
            D=D+(2*(dx-dy));
        }else{
            D=D+2*dx;
        }
    }
}

function bresenhamAlgorithm(x1,y1,x2,y2){
    if (Math.abs(y2-y1)<Math.abs(x2-x1)){
        if(x1>x2){
            plotLow(x2,y2,x1,y1);
        }else{
            plotLow(x1,y1,x2,y2);
        }
    }else{
        if(y1>y2){
            plotHigh(x2,y2,x1,y1);
        }else{
            plotHigh(x1,y1,x2,y2);
        }
    }
}

function draw(){
    noSmooth();
    bresenhamAlgorithm(1,2,100,20);
    bresenhamAlgorithm(10,200,50,10);
    bresenhamAlgorithm(300,300,10,10);
    bresenhamAlgorithm(200,300,250,50);
    bresenhamAlgorithm(350,350,100,300);



}
