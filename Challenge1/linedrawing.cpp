#include <iostream>

using namespace std;

//simple method to drawing is simply using is the direct drawing of the line equation
//however in this case we're not displaying the graphic representation itself and just the location of the points

void lineEquation(int x1,int x2,int y1,int y2){ //Bresenham's line algorithm
    //this version of the algorithm works for lines with a slope within 0 and -1, thus making the case of 
    int dx = x2-x1; //slope of x
    int dy = y2-y1; //slope of y
    int yi = 1;
    if(dy<0){ //
        yi = -1;
        dy = -dy;
    }
    //difference between points
    long int D = (2*dy)-dx;
    int y = y1;
    for(int x=x1;x<=x2;x++){
        cout<<"("<<x<<", "<<y<<")"<<endl;
        if (D>0){
            y = y+yi;
            D = D + (2*(dy-dx));
        }else{
            D = D + 2*dy;
        }
    } 
}


int main(){
    int x,y;
    int x2,y2;
    cin>>x;
    cin>>y;
    cin>>x2;
    cin>>y2;

    lineEquation(x,x2,y,y2);
}