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

var wandflBer = function() {
		var volBel = Number(document.getElementById("volBel").value.replace(',','.'));
		var querBel = Number(document.getElementById("querBel").value.replace(',','.'));
		var zugefE = Number(document.getElementById("zugefE").value.replace(',','.'));
		
		var aBK = Math.sqrt((zugefE/querBel));
		var hBK = (zugefE/volBel)/(zugefE/querBel);//querBel/volBel;
		var wandfl = (2*(zugefE/querBel))+(4*(aBK*hBK));
		
		document.getElementById("aWand").value = rundKomma(wandfl);
		document.getElementById("wandflBer").value = rundKomma(wandfl);
};
var konakow = function() {
    var cpRG = Number(document.getElementById("cpRG").value.replace(',','.'));
		var epsilon = Number(document.getElementById("epsilon").value.replace(',','.'));
		var tempW = Number(document.getElementById("tempW").value.replace(',','.'))+273.15;
		var aWand = Number(document.getElementById("aWand").value.replace(',','.'));
		var massRG = Number(document.getElementById("massRG").value.replace(',','.'));
		var tempAd = Number(document.getElementById("tempAd").value.replace(',','.'))+273.15;
		var n = Number(document.getElementById("nluft").value.replace(',','.'));
		var sigma = 5.67*Math.pow(10, -8);		
		
		var kona = massRG*cpRG/(epsilon*(sigma/1000)*aWand*Math.pow((tempAd), 3));
		document.getElementById("koZahl").value = rundKomma(kona);

		var wert = Math.pow(Math.pow(kona*tempAd/2, 2) + (Math.pow(tempAd, 2)*(kona + Math.pow(tempW/tempAd, 4))), 0.5) - (kona*tempAd/2);
		document.getElementById("tempE").value = rundKomma(wert-273.15);
};
var qFlossenwand = function() {
		var epsilon = Number(document.getElementById("epsilon").value.replace(',','.'));
		var sigma = 5.67*Math.pow(10, -8);
		var aWand = Number(document.getElementById("aWand").value.replace(',','.'));
		var tempW = Number(document.getElementById("tempW").value.replace(',','.'))+273.15;
		var tempAd = Number(document.getElementById("tempAd").value.replace(',','.'))+273.15;
		var tempE = Number(document.getElementById("tempE").value.replace(',','.'))+273.15;
		
		var wert = epsilon*sigma/1000*aWand*(Math.pow(tempAd ,2)*Math.pow(tempE ,2)-Math.pow(tempW, 4))/1000;
		document.getElementById("qFW").value = rundKomma(wert);
};

var verluste = function() {
		var tempSch = Number(document.getElementById("tempSch").value.replace(',','.'));
		var mSch = Number(document.getElementById("mSch").value.replace(',','.'));
				
		var qsch = mSch*2.26*(tempSch-25)/1000;	
		document.getElementById("qsch").value = rundKomma(qsch);
		
};