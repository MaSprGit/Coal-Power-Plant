var eingaben = function () {
		if(document.getElementById("datenMain").style.display === 'block'){
		document.getElementById("datenMainBackground").style.display='none';
		document.getElementById("datenMain").style.display='none';
		document.getElementById("mWasserVBackground").style.display='none';
		document.getElementById("mWasserV").style.display='none';
		document.getElementById("luftDichteBackground").style.display='none';
		document.getElementById("luftDichte").style.display='none';
		} else {
		document.getElementById("datenMain").style.display='block';
		document.getElementById("datenMainBackground").style.display='block';
		}
};
var mWasserV = function() {
		if (document.getElementById("mWasserV").style.display==='block') {
		   document.getElementById("mWasserV").style.display='none';
			 document.getElementById("mWasserVBackground").style.display='none';
		} else {
		document.getElementById("mWasserV").style.display='block';
		document.getElementById("mWasserVBackground").style.display='block';
		document.getElementById("luftDichteBackground").style.display='none';
		document.getElementById("luftDichte").style.display='none'; }
};
var luftDichte = function() {
		if (document.getElementById("luftDichte").style.display==='block') {
			 document.getElementById("luftDichteBackground").style.display='none';
			 document.getElementById("luftDichte").style.display='none';
		} else {
		document.getElementById("mWasserV").style.display='none';
		document.getElementById("mWasserVBackground").style.display='none';
		document.getElementById("luftDichteBackground").style.display='block';
		document.getElementById("luftDichte").style.display='block'; }
};

var closeDiv = function (id) {																								//Close Button Funktion
		var background = id+"Background";
	  document.getElementById(id).style.display='none';
		document.getElementById(background).style.display='none';
};