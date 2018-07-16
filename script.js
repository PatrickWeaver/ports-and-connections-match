// Ports and Connections Game


//make array of objects
var img_array = [
  {
    type: "port",
    name: "USB-A",
    image: "/card-images/USBA_Port.jpg",
    credit: "Mouse",
    creditLink: "https://www.mouse.org"
  },
  {
    type: "plug",
    name: "USB-A",
    image: "/card-images/USBA_Plug.png",
    credit: "Marco Verch",
    creditLink: "https://www.flickr.com/photos/30478819@N08/"
  },
  {
    type: "port",
    name: "HDMI",
    image: "/card-images/HDMI_Port.jpg",
    credit: "Mouse",
    creditLink: "https://www.mouse.org"
  },
  {
    type: "plug",
    name: "HDMI",
    image: "/card-images/HDMI_Plug.png",
    credit: "D-Kuru",
    creditLink: "https://commons.wikimedia.org/wiki/File:HDMI_connector-male_2_sharp_PNr%C2%B00059.jpg"
  },
  {
    type: "port",
    name: "VGA",
    image: "/card-images/VGA_Port.png",
    credit: "Duncan Lithgow",
    creditLink: "https://commons.wikimedia.org/wiki/File:SVGA_port.jpg"
  },
  {
    type: "plug",
    name: "VGA",
    image: "/card-images/VGA_Plug.png",
    credit: "Evan-Amos",
    creditLink: "https://commons.wikimedia.org/wiki/File:Vga-cable.jpg"
  },
  {
    type: "port",
    name: "Audio3.5",
    image: "/card-images/Audio_Port.png",
    credit: "Bubba73",
    creditLink: "https://commons.wikimedia.org/wiki/File:USB_2_and_3.jpg"
  },
  {
    type: "plug",
    name: "Audio3.5",
    image: "/card-images/Audio_Plug.png",
    credit: "An3k",
    creditLink: "https://commons.wikimedia.org/wiki/File:Klinkenstecker_5-polig.jpg"
  },
  {
    type: "port",
    name: "SD Card",
    image: "/card-images/SD_Port.png",
    credit: "Seagul",
    creditLink: "https://pixabay.com/en/usb-port-sd-card-laptop-sound-829329/"
  },
  {
    type: "plug",
    name: "SD Card",
    image: "/card-images/SD_Plug.png",
    credit: "Ivob",
    creditLink: "https://commons.wikimedia.org/wiki/File:Flash_memory_cards_size.jpg"
  },
  {
    type: "port",
    name: "Ethernet",
    image: "/card-images/Ethernet_Port.png",
    credit: "Asim18",
    creditLink: "https://commons.wikimedia.org/wiki/File:Adsl_connections.jpg"
  },
  {
    type: "plug",
    name: "Ethernet",
    image: "/card-images/Ethernet_Plug.png",
    credit: "David Monniaux",
    creditLink: "https://commons.wikimedia.org/wiki/Ethernet#/media/File:Ethernet_RJ45_connector_p1160054.jpg"
  },
  {
    type: "port",
    name: "Thunderbolt/Mini Display Port",
    image: "/card-images/MiniDisplay_Port.png",
    credit: "Aurélien Selle",
    creditLink: "https://commons.wikimedia.org/wiki/File:Mini_DisplayPort_on_Apple_MacBook.jpg"
  },
  {
    type: "plug",
    name: "Thunderbolt/Mini Display Port",
    image: "/card-images/MiniDisplay_Plug.png",
    credit: "Palthrow",
    creditLink: "https://commons.wikimedia.org/wiki/File:Mini_DisplayPort_on_Apple_MacBook.jpg"
  },
  {
    type: "port",
    name: "USB-C",
    image: "/card-images/USBC_Port.png",
    credit: "Maurizio Pesce",
    creditLink: "https://www.flickr.com/photos/pestoverde/17161161357/"
  },
  {
    type: "plug",
    name: "USB-C",
    image: "/card-images/USBC_Plug.png",
    credit: "Santeri Viinamäki",
    creditLink: "https://commons.wikimedia.org/w/index.php?curid=60401805"
  }
]

var table = 9, chair = 4, light = 3;

function shuffleBoard(img_array){
  var i = img_array.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1));
    temp = img_array[j];
    img_array[j] = img_array[i];
    img_array[i] = temp;
  }
}
// Build Board from HTML inside $( "#memory-board" )



/*
Card States:
1. Unshown
2. Shown
3. Matched
*/


