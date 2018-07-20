var url = window.location.href;
var host = window.location.host;
$(document).ready(()=> {
  const links = new Array(7);
  var heading = $("table").first();
  var blinks = heading.children().children().children();
  var currentChild = blinks
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
  //finder.hide();
  $("h1").before(finder);
  for (let i = 6; i >= 0;i--) {
    $('span').first().after(links[i]);
  }
  $('span').first().remove()

  var rotation = true;
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
  const obj = {"W":"Wins","L":"Losses","T":"Ties",
  "Pct":"Fraction of games won","PPG":"Average number of points",
  "PAPG":"Average number of points against","Mrg":"Margin of victory",
  "15":"Power","10": "Toss-Up","-5":"Neg","TUH":"Total number of toss-ups heard",
  "PPTH":"Avg score per toss","P/N":"Power to neg ratio","G/N":"Get to neg ratio",
  "BHrd":"Total bonus","BPts":"Points for bonus","P/B":"Avg score for bonus",
  "GP":"Games Played", "P/TU":"Avg per toss-up","Pts":"Points",
  "PF":"Poinsts Scored (for)","PA":"Points scored (against)"}
  var sorting = []
  var sValues = []
  var tags = []
  var current = -1
  $('table').each(function (index) {
    $(this).attr("class", "highlight");
    sorting.push([]);
    var pos = index;
    $(this).find('tr').attr("class","tbh");
    $(this).find('tr').first().children().each(function(index) {
      //console.log(index);
      $(this).attr("class","tooltip");
      let text = $(this).find("b").html()
      tags.push(text);
      if (text in obj) {
        node = $('<span class="tooltiptext">' + obj[text] + '</span>');
        $(this).find("b").first().after(node)
      }

      $(this).click(() => {

        if(url.indexOf('http://' + host + '/statkey') != -1) {
          return;
        }/*
        if(url.indexOf('http://' + host + '/playerdetail') != -1) {
          return;
        }*/
        current = current == -1 ? 1 : -1;
        var comparison = {};
        var hasb = 0
        if (sorting[pos][sorting[pos].length-1].has('b').length > 0) {
          hasb = 1
        }

        for (let i = 0; i < sValues.length - hasb;i++) {
          if (sValues[i][index].indexOf("inf")!=-1) {
            comparison[i] = 1000000;
          }
          else {
            comparison[i]=Math.abs(sValues[i][index]);
          }
        }
        var sorted = Object.keys(comparison).sort(function(a,b){

          if (comparison[a] == comparison[b]) {
            return a < b ? 1 : -1;
          }
          return comparison[a]-comparison[b];
        })
        var ob = $(this).closest("table").find('tr').first()
          ob.nextAll().each(function () {
          $(this).remove();
        })

        if (current == 1) {
          for (i = 0; i < sValues.length-hasb; i++) {
            ob.after(sorting[pos][sorted[i]]);
          }
        }
        else {
          for (i = sValues.length - 1 - hasb; i >= 0; i--) {
          ob.after(sorting[pos][sorted[i]]);
          }
        }
        if (hasb == 1) {
          var ob = $(this).closest("table").find('tr').last().after(sorting[pos][sorting[pos].length-1]);
        }

      })
    })

    $(this).find('tr').first().nextAll().each(function (index) {

        //console.log ($(this).html());
        var entries=[]
        $(this).children().each(function(index) {

          if ($(this).has("a").length==0) {
            entries.push($(this).html());
          }
          else {
            $(this).find("a").attr("class", "link");
            entries.push($(this).text());
          }
          if (index == 0 && tags[0] == 'Rank'){
            switch ($(this).text()) {
              case "1":
                $(this).html('<img class="medal" src="./PNG/gold.png"/>');
                break;
              case "2":
                $(this).html('<img class="medal"src="./PNG/silver.png"/>');
                break;
              case "3":
                $(this).html('<img class="medal"src="./PNG/bronze.png"/>');
                break;
              default:
                $(this).attr("class", "rank");
                break;
            }
            $(this).attr("align", "center");
          }

        })
        sorting[pos].push($(this).clone());
        sValues.push(entries);
        //console.log(entries);
    })
  })
  var endq=null
  /*
  if(url.indexOf('http://' + host + '/teamdetail') != -1) {
    endq = $("<div class='title'>The tags here a bit buggy so sorting has been disabled</div>");;
  }
  if(url.indexOf('http://' + host + '/playerdetail') != -1) {
    endq = $("<div class='title'>The tags here a bit buggy so sorting has been disabled</div>");;
  }*/

  endq = $("<div class='title'>Click on the tags to sort</div>");

  var endq2 = $("<div class='title'>Made by Daniel Hahn, Aditya Paul, and Ryan Chhong</div>");
  var endpic = $("<img class='ending'src='background.jpg'></img>");
  $("body").children().last().after(endq);
  $("body").children().last().after(endq2);
  $("body").children().last().after(endpic);

})
