function setup(){
    createCanvas(600,600);

}
firstX = 0;
firstY = 0;

endX = 0;
endY = 0;

controlPoints=0;
clicks=0;

controlCoordinates = [0,0,0,0];

linePhase = true;
controlPointsPhase = true;
lineDrawn = false;
controlPointsDraw = false;
mouseDrag1=false;
mouseDrag2=false;
movingCurve1=false;
movingCurve2=false;


function draw() {
    background(255,255,255);
    if(controlPointsPhase){
        if(controlCoordinates[3]!=0){
            circle(controlCoordinates[0],controlCoordinates[1],10);
            circle(controlCoordinates[2],controlCoordinates[3],10);
            controlPointsPhase=false;
        }else{
            circle(controlCoordinates[0],controlCoordinates[1],10);

        }
    }if(linePhase==true){
        if(lineDrawn==false){
            if (mouseIsPressed == true){
                line(firstX,firstY,mouseX,mouseY);
            }  
        }else{
            line(firstX,firstY,endX,endY);
            linePhase=false;
        }
    }if(linePhase==false && controlPointsPhase==true){
        line(firstX,firstY,endX,endY);
    }if(controlPointsPhase==false){
        circle(controlCoordinates[0],controlCoordinates[1],10);
        circle(controlCoordinates[2],controlCoordinates[3],10);
        bezier(firstX,firstY,controlCoordinates[0],controlCoordinates[1],controlCoordinates[2],controlCoordinates[3],endX,endY);
    }if(mouseDrag1){
        circle(controlCoordinates[0],controlCoordinates[1],10);
        circle(controlCoordinates[2],controlCoordinates[3],10);
        bezier(firstX,firstY,controlCoordinates[0],controlCoordinates[1],controlCoordinates[2],controlCoordinates[3],endX,endY);
    }if(mouseDrag2){
        circle(controlCoordinates[0],controlCoordinates[1],10);
        circle(controlCoordinates[2],controlCoordinates[3],10);
        bezier(firstX,firstY,controlCoordinates[0],controlCoordinates[1],controlCoordinates[2],controlCoordinates[3],endX,endY);
    }

}

function mousePressed(){
    if(linePhase==true){
        firstX = mouseX;
        firstY = mouseY;
    }if(controlPointsPhase==false){
        if(mouseX+7>controlCoordinates[0] && mouseX-7<controlCoordinates[0] && mouseY+7>controlCoordinates[1] && mouseY-7<controlCoordinates[1]){
            mouseDrag1=true;
        }if(mouseX+7>controlCoordinates[2] && mouseX-7<controlCoordinates[2] && mouseY+7>controlCoordinates[3] && mouseY-7<controlCoordinates[3]){
            mouseDrag2=true;
        }
    }


}

function mouseReleased(){
    if(linePhase==true){
        endX = mouseX;
        endY = mouseY;
        lineDrawn=true;
        controlPointsDraw = true;
    }if(mouseDrag1){
        mouseDrag1=false;
    }if(mouseDrag2){
        mouseDrag2=false;

    }

}

function mouseClicked(){
    if(controlPointsPhase==true && lineDrawn==true && mouseX!=endX && mouseY!=endY){
        if(controlPoints!=2){
            controlCoordinates[clicks]=mouseX;
            controlCoordinates[clicks+1]=mouseY;
            controlPointsDraw=true;
            clicks=clicks+2;
            controlPoints++;
        }else{
            controlPointsDraw=false;
        }
    }
}

function mouseDragged(){
    if(mouseDrag1){
        controlCoordinates[0]=mouseX;
        controlCoordinates[1]=mouseY;
    }if(mouseDrag2){
        controlCoordinates[2]=mouseX;
        controlCoordinates[3]=mouseY;
    }
}