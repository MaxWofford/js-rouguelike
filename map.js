// Init
function mapInit () {
	max_size = 20;

	map_width = Math.floor((Math.random() * max_size + max_size) / 2);
	map_height = Math.floor((Math.random() * max_size + max_size) / 2);

	boardsize = { x : map_width, y : map_height }
	board = [];
}

function generateBoard () {
	for (var i = 0; i < map_height; i++) {
		var rows = [];
		for (var n = 0; n < map_width; n++) {
			rows.push("▮");
		};
		board.push(rows);
	};
}

function renderMap () {
	render_data = [];
	render_data = JSON.parse(JSON.stringify(board));

	render_data[player_position.y][player_position.x] = "@";
	document.getElementById('game-area').innerHTML = "";
	for (var i = 0; i < render_data.length; i++) {
		var renderedRow = document.createElement("p");
		renderedRow.innerHTML = render_data[i].join("");
		document.getElementById('game-area').appendChild(renderedRow);
	};
}

function setOnMap (y,x,symbol) {
	board[y][x] = symbol;
}