//global variables
var deck = {};
var rank = "";
var suit = "";
var deckArr = [];
var cardBack =
  "<img class='img-thumbnail' src='http://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg'>";

//Creates a tarot card deck
function createDeck() {
  deckArr = [];

  function deckConst(name, displayName) {
    this.name = name;
    this.displayName = displayName;
  }

  var id = 0;
  for (var a0 = 0; a0 < 4; a0++) {
    switch (a0) {
      case 0:
        suit = "cups";
        break;
      case 1:
        suit = "pentacles";
        break;
      case 2:
        suit = "swords";
        break;
      case 3:
        suit = "wands";
        break;
    }

    for (var a1 = 1; a1 < 15; a1++) {
      switch (a1) {
        case 1:
          rank = "ace";
          break;
        case 2:
          rank = "two";
          break;
        case 3:
          rank = "three";
          break;
        case 4:
          rank = "four";
          break;
        case 5:
          rank = "five";
          break;
        case 6:
          rank = "six";
          break;
        case 7:
          rank = "seven";
          break;
        case 8:
          rank = "eight";
          break;
        case 9:
          rank = "nine";
          break;
        case 10:
          rank = "ten";
          break;
        case 11:
          rank = "page";
          break;
        case 12:
          rank = "knight";
          break;
        case 13:
          rank = "queen";
          break;
        case 14:
          rank = "king";
          break;
        default:
          break;
      }
      id++;
      var displayName = rank + " of " + suit;
      var name = _.kebabCase(displayName);
      //var name = rank + "-of-" + suit;
      card = new deckConst(name, displayName);
      deck[id] = card;
    }
  }
  deck[57] = new deckConst("the-fool");
  deck[58] = new deckConst("the-magician");
  deck[59] = new deckConst("the-high-priestess");
  deck[60] = new deckConst("the-empress");
  deck[61] = new deckConst("the-emperor");
  deck[62] = new deckConst("the-hierophant");
  deck[63] = new deckConst("the-lovers");
  deck[64] = new deckConst("the-chariot");
  deck[65] = new deckConst("strength");
  deck[66] = new deckConst("the-hermit");
  deck[67] = new deckConst("wheel-of-fortune");
  deck[68] = new deckConst("justice");
  deck[69] = new deckConst("the-hanged-man");
  deck[70] = new deckConst("death");
  deck[71] = new deckConst("temperance");
  deck[72] = new deckConst("the-devil");
  deck[73] = new deckConst("the-tower");
  deck[74] = new deckConst("the-star");
  deck[75] = new deckConst("the-moon");
  deck[76] = new deckConst("the-sun");
  deck[77] = new deckConst("judgement");
  deck[78] = new deckConst("the-world");

  for (var t = 1; t <= 78; t++) {
    deckArr.push(t);
    deck[t].displayName = _.startCase(deck[t].name);
  }

  return deckArr;
  return deck;
}

//gets Rider Waite Card Image i = id from createDeck()
function riderWaite(i) {
  var img = $(
    "<img class='img-thumbnail' src='http://www.free-tarot-reading.net/img/cards/rider-waite/" +
      deck[i].name +
      ".jpg' alt=" +
      deck[i].name +
      "/>"
  );
  return img;
}

//Selects random cards & prevents doubles
function randGen() {
  var cardsLeft = deckArr.length;
  var randInt = Math.floor(Math.random() * cardsLeft);
  var randNum = deckArr[randInt];
  deckArr.splice(randInt, 1);
  return randNum;
}

function showValue(newValue) {
  $("#range").html(newValue);
}
//Past, Present, Future spread
function pastPresentFuture() {
  createDeck();
  $("img").remove();
  $("#blurb").remove();
  $("#pastPresentFuture").html("Another Reading?");
  var percentRevs = $("#range").html();

  for (var b = 1; b <= 3; b++) {
    $("#rev-" + b).html("");
    var rand = randGen();
    var randInvert = Math.floor(Math.random() * 101);
    $("#td-display-name-" + b).html(
      "<h4><b>" + deck[rand].displayName + "</b></h4>"
    );
    if (randInvert >= percentRevs) {
      $("#td-" + b).html(riderWaite(rand));
    } else {
      $("#td-" + b).html(riderWaite(rand).addClass("invert"));
      $("#rev-" + b).html("<h5><b>Reversed</b></h5>");
    }
  }
}

function autoCode() {
  _.times(3, function (i) {
    i++; //incremented to avoid creating 'td-0'
    $("#td-" + i).html(cardBack);
  });
}

//Shows all cards (used in debugging)
//function dealerDeck() {
//  createDeck();
//  $("img").remove();
//  for (var i = 1; i < Object.keys(deck).length; i++) {
//    riderWaite(i);
//  }
//}
