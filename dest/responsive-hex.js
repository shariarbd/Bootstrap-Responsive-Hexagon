/* ---------------------------------------------------------------------- 
* Product Name: Bootstrap Responsive Hexagon
* Product URI: http://shariarbd.com/demo/bootstrap-responsive-hexagon/
* Author: Shariar
* Author URI: http://shariarbd.com/
* Description: Bootstrap Responsive Hexagon by Shariar
* Version: 1.0.0
* License: The MIT License (MIT)
* Tags: Bootstrap Responsive Hexagon, hexagon, responsive hexagon
* ---------------------------------------------------------------------- */

function responsiveHex(){
	jQuery('.hex-responsive').each(function(e){
		var width = jQuery(this).parent().width(); //will added on hexagon
		var height = width / 1.74; //will added on hexagon
		var padding = height/2+15; // will added on the parent of hexagon
		//Add height and width on Hexagon 
		jQuery(this).css({'width': width, 'height': height}); 
		//Add padding top the parent of hexagon for proper fit
		jQuery(this).parent().css({'padding-top': padding, 'padding-bottom': padding, 'overflow':'hidden'}); 
	});
}

jQuery(document).on("ready", responsiveHex);
jQuery(window).on("resize", responsiveHex); 