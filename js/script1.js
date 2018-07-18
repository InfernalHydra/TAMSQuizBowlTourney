
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
      var start = rotation ? 90 : 0;
      rotation = rotation ? false : true;
      $(this).animate({  textIndent: start }, {
      step: function(now,fx) {
        $(this).css('-webkit-transform','rotate('+(90-now)+'deg)');
      },
      duration:'slow'
    },'linear');
    $(".find").slideToggle();
  })
})

/*
var header = document.getElementsByTagName("table")[0];
var tb = document.getElementsByTagName("tbody")[0];

var node = document.createElement("button")
var para = document.createTextNode("CLICK")
node.appendChild(para)
header.insertBefore(node,tb)
tb.style.display = "none"

var heading = document.createElement("table")
var els = document.getElementsByTagName("a")
for (let i = 0; i < 7;i++) {
  heading.appendChild(document.createElement("tr").appendChild(JSON.parse(JSON.stringify(els[i]))))
}
//header.insertBefore(heading,tb)
node.addEventListener("click", function () {
  tb.style.display = tb.style.display == "inline" ? "none" : "inline"
})*/

/*
for (let i = 0; i < header.length; i++) {
  console.log(header[i])
}
header.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
  })
*/
