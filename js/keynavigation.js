document.addEventListener("keydown", keyDownTextField, false);

function keyDownTextField(e) {
	var keyCode = e.keyCode;
	var activePage;

	for(var i = 1; i <= 5; i++){	
		if($("#page_" + i).css("display") != 'none'){
			activePage = "#page_" + i;
		}
	}

	switch (keyCode) {
		case 49:
			changePage(activePage, "#page_1");
			break;
		case 50:
			changePage(activePage, "#page_2");
			break;
		case 51:
			changePage(activePage, "#page_3");
			break;
		case 52:
			changePage(activePage, "#page_4");
			break;
		case 53:
			changePage(activePage, "#page_5");
			break;
	}
}

function changePage(activePage, newPage){
	animationSpeed = 500;

	$(activePage).fadeOut(animationSpeed, function(){
				$(newPage).fadeIn(animationSpeed);
			});
}
