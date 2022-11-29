/*
VERSION 2
functions for roll-over or mouse-down image resize which lifts the re-sized
image out of the plane so as not to disturb the rest of the document. the enlarged
image overlays the rest of the document.
For description of use please see the Moodle example, or follow this.

you MUST enclose the image in a SPAN which has a class of floatleft or floatright. 

Put still this, which links to an external file, into the HEAD of your document:
<LINK href="http://www.hatii.arts.gla.ac.uk/sww/css/imageFloats.css" type=text/css rel=stylesheet />

or if you prefer put this in your document's HEAD:
<style type="text/css">
	.floatleft {float:left;position:relative;}
	.floatright {float:right;position:relative;}
</style>

Put this, which links to some JavaScript code, into the HEAD of your document:

<SCRIPT language=JavaScript src="http://www.hatii.arts.gla.ac.uk/sww/js/imageResize.js"></SCRIPT>

Then in your document use this pattern for images you wish to resize on a mouse press:

<span class="floatleft" onMouseDown="imageGrow(this,500);" onMouseUp="imageShrink(this);"  onMouseOut="imageShrink(this);">
  <IMG SRC="http://www.hatii.arts.gla.ac.uk/graphics/gsh.jpg" width="200" ALT="Photo of GSH. Press and hold mouse button to enlarge">
</span>

Or use this for images you wish to resize when the mouse passes over them:

<span class="floatright" onMouseOver="imageGrow(this, 500);" onMouseOut="imageShrink(this);"><img src="http://www.hatii.arts.gla.ac.uk/graphics/univ1.gif" alt="the uni logo"/></span>

Stephen Woodruff, March 2005
*/
var savedHTML;
function imageGrow(thespan, newWidth){
	if (!thespan) {
		alert("incorrect parameter to imageGrow() function: call it like this:\n\timageGrow(this,400);\nwhere 400 is the new width of the image");
		return;
	}
	if (!thespan.childNodes) {
		alert("imageGrow() must be called from a span which surrounds the image to be resized.");
		return;
	}
	if (thespan.firstChild.nodeName!="IMG"){
		alert("imageGrow() requires the first content of the span to be the image to be resized.\n(not "+thespan.firstChild.nodeName+", the first of "+thespan.childNodes.length+" children)");
		return;
	}
	if (thespan.showing) {
		return;
	}
	savedHTML= thespan.innerHTML;
	thespan.showing= true;
	thespan.innerHTML+= "<img src='' id='newimage' style='position:absolute;left:0;top:0;z-index:2;'>";
	var it= document.getElementById("newimage");
	it.src= thespan.firstChild.src;
	it.width= newWidth;
	it.alt= "NEW ONE";
	
	if (thespan.className=="floatright") {
		var newwidth= parseInt(it.width)-parseInt(thespan.firstChild.width);
		it.style.left= "-"+newwidth;
	}
}
function imageShrink(thespan){
		if (!thespan.showing) return;
		thespan.showing= false;
		thespan.innerHTML= savedHTML;
		savedHTML= "";
}
