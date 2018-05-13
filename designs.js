// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let inputHeight = $('#inputHeight').val();
	let inputWeight = $('#inputWeight').val();
	let pixelCanvas = $('#pixelCanvas');
// Your code goes here!
	console.log(inputHeight+"h");
	console.log(inputWeight+"w");

	pixelCanvas.children().remove();
	for (let row = 0; row < inputHeight; row++) {
		let grid = "<tr>";
		for (let column = 0; column < inputWeight; column++) {
			grid += "<td></td>";
		}
		pixelCanvas.append(grid + "</tr>");
	}
}

 $('#pixelCanvas').on('click', 'td', function (evt) {
	console.log("insid canvas")
    let color = $('#colorPicker').val();
    //$(evt.target).css('background', color);
	
	preColor = $(evt.target).css("background-color");
		if(preColor == "rgb(255, 255, 255)"
			|| preColor == "rgba(0, 0, 0, 0)"){
			$(evt.target).css("background-color",color);
		}else{
			$(evt.target).css("background-color","rgb(255, 255, 255)");
		}
});




