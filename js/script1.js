
$(document).ready(()=> {
  const links = new Array(7);
  var heading = $("table").first();
  var tables = heading.children().children().children();
  var currentChild = tables
  for (let i = 0; i < 7; i++) {
    links[i] = currentChild.children();
    currentChild = currentChild.next()
  }
  heading.remove();

  var top = $("<div class='container'><div class='text'>TAMS QUIZ BOWL</div></div>");
  var node = $("<img class='rotate'></img>");
  node.attr("src", "./PNG/sel.png");
  $("h1").before(top);
  $(".text").before(node);

  var finder = $("<div class='find'><span/></div>");
  finder.hide();
  $("h1").before(finder);
  for (let i = 6; i >= 0;i--) {
    $('span').first().after(links[i]);
  }
  $('span').first().remove()

  var rotation = false;
  $('img').first().click(function() {
      var start = rotation ? 90 : -90;
      rotation = rotation ? false : true;
      $(this).animate({  textIndent: start }, {
      step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+(90-now)+'deg)');
      },
      duration:500
    },'linear');
    $(".find").slideToggle();
  });

  $("h1").first().attr("class", "title");
  //console.log($('tr').first().html());
  currentChild = $('tr').first().children();
  for (let i = 0; i < 20; i++) {
    var node = null
    var toolt = null
    var no = false
    currentChild.attr("class", "tooltip");
    console.log (currentChild.html());
    //console.log (currentChild.find("b").html());
    switch (currentChild.find("b").html()) {
      case "W":
        toolt = "wins";
        break;
      case "L":
        toolt = "losses";
        break;
      case "T":
        toolt = "ties";
        break;
      case "Pct":
        toolt = "Fraction of games won";
        break;
      case "PPG":
        toolt = "Average number of points";
        break;
      case "PAPG":
        toolt =	"Average number of points against";
        break;
      case "Mrg":
        toolt = "Margin of victory";
        break;
      case "15":
        toolt = "Power";
        break;
      case "10":
        toolt = "Toss-Up";
        break;
      case "-5":
        toolt = "Neg"
        break;
      case "TUH":
        toolt = "Total number of toss-ups heard";
        break;
      case "PPTH":
        toolt = "avg score per toss";
        break;
      case "P/N":
        toolt = "power to neg ratio";
        break;
      case "G/N":
        toolt = "get to neg ratio";
        break;
      case "BHrd":
        toolt = "Total bonus";
        break;
      case "BPts":
        toolt = "Points for bonus";
        break;
      case "P/B":
        toolt = "avg score for bonus";
        break;
      default:
        no = true;
      }
      node = $('<span class="tooltiptext">' + toolt + '</span>');
      console.log(node.html());
      if (no) {
        currentChild = currentChild.next();
        console.log ("NOPE");
        continue;
      }
      currentChild.find("b").first().after(node);
      currentChild = currentChild.next();
    }


})
