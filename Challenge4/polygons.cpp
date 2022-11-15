#include <GL/glut.h>
#include <math.h>
#include <stdlib.h>
#include <random>

GLsizei winWidth = 400, winHeight = 300; // Initial display-window size.
GLint nvertex = 5;



class screenPt
{
private:
    GLint x, y;
public:
    /* Default Constructor: initializes coordinate position to (0, 0).*/
    screenPt ( ) {
	x = y = 0;
    }
    void setCoords (GLint xCoord, GLint yCoord) {
	x = xCoord;
	y = yCoord;
    }
    GLint getx ( ) const {
    GLint nvertex = 5;
	return x;
    }
    GLint gety ( ) const {
	return y;
    }
};

void figure(){
    screenPt hexVertex, circCtr;
    GLdouble theta;
    GLint k;
    /* Set circle center coordinates. */
    circCtr.setCoords (winWidth / 2, winHeight / 2);

    glClear(GL_COLOR_BUFFER_BIT);
    /* Set up a display list for a red regular hexagon.
     * Vertices for the hexagon are six equally spaced
     * points around the circumference of a circle.
     */

    glColor3f (rand() / static_cast<float>(RAND_MAX), 
    			rand() / static_cast<float>(RAND_MAX), 
    			rand() / static_cast<float>(RAND_MAX));  // Random collor fill
    glBegin (GL_POLYGON);
    for (k = 0; k < nvertex; k++) {
	theta = 6.2831853 * k / nvertex; //two-pi variable just colocated over
	hexVertex.setCoords (circCtr.getx ( ) + 150 * cos (theta),
			     circCtr.gety ( ) + 150 * sin (theta));
	glVertex2i (hexVertex.getx ( ), hexVertex.gety ( ));
    }
    glEnd ( );
    glFlush();
}

static void init (  )
{

    glClearColor (1.0, 1.0, 1.0, 0.0); //    Display-window color = white.

}

void mousePtPlot (GLint button, GLint action, GLint xMouse, GLint yMouse)
{
    if (button == GLUT_LEFT_BUTTON && action == GLUT_DOWN)
        nvertex++;
        figure();

}


void winReshapeFcn (GLint newWidth, GLint newHeight)
{
    /* Reset viewport and projection parameters */
    glViewport (0, 0, newWidth, newHeight);
    glMatrixMode (GL_PROJECTION);
    glLoadIdentity ( );
    gluOrtho2D (0.0, GLdouble (newWidth), 0.0, GLdouble (newHeight));
    // Reset display-window size parameters.
    winWidth = newWidth;
    winHeight = newHeight;
}


int main (int argc, char** argv)
{
    glutInit (&argc, argv);
    glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
    glutInitWindowPosition (100, 100);
    glutInitWindowSize (winWidth, winHeight);
    glutCreateWindow ("Challenge 4 polygons drawing with each click");
    init ( );
    //glutDisplayFunc (regFigure);
    glutReshapeFunc (winReshapeFcn);
    glutMouseFunc (mousePtPlot);
    glutMainLoop ( );
    return 0;
}

