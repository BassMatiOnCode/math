	// Create ellipse
const ellipse = createEllipse( 0, 0, 120, 90, { }, "construction" ), { a, b, c, nex } = ellipse ;
	// Center point
addNamedPoint( "" ); 
	// Major axis
addSvgElement( "line", { x1: -a, x2: +a }, { }, "construction" );
addNamedPoint( "A1", { x: -a } ); 
addNamedPoint( "A2", { x: +a, tox: 5 } ); 
	// Minor Axis
addSvgElement( "line", { y1: -b, y2: +b }, { }, "construction"  );
addNamedPoint( "B1", { y: -b, tox: 0 } ); 
addNamedPoint( "B2", { y: +b, tox: 0, toy: 10 } ); 
addSvgElement( "text", { y: -b / 2, tox: 0, toy: 0  }, { textContent: "b" } ) ;
addSvgElement( "text", { y: +b / 2, tox: 0, toy: 0  }, { textContent: "b" } ) ;
	// Focal points
addNamedPoint( "F1", { x: -c} ); 
addNamedPoint( "F2", { x: +c, tox: 5 } ); 
addSvgElement( "text", { x: -c / 2, "dominant-baseline": "middle" }, { textContent: "c" } ); 
addSvgElement( "text", { x: +c / 2, "dominant-baseline": "middle" }, { textContent: "c" } ); 
	// Lines to focal points
addSvgElement( "line", { x1: -c, y2: -b } );
addSvgElement( "line", { x1: +c, y2: -b } );
addSvgElement( "line", { x1: -c, y2: +b } );
addSvgElement( "line", { x1: +c, y2: +b } );
addSvgElement( "text", { x: -c / 2, y: -b / 2, "dominant-baseline": "middle" }, { textContent: "a" } ); 
addSvgElement( "text", { x: +c / 2, y: -b / 2, "dominant-baseline": "middle" }, { textContent: "a" } ); 
addSvgElement( "text", { x: -c / 2, y: +b / 2, "dominant-baseline": "middle" }, { textContent: "a" } ); 
addSvgElement( "text", { x: +c / 2, y: +b / 2, "dominant-baseline": "middle" }, { textContent: "a" } ); 
