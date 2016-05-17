document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
	var keyCode = e.keyCode;


	switch (keyCode) {
		case 13:
			alert("You hit the enter key.");
			break;
		case 49:
			window.location.replace('page1.html');
			break;
		case 50:
			window.location.replace('page2.html');
			break;
		case 51:
			window.location.replace('page3.html');
			break;
		case 52:
			window.location.replace('page4.html');
			break;
		case 53:
			window.location.replace('page5.html');
			break;
		default:
			alert(keyCode);
	}


}
