
var div1 = document.getElementById("one");

function fnOutputNumbers(newNumber, myNumber) {
	var arrA  = [1,2,3,4,5,6,7,8,9,10];
	var l = arrA.length;

	for(var i=0;i < newNumber; i++) {
		if (arrA[i] == 3) {
			// continue;
			fnOther(myNumber);
		} else {
			// div1.innerHTML += arrA[i];
			newNumber(myNumber);
		}
	}
	newNumber(myNumber);
}
function fnOther(nr) {
	div1.innerHTML += nr;
}







// var a = JSON.stringify({'name': 'remko'});

// var a = {'name': 'remko', 'lastname': 'denikker'};

