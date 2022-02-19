var eingaben = function () {
		if(document.getElementById("ebene1").style.display === 'block'){
		document.getElementById("ebene1Background").style.display='none';
		document.getElementById("ebene1").style.display='none';
		} else {
		document.getElementById("ebene1").style.display='block';
		document.getElementById("ebene1Background").style.display='block';
		}
};
var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};