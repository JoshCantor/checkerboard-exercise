function createBoard (numberOfTiles) {
	var aValue = 0.1;
	for (i = 0; i < numberOfTiles; i++) {
		if (i % 9 === 0) {
			aValue += 0.1;
																									
		}
		if (i % 2 !== 0) {
			var tile =  createTile("linear-gradient(to top, red, rgba(255,0,0," + aValue + "))");
			document.body.appendChild(tile);
		} else {
			var tile =  createTile("linear-gradient(to top, blue, rgba(0,0,255," + aValue + "))");
			document.body.appendChild(tile);
		}
		
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

