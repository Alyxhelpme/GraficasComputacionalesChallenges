//Alyx Nadyezhna Gutierrez Miranda A01640585
//Challenge 3. Lines Drawing Algorithm with OpenGL

// g++ linedrawing-w-OpenGl.cpp -o lines-opengl -lglut -lGLU -lGL

#include <GL/glut.h>

void init(void){
    glClearColor (1.0,1.0,1.0,0.0); //Display window color to white
    glMatrixMode (GL_PROJECTION); //Projection parameters
    gluOrtho2D(0.0,200,0,150);
}

void plotLow(int x1, int y1, int x2, int y2){
    int dx = x2-x1;
    int dy = y2-y1;
    int yi = 1;

    if (dy<0) {
        yi = -1;
        dy = -dy;
    }
    long int D = (2*dy)-dx;
    int y = y1;
    glBegin(GL_POINTS);
    for (int x = x1; x <= x2; x++) {
        glColor3i(255,192,203);
        glVertex2i(x,y);
        //point(x,y);
        if (D>0) {
            y=y+yi;
            D=D+(2*(dy-dx));
        }else{
            D=D+2*dy;
        }
    }

}

void plotHigh(int x1, int y1, int x2, int y2){
    int dx = x2-x1;
    int dy = y2-y1;
    int xi = 1;

    if (dx<0) {
        xi = -1;
        dx = -dx;
    }
    long int D = (2*dx)-dy;
    int x = x1;
    glBegin(GL_POINTS);
    for (int y = y1; y <= y2; y++) {
        glColor3i(255,192,203);
        glVertex2i(x,y);
        //point(x,y);
        if (D>0) {
            x=x+xi;
            D=D+(2*(dx-dy));
        }else{
            D=D+2*dx;
        }
    }

}

void bresenhamAlgorithm(int x1,int y1,int x2,int y2){
    if(abs(y2-y1)<abs(x2-x1)){
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

void myLine(void){
    glClear (GL_COLOR_BUFFER_BIT);
    bresenhamAlgorithm(1,2,100,20);
    bresenhamAlgorithm(10,200,50,10);
    bresenhamAlgorithm(300,300,10,10);
    bresenhamAlgorithm(200,300,250,50);
    //bresenhamAlgorithm(350,350,100,300); No se imprime esto
    glEnd ();
    glFlush();
}

int main (int argc, char** argv)
{
    glutInit (&argc, argv);    // Initialize GLUT.
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);    // Set display mode.
    glutInitWindowPosition (50, 100);    // Set top-left display-window position.
    glutInitWindowSize (400, 400);    // Set display-window width and height.
    glutCreateWindow ("An Example OpenGL Program"); // Create display window.
    init ( ); // Execute initialization procedure.
    glutDisplayFunc(myLine);
    glutMainLoop ( );    // Display everything and wait.
    return 0;
}