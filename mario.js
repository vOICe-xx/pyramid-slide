const iRange = document.getElementById("slider");
const pyr = document.getElementById("pyramid")
const select = document.getElementById("select");
const high = document.getElementById("high");
function drawPyramid(vrange){
	const symind = select.options.selectedIndex;
	var sym = document.getElementById("select").options[symind].value;
	var vrange = iRange.value;
	for (var row = 1; row <= vrange; row++){
		var pRaw = document.createElement("div");
		pRaw.classList.add("row");
		pRaw.id = "row" + row;
		pyr.appendChild(pRaw)
		var blEnd = document.createElement("div");
		blEnd.innerHTML = sym;
		blEnd.classList.add("block");
		blEnd.id = "blockEnd";
		let nSp = 0;
		let nBl = 0;
		for (var col = 1; col <= vrange; col++){
			var sp = document.createElement("div");
			sp.innerHTML = " ";
			sp.classList.add("block");
			sp.id = "block";
			if (vrange - row < col){
				var bl = document.createElement("div");
				bl.classList.add("block");
				bl.id = "block" + row + "-" + nBl;
				bl.innerHTML = sym;
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
var vlrange = document.createElement("div");
iRange.addEventListener("input", function(event){
pyr.innerHTML = '';
vlrange.innerHTML = '';
drawPyramid();
vlrange.innerHTML = iRange.value;
high.appendChild(vlrange);
});
select.addEventListener("input", function(event) {
pyr.innerHTML = '';
drawPyramid();
});