var footer = function() { 
  
		clearInterval(interval);
	 interval = setInterval(slowUp,10);	 
	 document.getElementById("footer_button").style.display='none';
	 document.getElementById("footer_button_minus").style.display='block';
	 
};
var footerMinus = function() {
	 height = 150;
	 clearInterval(interval);
	 interval = setInterval(slowDown,10);	 
	 document.getElementById("footer_button").style.display='block';
	 document.getElementById("footer_button_minus").style.display='none';
};
var impressum = function() {
    document.getElementById("impressum").style.display='block';		
};
var impressumOut = function() {
    document.getElementById("impressum").style.display='none';
};

var interval;
var height = 0;
function slowUp() {
	 document.getElementById('footer_content').style.height = height + "px";
	 document.getElementById("footer_content").style.display='block';
   height = height + 4;
   if (height >= 150) {
      clearInterval(interval);
			height = 0;
   }
};
function slowDown() {
	 document.getElementById('footer_content').style.height = height + "px";
   height = height - 4;
   if (height <= 0) {
      clearInterval(interval);
			height = 0;
			document.getElementById("footer_content").style.display='none'; 
   }
};	