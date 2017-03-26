/*function ran iddomNum(){
 var math = Math.floor(Math.random() * 100) + 1;
  $("#number").append(math);
  }*/
$("#submit").click(fizzOrBuzz);
$("#reset").click(reset);

function reset() {
  //console.log($('#field'));
 // $("#field").attr("pick a number");
  $(".here").text('');
}

//var i = $("#number").value;
function fizzOrBuzz() {
  var j = $("#field").val();
  reset();
  for (var i = 1; i <= j; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      $(".here").append("<li> FIZZBUZZ</li>");
    } else if (i % 5 == 0) {
      $(".here").append("<li> buzz</li>");
    } else if (i % 3 == 0) {
      $(".here").append("<li> fizz</li>");
    } else {
      $(".here").append("<li>"+i+"</li");
    }
  }
}