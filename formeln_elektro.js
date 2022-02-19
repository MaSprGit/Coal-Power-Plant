var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};

var rundKomma3 = function(x) {       																		//Runden auf wariable Stellen mit Komma
    var zahl = (Math.round(x*1000)/1000).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.000':'000';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+4);
};

var nvRG = function() {
		var mKohle = Number(document.getElementById("mKohle").value.replace(',','.'));
		var hKohle = Number(document.getElementById("hKohle").value.replace(',','.'));

		var wert = mKohle*(0.2377*hKohle+0.449);
  	document.getElementById("nvrgBer").value = rundKomma(wert);
		document.getElementById("nvrg").value = rundKomma(wert); 	
};

var aEl = function() {
		var nvrg = Number(document.getElementById("nvrg").value.replace(',','.'));
		var trg = Number(document.getElementById("trg").value.replace(',','.'));
		var wel = Number(document.getElementById("wel").value.replace(',','.'))/100;
		var mg = Number(document.getElementById("mg").value.replace(',','.'));

		var wert = nvrg*(trg+273.15)/298.15/0.2/mg*Math.log(1/(1-wel));	
  	document.getElementById("aEl").value = Math.round(wert);	
};

var aQ = function() {
		var nvrg = Number(document.getElementById("nvrg").value.replace(',','.'));
		var trg = Number(document.getElementById("trg").value.replace(',','.'));
		var vrg = Number(document.getElementById("vrg").value.replace(',','.'));
		
		var wert = nvrg/vrg*(trg+273.15)/298.15;
  	document.getElementById("aq").value = Math.round(wert);	
};
