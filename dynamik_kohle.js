var labelKohle = function(){ 																									//KohleDaten ein- ausblenden
  if(document.getElementById("datenKohle").style.display === 'block'){
  document.getElementById("datenKohle").style.display ='none';
  document.getElementById("datenKohleBackground").style.display='none';
  document.getElementById("mkEingaben").style.display='none';
  document.getElementById("mkEingabenBackground").style.display='none';
  document.getElementById("cpKohleBerechnung").style.display='none';
  document.getElementById("cpKohleBerechnungBackground").style.display='none';
  } else {
  document.getElementById("datenKohleBackground").style.display = 'block';
  document.getElementById("datenKohle").style.display = 'block';}
};


var massKohle = function() {																 									// Kohlemassenstrom einblenden
  if (document.getElementById("mkEingaben").style.display==='block') {
  document.getElementById("mkEingaben").style.display='none';
  document.getElementById("mkEingabenBackground").style.display='none'; 	
  } else {																															 															 									
  document.getElementById("mkEingaben").style.display='block';
  document.getElementById("mkEingabenBackground").style.display='block';
  document.getElementById("cpKohleBerechnung").style.display='none';
  document.getElementById("cpKohleBerechnungBackground").style.display='none'; }

};
var cpKohle = function() {																										 	// cpKohle einblenden
	if (document.getElementById("cpKohleBerechnung").style.display==='block') {
		 document.getElementById("cpKohleBerechnung").style.display='none';
		 document.getElementById("cpKohleBerechnungBackground").style.display='none';
	} else {																									
	document.getElementById("cpKohleBerechnung").style.display='block';
	document.getElementById("cpKohleBerechnungBackground").style.display='block';
	document.getElementById("mkEingaben").style.display='none';
	document.getElementById("mkEingabenBackground").style.display='none'; }
	};
	
var closeDiv = function (id) {																								//Close Button Funktion
	var background = id+"Background";
  document.getElementById(id).style.display='none';
  document.getElementById(background).style.display='none';
};
	