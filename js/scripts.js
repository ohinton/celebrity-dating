$(document).ready(function() {
  $("form#celebrity-date").submit(function(event) {
   var age = parseInt($("input#age").val());
   var pet = $("select#pet").val();

   if (age < 30 && pet ==="cat") {
     $('#justin').show();
   } else if (age === 30 && pet==="cat"){
     $('#george').show();
   } else if (age > 30 && pet==="cat"){
     $('#george').show();
   } else if (age < 30 && pet==="dog"){
     $('#vanessa').show();
   } else if (age === 30 && pet==="dog"){
     $('#vanessa').show();
   } else if (age > 30 && pet==="dog"){
     $('#jennifer').show();
   }

   event.preventDefault();
 });
});
