function setup() {
    createCanvas(800, 800);
  }
  
  
  function myTranslate(x, y, tx, ty) {
    newX = x+tx;
    newY = y+ty;
    return [newX, newY];
  }
  
  function myRotation(x, y, angle) {
    angle = angle*(PI/180);
    newX = (width/2)+((x-width/2)*cos(angle))-((y-height/2)*sin(angle));
    newY = (height/2)+((x-width/2)*sin(angle))+((y-height/2)*cos(angle));
    return [newX,newY];
  }

  function myRotatePiv(x, y, angle, pivX, pivY){
    angle = angle*(PI/180);
    newX = pivX+((x-pivX)*cos(angle))-((y-pivY)*sin(angle));
    newY = pivY+((x-pivX)*sin(angle))+((y-pivY)*cos(angle));
    return [newX,newY];
  }
  
  function myScaling(x, y, sx, sy,xp,yp) {
    newX = (x*sx)+xp*(1-sx);
    newY = (y*sy)+yp*(1-sy);
    
    return [newX,newY];
  }
  
  function myReflectionInY(x, y, yMirror) {
    if (y > yMirror){
      newY = y - ((y - yMirror) * 2);
    } else {
      newY = y + ((yMirror - y) * 2);
    }
    return [x, newY];
  }
  
  function myShearX(x, y,sx) {
    newX = x+sx*y;
    print(newX);
    newY = y;
    return [newX,newY];
  }
  
  function myShearY(x, y, sy) {
    newY = y+sy*x;
    newX = x;
    return [newX, newY];
  }
  
  function draw() {
    background(102);
    fill(1,255,1);
    polygon(width/2, height/2, 50, 6, myScaling, 3,3,width/2, height/1.5);
    fill(255);
    polygon(width/2, height/2, 50, 3, null);
    fill(1);
    polygon(width/2, height/2, 50, 6, myTranslate, 50, 50);
    fill(1,1,255);
    polygon(width/2, height/2, 50, 6, myRotation, 58);
    fill(255,1,1);
    polygon(width/2, height/2, 50, 6, myRotatePiv, 10, 10,100);
    fill(230,230,250);
    //polygon(width/2, height/2, 50,5, myReflection,height/2);
    fill(230,230,250);
    polygon(width, height/10, 30,4, myShearX,-1);
    fill(230,230,250);
    polygon(width/10, height/10, 30,4, myShearY,5);


  }
  
  function polygon(x, y, radius, npoints, transform, ...params) {
    let angle = TWO_PI / npoints;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius;
      let sy = y + sin(a) * radius;
      if (transform != null) {
        [sx, sy] = transform(sx,sy, ...params);
      }
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  