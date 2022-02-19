var eingaben = function () {
		if(document.getElementById("dampfDaten").style.display === 'block'){
		document.getElementById("dampfDatenBackground").style.display='none';
		document.getElementById("dampfDaten").style.display='none';
		} else {
		document.getElementById("dampfDaten").style.display='block';
		document.getElementById("dampfDatenBackground").style.display='block';
		}
};
var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};