// 1. Build a board with only backs of cards showing
//version 1.1: randomize cards
function buildBoard() {
  shuffleBoard(img_array);
  for (var i in img_array) {
    var img = img_array[i];
    $( "#memory-board" ).append("<div class='card' state='unshown' cardName='" + img.name + "' cardType='" + img.type + "' id="+ img.name + img.type +"><div class = 'background-image'><img src = 'card-images/card-background.png'></div><div class='card-image'><img src=\"" + img.image+"\"></div>"+"</div>")
  var node = document.createElement("LI");
    node.id = "credit-Link"+i;
    node.innerHTML = img.name+" "+img.type+" by <a href="+img.creditLink+" target='_blank'>"+img.credit+"</a>"
  document.getElementById("image-credits").appendChild(node);
  }
}
var stepcount = 0;
buildBoard();

// 1.5 Wait for player to do something


// 2. Listen for players clicking on cards
$( ".card" ).click( function() {
  console.log("You clicked!");
  checkClick($(this));
});

// 3. Check how many cards player has shown, check card state of clicked card
function checkClick(card){
  console.log("checkClick()");
  //3A: clicked on unshown card?
  // 3B: checkGame()
  var cardsClicked = []; //keeping track of cards clicked
  var allCards = $( ".card" );
  console.log(allCards);
  allCards.each(function() {
    var cardStatus = $(this).attr("state");

    if (cardStatus === "shown") {
      cardsClicked.push($(this));
      stepcount++;
    }
  });
  console.log("Cards Clicked:");
  console.log(cardsClicked);

  if (cardsClicked.length < 2) {
    $(card).find(".background-image").hide();
    $(card).find(".card-image").show();
//    $(card).find(".card-name").css('visibility','hidden');
    $(card).attr("state", "shown");

    if (cardsClicked.length === 1) {
      var card1 = cardsClicked[0];
      var card2 = $(card);
      if (!(card1.attr("cardName") === card2.attr("cardName") && card1.attr("cardType") === card2.attr("cardType"))) {
        cardsClicked.push($(card));
      }
    } else {
      cardsClicked.push($(card));
    }
  }
  if (cardsClicked.length === 2) {
    checkMatch(cardsClicked[0], cardsClicked[1])
  }

  // Is clicking a third card a problem?
}

// 4. Checking for same name different type && changing state
function checkMatch(card1, card2) {
  console.log("checkMatch()");
  if (card1.attr("cardName") === card2.attr("cardName") && card1.attr("cardType") != card2.attr("cardType")) {
    show(card1, card2);
  return
  } else {
    setTimeout(function(){unshow(card1, card2)},1000);
  }
}
// 4A. Cards are matched -> 6
// 4b. Cards are not matched -> 5

// 5. Unshow cards -> 1.5
function unshow(card1, card2){
  console.log("unshow()");
 // card1.find(".card-name").css('display', 'inline-block');
  card1.find(".card-image").hide();
  card1.attr("state", "unshown");
  card1.find(".background-image").show();
//  card2.find(".card-name").css('display', 'inline-block');
  card2.find(".card-image").hide();
  card2.attr("state", "unshown");
  card2.find(".background-image").show();
  }
// 6.  Result of matched pair
function show( card1, card2){
  console.log("show()");
  card1.attr("state", "matched");
  card2.attr("state", "matched");
  var node = document.createElement("LI");
  var textnode = document.createTextNode(card1.attr("cardName"));
  node.appendChild(textnode);
  document.getElementById("match-list").appendChild(node);
  card1.off("click");
  card2.off("click");
  checkGame();
}
// 7. Check game state
function checkGame() {
  console.log("checkGame()");
  var gameOver = true;
  var allCards = $( ".card" );

  allCards.each(function() {
    var cardStatus = $(this).attr("state");
    if (cardStatus != "matched") {
      gameOver = false;
    }
  });

  if (gameOver) { // 7B: All are matched -> 8
    setTimeout(function() {youWin()}, 100);
  } else { // 7A: Not all are matched -> 1.5
    return
  }
}

// 8. You win! message -> 9
function youWin() {
    document.getElementById("step-count").innerHTML = stepcount;
    $("#alert").show();

  /*    if (confirm("Restart Game!")) {
        window.location.reload(true);
    } else {
    }
    document.getElementById("step-count").innerHTML = "You completed the game in "+stepcount+" steps!";
*/
}

// 9. Optional: restart game
// 9A: YES -> 1

// 9B: NO -> nothing
