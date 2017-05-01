 	var isValidF = isValid;
 	var hideThisF = hideThis;
 	var step = 1;
 	var process = function() {
 	    processPhase(isValidF, hideThisF);
 	}
 	
 	function _(x) {
 	    return document.getElementById(x);
 	}
 	function isValid(text) {
 	    var myRegExp = /[^a-z\d ]/i;
 	    return !(myRegExp.test(text));
 	}
 	function hideThis(step) {
 	    switch (step) {
 	        case 1:
 	            console.log(step);
 	            _("imie").style.display = 'none';
 	            _("mail").style.display = 'block';
 	            break;
 	        case 2:
 	            console.log(step);
 	            _("mail").style.display = 'none';
 	            _("message").style.display = 'block';
 	            break;
 	        case 3:
 	            console.log(step);
 	            _("message").style.display = 'none';
 	            _("submit").style.display = 'block';
 	            break;
 	        case 4:
 	            alert("end");
 	            break;
 	        default:
 	            break;
 	    }
 	}
 	function processPhase(f1, f2) {
 	
 	    var value;
 	    if (step == 1) {
 	        value = _("nameInp").value;
 	    } else if (step == 2) {
 	        value = _("mailInp").value;
 	    } else if (step == 3) {
 	        value = _("nameInp").value;
 	    }
 	    if (f1(value)) {
 	        f2(step);
  	        step++;
 	    }
 	}
 	
