const iRange = $( "#slider" );
const pyr = $( "#pyramid" );
const select = $( "#select" );
const high = $( "#high" );

function drawPyramid(vrange){
	const symind = select.val();
	var sym = symind;
	var vrange = iRange.val();
	for (var row = 1; row <= vrange; row++){
		var pRow = $( "<div/>",{
		'class': "row",
		id: "row" + row
		}).appendTo(pyr);
		var blEnd = $( "<div/>",{
		'class': "block",
		id: "blockEnd"
		});
		blEnd.html(sym);
		let nSp = 0;
		let nBl = 0;
		for (var col = 1; col <= vrange; col++){
			var sp = $( "<div/>",{
			"class": "block",
			id: "block"
			});
			sp.html(' ');
			if (vrange - row < col){
				var bl = $( "<div/>", { 
				'class': "block",
				id: "block" + row + "-" + nBl
				}).appendTo(pRow);
				nBl += 1;
			}
			else {
				var sp = $( "<div/>", { 
				'class': "space",
				id: "space" + row + "-" + nSp
				}).appendTo(pRow);
				nSp += 1;
			}
		}
		blEnd.appendTo(pRow);
	}
	$( '.block' ).text(sym);
}
var vlrange = $('<div/>');
iRange.change(function(){
	pyr.html("");
	vlrange.html('');
	drawPyramid();
	vlrange.html(iRange.val());
	vlrange.appendTo(high);
});
select.change(function() {
	pyr.html('');
	drawPyramid();
});