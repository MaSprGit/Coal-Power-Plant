var eingaben = function () {
		if(document.getElementById("ebene1").style.display === 'block'){
		document.getElementById("ebene1Background").style.display='none';
		document.getElementById("ebene1").style.display='none';
		document.getElementById("ebene2Background").style.display='none';
		document.getElementById("ebene2").style.display='none';
		document.getElementById("ebene3Background").style.display='none';
		document.getElementById("ebene3").style.display='none';
		} else {
		document.getElementById("ebene1Background").style.display='block';
		document.getElementById("ebene1").style.display='block';	
		}
};

var rauchgas = function() {
		if (document.getElementById("ebene2").style.display==='block') {
			 document.getElementById("ebene2Background").style.display='none';
			 document.getElementById("ebene2").style.display='none';
		} else {
		document.getElementById("ebene3").style.display='none';
		document.getElementById("ebene3Background").style.display='none';
		document.getElementById("ebene2Background").style.display='block';
		document.getElementById("ebene2").style.display='block'; }
};

var heissluft = function() {
		if (document.getElementById("ebene3").style.display==='block') {
			 document.getElementById("ebene3").style.display='none';
			 document.getElementById("ebene3Background").style.display='none';
		} else {
		document.getElementById("ebene3").style.display='block';
		document.getElementById("ebene3Background").style.display='block';
		document.getElementById("ebene2Background").style.display='none';
		document.getElementById("ebene2").style.display='none'; }
};

var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};