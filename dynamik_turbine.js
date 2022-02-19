var eingabenHd = function () {
		if(document.getElementById("werteHd").style.display === 'block'){
		document.getElementById("werteHdBackground").style.display='none';
		document.getElementById("werteHd").style.display='none';
		} else {
		document.getElementById("werteHdBackground").style.display='block';
		document.getElementById("werteHd").style.display='block';
		document.getElementById("werteNdBackground").style.display='none';
		document.getElementById("werteNd").style.display='none';
		document.getElementById("werteMdBackground").style.display='none';
		document.getElementById("werteMd").style.display='none';
		document.getElementById("werteGBackground").style.display='none';
		document.getElementById("werteG").style.display='none';
		}
};

var eingabenMd = function () {
		if(document.getElementById("werteMd").style.display === 'block'){
		document.getElementById("werteMdBackground").style.display='none';
		document.getElementById("werteMd").style.display='none';
		} else {
		document.getElementById("werteHdBackground").style.display='none';
		document.getElementById("werteHd").style.display='none';
		document.getElementById("werteNdBackground").style.display='none';
		document.getElementById("werteNd").style.display='none';
		document.getElementById("werteMdBackground").style.display='block';
		document.getElementById("werteMd").style.display='block';
		document.getElementById("werteGBackground").style.display='none';
		document.getElementById("werteG").style.display='none';
		}
};
var eingabenNd = function () {
		if(document.getElementById("werteNd").style.display === 'block'){
		document.getElementById("werteNdBackground").style.display='none';
		document.getElementById("werteNd").style.display='none';
		} else {
		document.getElementById("werteHdBackground").style.display='none';
		document.getElementById("werteHd").style.display='none';
		document.getElementById("werteNdBackground").style.display='block';
		document.getElementById("werteNd").style.display='block';
		document.getElementById("werteMdBackground").style.display='none';
		document.getElementById("werteMd").style.display='none';
		document.getElementById("werteGBackground").style.display='none';
		document.getElementById("werteG").style.display='none';
		}
};
var eingabenG = function () {
		if(document.getElementById("werteG").style.display === 'block'){
		document.getElementById("werteGBackground").style.display='none';
		document.getElementById("werteG").style.display='none';
		} else {
		document.getElementById("werteHdBackground").style.display='none';
		document.getElementById("werteHd").style.display='none';
		document.getElementById("werteNdBackground").style.display='none';
		document.getElementById("werteNd").style.display='none';
		document.getElementById("werteMdBackground").style.display='none';
		document.getElementById("werteMd").style.display='none';
		document.getElementById("werteGBackground").style.display='block';
		document.getElementById("werteG").style.display='block';
		}
};
var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};