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
  const obj = {"W":"wins","L":"losses","T":"ties",
  "Pct":"Fraction of games won","PPG":"Average number of points",
  "PAPG":"Average number of points against","Mrg":"Margin of victory",
  "15":"Power","10": "Toss-Up","-5":"Neg","TUH":"Total number of toss-ups heard",
  "PPTH":"avg score per toss","P/N":"power to neg ratio","G/N":"get to neg ratio",
  "BHrd":"Total bonus","BPts":"Points for bonus","P/B":"avg score for bonus"}
  var sorting = []
  var sValues = []
  var pos = 0
  var current = -1
  $('table').each(function (index) {
    sorting.push([]);
    pos = index;
    $(this).find('tr').first().children().each(function(index) {
      //console.log(index);
      $(this).attr("class","tooltip");
      let text = $(this).find("b").html()
      if (text in obj) {
        node = $('<span class="tooltiptext">' + obj[text] + '</span>');
        $(this).find("b").first().after(node)
      }
      $(this).click(() => {
        if(url.indexOf('http://' + host + '/teamdetail') != -1) {
          return;
        }
        current = current == -1 ? 1 : -1;
        var comparison = {};
        for (let i = 0; i < sValues.length;i++) {
          comparison[i]=sValues[i][index]
        }
        var sorted = Object.keys(comparison).sort(function(a,b){
          if (comparison[a] == comparison[b]) {
            return a < b ? 1 : -1;
          }
          return comparison[a]-comparison[b];
        })

        $(this).closest("table").find('tr').first().nextAll().each(function () {
          $(this).remove();
        })

        if (current == 1) {
          for (i = 0; i < sValues.length; i++) {
            $(this).closest("table").find('tr').first().after(sorting[pos][sorted[i]]);
          }
        }
        else {
          for (i = sValues.length - 1; i >= 0; i--) {
          $(this).closest("table").find('tr').first().after(sorting[pos][sorted[i]]);
          }
        }
      })
    })

    $(this).find('tr').first().nextAll().each(function () {
        sorting[pos].push($(this).clone());
        //console.log ($(this).html());
        var entries=[]
        $(this).children().each(function() {
          if ($(this).has("a").length==0) {
            entries.push($(this).html());
          }
          else {
            entries.push($(this).text());
          }
        })
        sValues.push(entries);
        console.log(entries);
    })
  })
  var endq = $("<div class='title'>Click on the tags to sort</div>");
  var endq2 = $("<div class='title'>Made by Daniel Hahn, Aditya Paul, and Ryan Chhong</div>");
  $("body").children().last().after(endq);
  $("body").children().last().after(endq2);
})
