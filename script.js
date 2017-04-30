 	var step = 0;
function _(x) {
    return document.getElementById(x);
}

function isValid (text) {
 var myRegExp = /[^a-z\d ]/i;
 return (myRegExp.test(text));
 }
 function hideThis(step) {
 	switch (step) {
 		case 1:
 			_("imie").style.display = 'none';
 			_("mail").style.display = 'block';
 			break;
 			case 2:
 			_("mail").style.display = 'none';
 			_("message").style.display = 'block';
 				case 3:
 			_("message").style.display = 'none';
 			_("end").style.display = 'block';
 			break;
 		default:
 			// statements_def
 			break;
 	}
 }
 function processPhase(isValid(text),hideThis(step)) {

 			
 }
 function sendMessage() {
 		
 }