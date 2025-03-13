
	// Create ellipse
const ellipse = new Ellipse( 0, 0, 120, 90, { }, "construction" ), { a, b, c, nex } = ellipse ;
	
	// Center point
addNamedPoint( "C" ); 
	
	// Major axis
addSvgElement( "line", { x1: -a, x2: +a }, { }, "construction" );
addNamedPoint( "A1", { x: -a } ); 
addNamedPoint( "A2", { x: +a, tox: 5 } ); 
	
	// Minor Axis
addNamedPoint( "B1", { y: -b, tox: 0 } ); 
addNamedPoint( "B2", { y: +b, tox: 0, toy: 10 } ); 
	
	// Focal points
addNamedPoint( "F1", { x: -c} ); 
addNamedPoint( "F2", { x: +c, tox: 5 } ); 
addSvgElement( "text", { x: -c / 2, "dominant-baseline": "middle" }, { textContent: "c" } ); 
addSvgElement( "text", { x: +c / 2, "dominant-baseline": "middle" }, { textContent: "c" } ); 

	// Add point
const px = 50 ;
const py = -ellipse.getPointAt( { x: px } );
addNamedPoint( "P", { x: px, y: py} ); 

	// Lines to focal points
addSvgElement( "line", { x1: -c, x2: px, y2: py }, { }, "construction" );
addSvgElement( "line", { x1: +c, x2: px, y2: py }, { }, "construction" );
addSvgElement( "text", { x: ( px - c ) / 2, y: py / 2,  "dominant-baseline": "middle" }, { innerHTML: "f<tspan class='sub'>1</tspan>" } ); 
addSvgElement( "text", { x: ( px + c ) / 2, y: py / 2,  "dominant-baseline": "middle" }, { innerHTML: "f<tspan class='sub'>2</tspan>" } ); 
