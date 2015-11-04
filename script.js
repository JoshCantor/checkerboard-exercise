var Board = function (numberOfTiles) {
	var board = [];
	for (i = 1; i < numberOfTiles; i++) {
		var color = "red";
		if (i % 2 !== 0) {
			color = "black";
		}
		var tile = new Tile(i, color);
		board.push(tile);
	}
	this.board = board;
}

var Tile = function (name, color) {
	var name = document.createElement("div");
	document.body.appendChild(name);
	name.style.width = "11.1%";
	name.style.paddingBottom = "11.1%"
	name.style.float = "left";
	name.style.background = color
	
}

var board = new Board(64);
console.log(board);