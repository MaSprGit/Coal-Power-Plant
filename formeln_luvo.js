var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};
var rundKomma3 = function(x) {       																						//Runden auf drei Stellen mit Komma
    var zahl = (Math.round(x*1000)/1000).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+4);
};

var rauchgasBer = function() {																	 								//Rauchgasmenge
		var hKohle = Number(document.getElementById("hKohle").value.replace(',','.'));
		var nluft = Number(document.getElementById("nluft").value.replace(',','.'));
		var mKohle = Number(document.getElementById("mKohle").value.replace(',','.'));
		
		var wert = (0.3308*hKohle+0.638)*nluft*mKohle;
		document.getElementById("mRgBer").value = rundKomma(wert); 	
		document.getElementById("massRG").value = document.getElementById("mRgBer").value;
};

var heissluftBer = function() {																	 								//Rauchgasmenge
		var hKohle = Number(document.getElementById("hKohle1").value.replace(',','.'));
		var nluft = Number(document.getElementById("nluft1").value.replace(',','.'));
		var mKohle = Number(document.getElementById("mKohle1").value.replace(',','.'));
		
		var wert = (0.3163*hKohle+0.566)*nluft*mKohle;
		document.getElementById("mHLBer").value = rundKomma(wert); 	
		document.getElementById("massHL").value = document.getElementById("mHLBer").value;
};

var durchm = function() {
		var mRG = Number(document.getElementById("massRG").value.replace(',','.'));
		var mHL = Number(document.getElementById("massHL").value.replace(',','.'));
		var mLv = Number(document.getElementById("massLv").value.replace(',','.'));
		
		var wert1 = 1.1*(mRG+mHL-mLv)/7;
		var wert2 = Math.sqrt(4*wert1/Math.PI);
		document.getElementById("ageom").value = rundKomma(wert1);
		document.getElementById("durchm").value = rundKomma(wert2);
};
var aheiz = function() {
    var tempRG1 = Number(document.getElementById("tempRG1").value.replace(',','.'));
		var tempRG2 = Number(document.getElementById("tempRG2").value.replace(',','.'));
		var tempHL1 = Number(document.getElementById("tempHL1").value.replace(',','.'));
		var tempHL2 = Number(document.getElementById("tempHL2").value.replace(',','.'));
		var massHL = Number(document.getElementById("massHL").value.replace(',','.'));
		var massLv = Number(document.getElementById("massLv").value.replace(',','.'));
		
		var wert1 = (massHL-massLv)*1.004*(tempHL1-tempHL2);
		document.getElementById("qheiz").value = rundKomma(wert1/1000);
		
		var wert2 = wert1*2/0.012/(0.5*((tempRG1-tempHL1)+(tempRG2-tempHL2)));
		document.getElementById("aheiz").value = Math.round(wert2);
};
