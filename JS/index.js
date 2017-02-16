function Submitted(){
	var prez;
	if(document.getElementById("george").checked){
	
		document.getElementById("GW").style.visibility='visible';
		document.getElementById("AL").style.visibility='hidden';
		document.getElementById("TR").style.visibility='hidden';
		document.getElementById("DT").style.visibility='hidden';
	}
	else if(document.getElementById("abe").checked){
		document.getElementById("GW").style.visibility='hidden';
		document.getElementById("AL").style.visibility='visible';
		document.getElementById("TR").style.visibility='hidden';
		document.getElementById("DT").style.visibility='hidden';
	}
	else if(document.getElementById("teddy").checked){
		document.getElementById("GW").style.visibility='hidden';
		document.getElementById("AL").style.visibility='hidden';
		document.getElementById("TR").style.visibility='visible';
		document.getElementById("DT").style.visibility='hidden';
	}
	else if(document.getElementById("trump").checked){
		document.getElementById("GW").style.visibility='hidden';
		document.getElementById("AL").style.visibility='hidden';
		document.getElementById("TR").style.visibility='hidden';
		document.getElementById("DT").style.visibility='visible';
	}
	else{
		document.getElementById("GW").style.visibility='hidden';
		document.getElementById("AL").style.visibility='hidden';
		document.getElementById("TR").style.visibility='hidden';
		document.getElementById("DT").style.visibility='hidden';
		alert("Please select a radial button!");
		
	}
	return false;
}
function isOneChecked() {
  var chx = document.getElementsByTagName('input');
  for (var i=0; i<chx.length; i++) {
    
    if (chx[i].type == 'radio' && chx[i].checked) {
      return true;
    } 
  }
  // End of the loop, return false
  return false;
}