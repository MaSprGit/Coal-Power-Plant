var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};

var qStrom = function() {
    var mSpwNd = Number(document.getElementById("mSpwNd").value.replace(',','.'));
		var hndEin = Number(document.getElementById("hndEin").value.replace(',','.'));
		var hndAus = Number(document.getElementById("hndAus").value.replace(',','.'));
		var mSpwB = Number(document.getElementById("mSpwB").value.replace(',','.'));
		var hSwb = Number(document.getElementById("hSwb").value.replace(',','.'));
		var mSt = Number(document.getElementById("mSt").value.replace(',','.'));
		var hSt1 = Number(document.getElementById("hSt1").value.replace(',','.'));
		var hSt2 = Number(document.getElementById("hSt2").value.replace(',','.'));	
		var mSpwHd = Number(document.getElementById("mSpwHd").value.replace(',','.'));
		var hhdEin = Number(document.getElementById("hhdEin").value.replace(',','.'));
		var hhdAus = Number(document.getElementById("hhdAus").value.replace(',','.'));
		
		var qnd = mSpwNd*(hndAus-hndEin)/1000;
		var qsbw = (mSpwB*hSwb-mSpwNd*hndAus)/1000;
		var pst = mSt*(hSt1-hSt2)/1000;
		var qhd = mSpwHd*(hhdAus-hhdEin)/1000;
		var qswv = (qnd+qsbw+pst+qhd);
		
		document.getElementById("qnd").value = rundKomma(qnd);
		document.getElementById("qsbw").value = rundKomma(qsbw);
		document.getElementById("pst").value = rundKomma(pst);
		document.getElementById("qhd").value = rundKomma(qhd); 	
		document.getElementById("qswv").value = rundKomma(qswv); 
};
