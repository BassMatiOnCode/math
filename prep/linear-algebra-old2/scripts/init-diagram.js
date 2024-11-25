//	init-diagram.js    2024-03-05    usp
//	Initializes diagrams as appropriate
//	Requires
//		/inc/svg/svg-2.js

for ( const e of document.querySelectorAll( "line[extend-by]" )) Synesis.Svg.extendLine( e ) ;
Synesis.Svg.adjustLineLength( document.querySelectorAll( ".vector" ));
Synesis.Svg.setVerticalOffset( "tspan.subscript", 5 );
