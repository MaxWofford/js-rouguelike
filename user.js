
function playerInit () {
	player_position = { x : Math.floor(Math.random() * map_width), y : Math.floor(Math.random() * map_height) }
    starting_position = JSON.parse(JSON.stringify(player_position));
}

document.addEventListener('keydown', function(event) {
    setOnMap (player_position.y, player_position.x, "_")
    if(event.keyCode == 37) {
        // move('left');
        player_position.x -= 1
    }
    else if(event.keyCode == 38) {
        // move('up');
        player_position.y -= 1
    }
    else if(event.keyCode == 39) {
        // move('right');
        player_position.x += 1
    }
    else if(event.keyCode == 40) {
        // move('down');
        player_position.y += 1
    }
    console.info(player_position)
    renderMap();
    detectCollisions();
});