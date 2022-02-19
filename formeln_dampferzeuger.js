var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};

var qStrom = function() {
    var mSpw = Number(document.getElementById("mSpw").value.replace(',','.'));
		var hvwEin = Number(document.getElementById("hvwEin").value.replace(',','.'));
		var hvdEin = Number(document.getElementById("hvdEin").value.replace(',','.'));
		var huehEin = Number(document.getElementById("huehEin").value.replace(',','.'));
		var huehAus = Number(document.getElementById("huehAus").value.replace(',','.'));
		var mZue = Number(document.getElementById("mZue").value.replace(',','.'));
		var hzueEin = Number(document.getElementById("hzueEin").value.replace(',','.'));
		var hzueAus = Number(document.getElementById("hzueAus").value.replace(',','.'));
		
		var qvw = mSpw*(hvdEin-hvwEin)/1000;
		var qvd = mSpw*(huehEin-hvdEin)/1000;
		var queh = mSpw*(huehAus-huehEin)/1000;
		var qzue = mZue*(hzueAus-hzueEin)/1000;
		
		document.getElementById("qvw").value = rundKomma(qvw);
		document.getElementById("qvd").value = rundKomma(qvd);
		document.getElementById("queh").value = rundKomma(queh);
		document.getElementById("qzue").value = rundKomma(qzue); 	
};

var auswertung = function() {
		var qvw = Number(document.getElementById("qvw").value.replace(',','.'));
		var qvd = Number(document.getElementById("qvd").value.replace(',','.'));
		var queh = Number(document.getElementById("queh").value.replace(',','.'));
		var qzue = Number(document.getElementById("qzue").value.replace(',','.'));
		
		var wert = qvw+qvd+queh+qzue;
		document.getElementById("qnutz").value = rundKomma(wert);		

};

var verluste = function() {
		var qnutz = Number(document.getElementById("qnutz").value.replace(',','.'));
		
		var wert = 20*(Math.pow(qnutz, 0.7))*(Math.pow(10, (-3)));
		document.getElementById("qstr").value = rundKomma(wert);			
};