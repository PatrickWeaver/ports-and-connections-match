// Ports and Connections Game

//make array of objects
var img_array = [
  {
    type: "port",
    name: "USB-A",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Mk2010",
    creditLink: "https://commons.wikimedia.org/wiki/User:Mk2010"
  },
  {
    type: "plug",
    name: "USB-A",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Marco Verch",
    creditLink: "https://www.flickr.com/photos/30478819@N08/"
  },
  {
    type: "port",
    name: "HDMI",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Max Pixel",
    creditLink: "http://maxpixel.freegreatpicture.com/static/photo/1x/Usb-Vga-Hdmi-1394-Laptop-Lan-1884.jpg"    
  },
  {
    type: "plug",
    name: "HDMI",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "D-Kuru",
    creditLink: "https://commons.wikimedia.org/wiki/User:D-Kuru"    
  },
  {
    type: "port",
    name: "VGA",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Duncan Lithgow",
    creditLink: "https://en.wikipedia.org/wiki/User:DuLithgow"   
  },
  {
    type: "plug",
    name: "VGA",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Evan-Amos",
    creditLink: "https://commons.wikimedia.org/wiki/User:Evan-Amos"  
  },
  {
    type: "port",
    name: "Audio3.5",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Bubba73 (Jud McCranie)",
    creditLink: "https://commons.wikimedia.org/wiki/User:Bubba73"    
  },
  {
    type: "plug",
    name: "Audio3.5",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "an3k",
    creditLink: "https://commons.wikimedia.org/wiki/File:Klinkenstecker_5-polig.jpg"    
  },
  {
    type: "port",
    name: "SD",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "seagul",
    creditLink: "https://pixabay.com/en/usb-port-sd-card-laptop-sound-829329/"    
  },
  {
    type: "plug",
    name: "SD",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Zxb",
    creditLink: "https://commons.wikimedia.org/wiki/File:Flash_memory_cards_size.jpg"   
  },
  {
    type: "port",
    name: "Ethernet",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Asim18",
    creditLink: "https://upload.wikimedia.org/wikipedia/commons/2/21/Adsl_connections.jpg" 
  },
  {
    type: "plug",
    name: "Ethernet",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "David Monniaux",
    creditLink: "https://commons.wikimedia.org/wiki/Ethernet#/media/File:Ethernet_RJ45_connector_p1160054.jpg"   
  },
  {
    type: "port",
    name: "Thunderbolt/Mini Display Port",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Aurélien Selle",
    creditLink: "https://commons.wikimedia.org/wiki/File:Mini_DisplayPort_on_Apple_MacBook.jpg"   
  },
  {
    type: "plug",
    name: "Thunderbolt/Mini Display Port",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Palthrow",
    creditLink: "https://cs.wikipedia.org/wiki/Mini_DisplayPort#/media/File:Mini_displayport.jpg"    
  },
  {
    type: "port",
    name: "USB-C",
    image: "https://c2.staticflickr.com/8/7676/17161161357_92d98db201_b_d.jpg",
    credit: "Maurizio Pesce",
    creditLink: "https://www.flickr.com/photos/pestoverde/17161161357/"    
  },
  {
    type: "plug",
    name: "USB-C",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/USB_Type-C_plug_20170626.jpg",
    credit: "Santeri Viinamäki",
    creditLink: "https://commons.wikimedia.org/w/index.php?curid=60401805"
  }
]

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
  for (var i in img_array) {
    var img = img_array[i];
    var matchname = "<div class='matchname'>" + img.name + "</div>";
    var matchtype = "<div class='matchtype'>" + img.type + "</div>";
    $( "#memory-board" ).append("<div class='card' state='unshown' cardName='" + img.name + "' cardType='" + img.type + "' id="+ img.name + img.type +"><p class='card-name'>"+img.name+' '+img.type+"</p><img class='card-image' src=\"" + img.image+"\" alt='alt'>"+"</div>")
  }
}

buildBoard();

// 1.5 Wait for player to do something


// 2. Listen for players clicking on cards
$( ".card" ).click( function() {
  console.log("You clicked!");
  $(this).find(".card-image").show(0);
  //checkClick($(this));
});

// 3. Check how many cards player has shown, check card state of clicked card
function checkClick(card){
  console.log("checkClick()");
  //3A: clicked on unshown card?
  
  // 3B: checkGame()
  
  
  var cardsShown = [];
  
  var allCards = $( ".card" );
  console.log(allCards);
  allCards.each(function() {
    var cardStatus = $(this).attr("state");
    if (cardStatus === "shown") {
      cardsShown.push($(this));
    }
  });
  
  if (cardsShown.length <= 2) {
    $(card).find(".card-image").show();
    $(card).find(".card-name").hide();
    $(card).attr("state", "shown");
    cardsShown.push($(card));
  } 
  
  setTimeout(function checking(){
   if (cardsShown.length === 2) {
    checkMatch(cardsShown[0], cardsShown[1]);
  }}, 550);
  
  // Is clicking a third card a problem?
}

// 4. Checking for same name different type && changing state
function checkMatch(card1, card2) {
  console.log("checkMatch()");
  if (card1.attr("cardName") === card2.attr("cardName") && card1.attr("cardType") != card2.attr("cardType")) {
    show(card1, card2);
    return
  } else {
    unshow(card1, card2);
  }
}
// 4A. Cards are matched -> 6
// 4b. Cards are not matched -> 5

// 5. Unshow cards -> 1.5
function unshow(card1, card2){
  console.log("unshow()");
  card1.find(".card-name").show();
  card1.find(".card-image").hide();
  card1.attr("state", "unshown");
  card2.find(".card-name").show();
  card2.find(".card-image").hide(); 
  card2.attr("state", "unshown");
  }
// 6.  Keep cards shown, change card state to matched 
function show( card1, card2){
  console.log("show()");
  card1.attr("state", "matched");
  card2.attr("state", "matched");
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
    youWin();
  } else { // 7A: Not all are matched -> 1.5
    return
  } 
}

// 8. You win! message -> 9
// thoughts: mouse create submission
function youWin() {
  alert("You win"); 
}

// 9. Optional: restart game 
// 9A: YES -> 1

// 9B: NO -> nothing
