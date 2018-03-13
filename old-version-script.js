// Only execute this code once the DOM (all other content) is loaded.
document.addEventListener("DOMContentLoaded", function(event) {
  newBoard();
});

var memory_array = [
  ["VGA", "VGA_port.jpg"], ["VGA", "Vga-cable.jpg"], ["USB", "USB_Connector.jpg"], ["USB", "usbcable1.jpg"], ["Thunder", "Thunderboltcable.jpg"], ["Thunder", "Thunderbolt-port-MacBook.png"], ["SD", "sdslot-sm.jpg"], ["SD", "MicroSDcard.jpg"], ["HDMI", "hdmi-cable-pv.jpg"], ["HDMI", "HDMI_connector.jpg"], ["Firewire", "Firewire6-pin.jpg"], ["Firewire", "firewirePorts.jpg"], ["Ethernet", "EthernetCableBlue2.jpg"], ["Ethernet", "ethernetconnections.jpg"], ["Audio", "audio-sm.jpg"], ["Audio", "audiojack-sm.jpg"]
];

var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;

Array.prototype.memory_tile_shuffle = function(){
  var i = this.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = this[j];
    this[j] = this[i];
    this[i] = temp;
  }
}

function newBoard(){
  tiles_flipped = 0;
  var output = '';
  memory_array.memory_tile_shuffle();
  for(var i = 0; i < memory_array.length; i++){
    value = memory_array[i][0];
    image = memory_array[i][1];
    output += '<div id="tile_'+ i +'" onclick="memoryFlipTile(this, \'' + value + '\', \'' + image + '\')"></div>';
  }
  document.getElementById('memory_board').innerHTML = output;
}

function memoryFlipTile(tile, val, image){
  if(tile.innerHTML == "" && memory_values.length < 2){
    tile.style.background = '#FFF';
    tile.innerHTML = "<img class='card-image' src=Images/" + image + " / >";
    if(memory_values.length == 0){
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
    } else if(memory_values.length == 1){
      memory_values.push(val);
      memory_tile_ids.push(tile.id);
      if(memory_values[0][0] == memory_values[1][0]){
        tiles_flipped += 2;
        // Clear both arrays
        memory_values = [];
        memory_tile_ids = [];
        // Check to see if the whole board is cleared
        if(tiles_flipped == memory_array.length){
          alert("Congratulations! Complete Match! Generating new board");
          document.getElementById('memory_board').innerHTML = "";
          newBoard();
        }
      } else {
        function flip2Back(){
          // Flip the 2 tiles back over
          var tile_1 = document.getElementById(memory_tile_ids[0]);
          var tile_2 = document.getElementById(memory_tile_ids[1]);
          tile_1.style.background = 'url(match-card.png) no-repeat';
          tile_1.innerHTML = "";
          tile_2.style.background = 'url(match-card.png) no-repeat';
          tile_2.innerHTML = "";
          // Clear both arrays
          memory_values = [];
          memory_tile_ids = [];
        }
        setTimeout(flip2Back, 700);
      }
    }
  }
}