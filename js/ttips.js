Xoffset= 50; Yoffset= 20;

function notneg(n) {
//returns max of n and 0
	return (n<0?o:n);
}
function ttip(theObj,msg){
var thePopup=document.getElementById("popUpDiv");
if (thePopup==null){fnAdd();thePopup=document.getElementById("popUpDiv");}
thePopup.innerHTML= msg;
//thePopup.innerHTML= "/";
thePopup.style.top= notneg(theObj.offsetTop-Yoffset);//-theObj.offsetHeight;

thePopup.style.left= notneg(theObj.offsetLeft-Xoffset);
thePopup.style.display= 'inline';
}

function ttipoff(){
	var thePopup=document.getElementById("popUpDiv");
	thePopup.style.display= 'none';
}
function fnAdd()
{
	var oDiv=document.createElement("DIV");
	oDiv.id = "popUpDiv";
	document.body.appendChild(oDiv);
}
function popup(loc,titl){
	window.open(loc,'hiho','width=200,height=200,directories=no,location=no,menubar=no,status=no,toolbar=no,resizable=yes,title='+titl);
}
