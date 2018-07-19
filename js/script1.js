
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
  $('table').each(function (index) {
    sorting.push([]);
    $(this).find('tr').first().children().each(function() {
      //console.log(index);
      $(this).attr("class","tooltip");
      let text = $(this).find("b").html()
      if (text in obj) {
        node = $('<span class="tooltiptext">' + obj[text] + '</span>');
        $(this).find("b").first().after(node)
      }
      else {
        console.log("NOPE");
      }
      $(this).click(function() {

      })
    })

    $(this).find('tr').first().nextAll().each(function () {
        sorting[index].push($(this));
        //console.log ($(this).html());
        var entries=[]
        $(this).children().each(function() {
          if ($(this).has("a").length !=0) {
            continue;
          }
          entries.push($(this).html());
        })
        sValues.push(entries);
        //console.log(entries);
    })
  })
})
