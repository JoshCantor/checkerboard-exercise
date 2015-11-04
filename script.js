function createBoard (numberOfTiles) {
	for (i = 1; i <= numberOfTiles; i++) {
		var color = "red";
		if (i % 2 !== 0) {
			color = "black";
		}
		var tile =  createTile(color);
		document.body.appendChild(tile);
	}
}

function createTile (color) {
	var tile = document.createElement("div");
	tile.style.width = "11.1%";
	tile.style.paddingBottom = "11.1%"
	tile.style.float = "left";
	tile.style.background = color
	return tile;
}

createBoard(63);