var rundKomma = function(x) {       																						//Runden auf zwei Stellen mit Komma
    var zahl = (Math.round(x*100)/100).toString();
		zahl += (zahl.indexOf('.') ===-1)? '.00':'00';
		var p = zahl.indexOf('.');
		return zahl.substring(0, p) + ',' + zahl.substring(p+1, p+3);
};

var pMech = function() {
    var mHDein = Number(document.getElementById("mHDein").value.replace(',','.'));
		var hHDein = Number(document.getElementById("hHDein").value.replace(',','.'));
		var mHDaus = Number(document.getElementById("mHDaus").value.replace(',','.'));
		var hHDaus = Number(document.getElementById("hHDaus").value.replace(',','.'));
		//var wHD = Number(document.getElementById("wHD").value.replace(',','.'))/100;
		
		var mMDein = Number(document.getElementById("mMDein").value.replace(',','.'));
		var hMDein = Number(document.getElementById("hMDein").value.replace(',','.'));
		var mMDaus = Number(document.getElementById("mMDaus").value.replace(',','.'));
		var hMDaus = Number(document.getElementById("hMDaus").value.replace(',','.'));
		//var wMD = Number(document.getElementById("wMD").value.replace(',','.'))/100;
		
		var mNDein1 = Number(document.getElementById("mNDein1").value.replace(',','.'));
		var hNDein1 = Number(document.getElementById("hNDein1").value.replace(',','.'));
		var mNDaus1 = Number(document.getElementById("mNDaus1").value.replace(',','.'));
		var hNDaus1 = Number(document.getElementById("hNDaus1").value.replace(',','.'));
		//var wND1 = Number(document.getElementById("wND1").value.replace(',','.'))/100;
		
		var mNDein2 = Number(document.getElementById("mNDein2").value.replace(',','.'));
		var hNDein2 = Number(document.getElementById("hNDein2").value.replace(',','.'));
		var mNDaus2 = Number(document.getElementById("mNDaus2").value.replace(',','.'));
		var hNDaus2 = Number(document.getElementById("hNDaus2").value.replace(',','.'));
		//var wND2 = Number(document.getElementById("wND2").value.replace(',','.'))/100;
		
		var wG = Number(document.getElementById("wG").value.replace(',','.'))/100;
		
		var phd = ((mHDein*hHDein)-(mHDaus*hHDaus))/1000;
		var pmd = ((mMDein*hMDein)-(mMDaus*hMDaus))/1000;
		var pnd1 = ((mNDein1*hNDein1)-(mNDaus1*hNDaus1))/1000;
		var pnd2 = ((mNDein2*hNDein2)-(mNDaus2*hNDaus2))/1000;
		var pges = phd+pmd+pnd1+pnd2;
		var pel = pges*wG;
		
		document.getElementById("phd").value = rundKomma(phd);
		document.getElementById("pmd").value = rundKomma(pmd);
		document.getElementById("pnd1").value = rundKomma(pnd1);
		document.getElementById("pnd2").value = rundKomma(pnd2); 	
		document.getElementById("pges").value = rundKomma(pges); 
		document.getElementById("pel").value = rundKomma(pel);
};
