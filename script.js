function createBoard (numberOfTiles) {
	var aValue = 0;
	var color1 = "rgba(255, 0, 0, " + aValue + ")";
	var color2 = "rgba(0, 0, 255, " + aValue + ")";

	for (i = 0; i < numberOfTiles; i++) {
		aValue += (1 / numberOfTiles);	
		color1 = "rgba(255, 0, 0, " + aValue + ")";
		color2 = "rgba(0, 0, 255, " + aValue + ")";
		console.log(color2);																		
		if (i % 2 !== 0) {
			var tile =  createTile(color1);
			document.body.appendChild(tile);
		} else {
			var tile =  createTile(color2);
			document.body.appendChild(tile);
		}
		
	}
}

function createTile (color) {
	var tile = document.createElement("div");
	tile.style.width = "11.1%";
	tile.style.paddingBottom = "11.1%"
	tile.style.float = "left";
	tile.style.backgroundColor = color
	return tile;
}

createBoard(63);

