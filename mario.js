function drawPyramid(height){
	var pyr = document.getElementById("pyramid")
	for (var row = 1; row <= height; row++){
		var pRaw = document.createElement("div");
		pRaw.classList.add("row");
		pRaw.id = "row" + row;
		pyr.appendChild(pRaw)
		var blEnd = document.createElement("div");
		blEnd.classList.add("block");
		blEnd.id = "blockEnd";
		let nSp = 0;
		let nBl = 0;
		for (var col = 1; col <= height; col++){
			var sp = document.createElement("div");
			sp.classList.add("space");
			sp.id = "space";
			if (height - row < col){
				var bl = document.createElement("div");
				bl.classList.add("block");
				bl.id = "block" + row + "-" + nBl;
				document.getElementById("row" + row).appendChild(bl);
				nBl += 1;
			}
			else {
				var sp = document.createElement("div");
				sp.classList.add("space");
				sp.id = "space" + row + "-" + nSp;
				document.getElementById("row" + row).appendChild(sp);
				nSp += 1;
			}
    }
		document.getElementById("row" + row).appendChild(blEnd);
  }
}
drawPyramid(8);