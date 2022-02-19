var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};
var ohneKomma = function (x) {																	 								//Keine Komma-Stelle
    var zahl = (Math.round(x).toString());
		return zahl;
};
var rundKomma3 = function(x) {       																		//Runden auf wariable Stellen mit Komma
    var zahl = (Math.round(x*1000)/1000).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.000':'000';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+4);
};

var mSO2 = function() {
		var mKohle = Number(document.getElementById("mKohle").value.replace(',','.'));
		var sGehalt = Number(document.getElementById("sGehalt").value.replace(',','.'));

		var wert = 2*mKohle*sGehalt/100;
  	document.getElementById("mSO2Ber").value = rundKomma3(wert);
		document.getElementById("mSO2").value = rundKomma3(wert); 	
};

var mKalk = function() {
		var mSO2 = Number(document.getElementById("mSO2").value.replace(',','.'));
		var wRea = Number(document.getElementById("wRea").value.replace(',','.'));
		
		var wert = 100/64*wRea/100*mSO2;
  	document.getElementById("mKalk").value = rundKomma3(wert);	
};

var mGips = function() {
		var mSO2 = Number(document.getElementById("mSO2").value.replace(',','.'));
		var wRea = Number(document.getElementById("wRea").value.replace(',','.'));
		
		var wert = 172/64*wRea/100*mSO2;
  	document.getElementById("mGips").value = rundKomma3(wert);	
};

var mSO2Rest = function() {
		var mSO2 = Number(document.getElementById("mSO2").value.replace(',','.'));
		var wRea = Number(document.getElementById("wRea").value.replace(',','.'))/100;
		var mRG = Number(document.getElementById("mRG").value.replace(',','.'));
		
		var wert = (1-wRea)*mSO2*3600;
  	document.getElementById("mSO2Rest").value = rundKomma(wert);	
		var xSO2 = (1-wRea)*mSO2/mRG*1000000;
		document.getElementById("xSO2").value = ohneKomma(xSO2);	
};
