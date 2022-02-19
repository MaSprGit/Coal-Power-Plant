var eingaben = function () {
		if(document.getElementById("brennkammerDaten").style.display === 'block'){
		document.getElementById("brennkammerDatenBackground").style.display='none';
		document.getElementById("brennkammerDaten").style.display='none';
		document.getElementById("wandflBackground").style.display='none';
		document.getElementById("wandfl").style.display='none';
		document.getElementById("rauchgasBackground").style.display='none';
		document.getElementById("rauchgas").style.display='none';
		} else {
		document.getElementById("brennkammerDaten").style.display='block';
		document.getElementById("brennkammerDatenBackground").style.display='block';
		}
};

var rauchgas = function() {
		if (document.getElementById("rauchgas").style.display==='block') {
			 document.getElementById("rauchgasBackground").style.display='none';
			 document.getElementById("rauchgas").style.display='none';
		} else {
		document.getElementById("wandfl").style.display='none';
		document.getElementById("wandflBackground").style.display='none';
		document.getElementById("rauchgasBackground").style.display='block';
		document.getElementById("rauchgas").style.display='block'; }
};

var wandfl = function() {
		if (document.getElementById("wandfl").style.display==='block') {
			 document.getElementById("wandfl").style.display='none';
			 document.getElementById("wandflBackground").style.display='none';
		} else {
		document.getElementById("wandfl").style.display='block';
		document.getElementById("wandflBackground").style.display='block';
		document.getElementById("rauchgasBackground").style.display='none';
		document.getElementById("rauchgas").style.display='none'; }
};

var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};