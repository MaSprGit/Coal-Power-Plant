var eingaben = function () {
		if(document.getElementById("datenMain").style.display === 'block'){
		document.getElementById("datenMainBackground").style.display='none';
		document.getElementById("datenMain").style.display='none';
		document.getElementById("masseSchwefelBackground").style.display='none';
		document.getElementById("masseSchwefel").style.display='none';
		} else {
		document.getElementById("datenMain").style.display='block';
		document.getElementById("datenMainBackground").style.display='block';
		}
};
var mSchwefel = function() {
		if (document.getElementById("masseSchwefel").style.display==='block') {
		   document.getElementById("masseSchwefel").style.display='none';
			 document.getElementById("masseSchwefelBackground").style.display='none';
		} else {
		document.getElementById("masseSchwefel").style.display='block';
		document.getElementById("masseSchwefelBackground").style.display='block'; }
};

var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};