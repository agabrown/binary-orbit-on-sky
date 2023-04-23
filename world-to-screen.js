/* 
 * Provide functions to transform from a user defined coordinate system to the 
 * coordinate system used in Processing.
 *
 * Anthony Brown Apr 2023 - Apr 2023
 */

/*
 * Apply this transformation so that one can work in a righthanded Cartesian coordinate 
 * system, which is defined as follows for rotY=0 and rotZ=0:
 * - The x-axis points toward the viewer.
 * - The y-axis runs from left to right on the screen.
 * - The z-axis runs from bottom to top on the screen.
 *
 * The purpose of rotY and rotZ is to position the camera at an azimuth (with respect to
 * X) given by rotZ and a latitude (with respect to XY) indicated by rotY.
 *
 * The transformation takes care of placing things correctly in 'device' coordinates 
 * (here WEBGL coordinates).
 *
 * So typically you do the following:
 * p5.push();
 * rightHanded3DtoWEBGL(p5, rotY, rotZ);
 * ...
 * drawing instructions with coordinates now to be interpreted in the righthanded 
 * Cartesian coordinate system defined above.
 * ...
 * p5.pop();
 *
 * Parameters:
 * p5o - the p5 object
 * rotY - rotation angle around Y (radians, sets the viewpointi latitude)
 * rotZ - rotation angle around Z (radians, sets the viewpoint azimuth)
 */
function rightHanded3DtoWEBGL(p5o, rotY, rotZ) {
    p5o.applyMatrix(
        0, 0, 1, 0,
        1, 0, 0, 0,
        0, -1, 0, 0,
        0, 0, 0, 1
    );
    p5o.rotateY(rotY);
    p5o.rotateZ(-rotZ);
}

/*
 * Show the world coordinate axes. This is useful for orientation when developing sketches.
 * 
 * Parameters:
 * p5o - The p5 object
 * s - Length of the vectors indicating the x-y-z axes.
 */
function showWorldAxes(p5o, s) {
    p5o.push();
    p5o.strokeWeight(6);
    p5o.stroke(mptab10.get('red'));
    p5o.line(0, 0, 0, s, 0, 0);
    p5o.stroke(mptab10.get('green'));
    p5o.line(0, 0, 0, 0, s, 0);
    p5o.stroke(mptab10.get('blue'));
    p5o.line(0, 0, 0, 0, 0, s);
    p5o.pop();
}
