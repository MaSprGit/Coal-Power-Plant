var mKohleBer = function() { 				 										 												//Berechnung Kohlemassenstrom
		var pBrutto = Number(document.getElementById("pbrutto").value.replace(',','.'));
		var wGrad = Number(document.getElementById("wgrad").value.replace(',','.'));
		var hWert = Number(document.getElementById("hwert").value.replace(',','.'));
		var mKohle = (pBrutto*100/wGrad)/hWert;
		document.getElementById("mKohle").value = rundKomma(mKohle);
		document.getElementById("mKohleth").value = rundKomma(mKohle);
		document.getElementById("mKohleth").value = rundKomma(mKohle);
			
};
var cpKohleBer = function() {																			              //Berechnung cp Kohle
   var fb = Number(document.getElementById("fbKohle").value.replace(',','.'));
	 var asche = Number(document.getElementById("asche").value.replace(',','.'));
	 var cpkWaf = (1+0.0095*fb)*0.9719;
	 var wert = (cpkWaf*(100-asche)+0.75*asche)*0.01;
	 document.getElementById("cpKohleBer").value = rundKomma3(wert);
	 document.getElementById("swkKohle").value = rundKomma3(wert);
};
var wStrom = function() {																					              // Berechnung Trocknungs-Wärmestrom
    var mKohle, kohleF, kohleRf, swkKohle,  tempKNach;
		mKohle = Number(document.getElementById("mKohle").value.replace(',','.'));
		kohleF = Number(document.getElementById("kohleF").value.replace(',','.'))/100;
		kohleRf = Number(document.getElementById("kohleRf").value.replace(',','.'))/100; 		
		swkKohle = Number(document.getElementById("swkKohle").value.replace(',','.')); 			
		tempKNach = Number(document.getElementById("tempKNach").value.replace(',','.')); 
		
		if (kohleRf > kohleF) {
		  alert("Restfeuchte ist höher als der Wassergehalt der Kohle!");
			document.getElementById("wStrom").value ="";
			return;
		}
		var term1 = (kohleF-(1-kohleF)/(1-kohleRf)*kohleRf)*(2257 + 1.86*(tempKNach-100));
		var term2 = ((1-kohleF)/(1-kohleRf)*kohleRf*4.189*(tempKNach-100)+kohleF*314.175);
		var term3 = (1-kohleF)*swkKohle*(tempKNach-25);
		var wstrome = mKohle*(term1+term2+term3)/1000;
		document.getElementById("wStrom").value = rundKomma(wstrome);	
};

var massHLuft = function() { 																				 						// Berechnung Trocknungsmittelmassenstrom
    var cpHLuft = Number(document.getElementById("cpHLuft").value.replace(',','.'));
		var tempHLuft = Number(document.getElementById("tempHLuft").value.replace(',','.'));
		var tempKohle2 = Number(document.getElementById("tempKNach").value.replace(',','.'));
		var wStrom = Number(document.getElementById("wStrom").value.replace(',','.'))*1000;
		
		var wert = wStrom/(cpHLuft*(tempHLuft-tempKohle2));
		document.getElementById("massHLuft").value = rundKomma(wert);		
};


var rundKomma = function(x) {       																						//Runden auf zwei Stellen hinter Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};
var rundKomma3 = function(x) {       																						//Runden auf zwei Stellen hinter Komma
    var zahl = (Math.round(x*1000)/1000).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+4);
};
	