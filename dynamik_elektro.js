var eingaben = function () {
		if(document.getElementById("datenMain").style.display === 'block'){
		document.getElementById("datenMainBackground").style.display='none';
		document.getElementById("datenMain").style.display='none';
		document.getElementById("rauchgasBackground").style.display='none';
		document.getElementById("rauchgas").style.display='none';
		} else {
		document.getElementById("datenMain").style.display='block';
		document.getElementById("datenMainBackground").style.display='block';
		}
};
var vRG = function() {
		if (document.getElementById("rauchgas").style.display==='block') {
		   document.getElementById("rauchgas").style.display='none';
			 document.getElementById("rauchgasBackground").style.display='none';
		} else {
		document.getElementById("rauchgas").style.display='block';
		document.getElementById("rauchgasBackground").style.display='block'; }
};

var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};