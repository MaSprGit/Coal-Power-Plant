var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};
var ohneKomma = function (x) {																	 								//Keine Komma-Stelle
		var zahl = rundKomma(x);
		var k = zahl.indexOf(',');
		return zahl.substring(0, k);
};

var kStrom = function() {
		var mkw = Number(document.getElementById("mkw").value.replace(',','.'));
		var tempkwEin = Number(document.getElementById("tempkwEin").value.replace(',','.'));
		var tempkwAus = Number(document.getElementById("tempkwAus").value.replace(',','.'));

		var wert = mkw*4.189*(tempkwEin-tempkwAus)/1000;
  	document.getElementById("kStrom").value = rundKomma(wert); 	
};

var mLuft = function() {
		var dmw = Number(document.getElementById("mkwV").value.replace(',','.'));
		var lt1 = Number(document.getElementById("templEin").value.replace(',','.'));
		var lt2 = Number(document.getElementById("templAus").value.replace(',','.'));
		var pl = Number(document.getElementById("lDruck").value.replace(',','.')); 
		var roh1 = Number(document.getElementById("lFeuchte").value.replace(',','.'))/100;
		
		var pd1 = 611.213*Math.exp(17.5043*lt1/(241.2+lt1))/100;
		var pd2 = 611.213*Math.exp(17.5043*lt2/(241.2+lt2))/100;
		var x1 = 0.622*pd1/((pl/roh1)-pd1);
		var x2 = 0.622*pd2/(pl-pd2);
		var wert = dmw/(x2-x1);
		document.getElementById("mLuft").value = Math.round(wert); 
};

var druckV = function() {
		var droh = Number(document.getElementById("dlDichte").value.replace(',','.'))/1000;
		var hTurm = Number(document.getElementById("hTurm").value.replace(',','.'));
		
		var wert = droh*hTurm*9.81;
		document.getElementById("deltap").value = ohneKomma(wert);
};

var mWasserVBer = function() {
		var mkw = Number(document.getElementById("mkw").value.replace(',','.'));
		var tempkwEin = Number(document.getElementById("tempkwEin").value.replace(',','.'));
		var tempkwAus = Number(document.getElementById("tempkwAus").value.replace(',','.'));
		var templEin = Number(document.getElementById("templEin").value.replace(',','.'));
		var templAus = Number(document.getElementById("templAus").value.replace(',','.'));
		var lFeuchte = Number(document.getElementById("lFeuchte").value.replace(',','.'))/100;
		var lDruck = Number(document.getElementById("lDruck").value.replace(',','.'));
		var sdDruck1 = Number(document.getElementById("sdDruck1").value.replace(',','.'));
		var sdDruck2 = Number(document.getElementById("sdDruck2").value.replace(',','.'));
		
		var x1 = 0.622*sdDruck1/((lDruck/lFeuchte)-sdDruck1);
		var x2 = 0.622*sdDruck2/((lDruck/1)-sdDruck2);
		var h1 = 1.004*templEin + x1*(1.86*templEin+2500);
		var h2 = 1.004*templAus + x2*(1.86*templAus+2500);
		var wert = mkw*4.189*(tempkwEin-tempkwAus)/(((h2-h1)/(x2-x1))-4.189*tempkwAus);
		
		document.getElementById("mkwV").value = rundKomma(wert);
		document.getElementById("mkwVBer").value = rundKomma(wert);  		
		
		document.getElementById("sdDruck1ld").value = document.getElementById("sdDruck1").value;
		document.getElementById("sdDruck2ld").value = document.getElementById("sdDruck2").value;
};

var luftDichteBer = function() {
		var hTurm = Number(document.getElementById("hTurm").value.replace(',','.'));		
		var tl1 = Number(document.getElementById("templEin").value.replace(',','.'));
		var tl2 = Number(document.getElementById("templAus").value.replace(',','.'));
		var p1 = Number(document.getElementById("lDruck").value.replace(',','.'));
		var ps1 = Number(document.getElementById("sdDruck1ld").value.replace(',','.'));
		var ps2 = Number(document.getElementById("sdDruck2ld").value.replace(',','.'));
		var roh1 = Number(document.getElementById("lFeuchte").value.replace(',','.'))/100;
		
		var Rf1 = 287.058/(1-roh1*ps1*roh1/p1*0.377314534);	
		var roh1 = p1*100/(Rf1*(273.15+tl1));				
		var p2 = p1* Math.pow((1 - (0.0065*hTurm/(273.15+tl1))), 5.255);		
		var Rf2 = 287.058/(1-ps2/p2*0.377314534);	
		var roh2 = p2*100/(Rf2*(273.15+tl2));			
		var wert = (roh1-roh2)*1000;
		
		document.getElementById("dlDichteBer").value = rundKomma(wert);
		document.getElementById("dlDichte").value = rundKomma(wert); 
		
		document.getElementById("sdDruck1").value = document.getElementById("sdDruck1ld").value;
		document.getElementById("sdDruck2").value = document.getElementById("sdDruck2ld").value;
};
