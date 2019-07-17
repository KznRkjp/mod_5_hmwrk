
$(document).ready(function() {
 $(".btn").click(function() {
   $.getJSON(
     'https://api.myjson.com/bins/jcmhn',
     function(data) {
       var i, x = "";
       const $result = $(".result");

       for (i in data.text){
         x += "<p>" + data.text[i] + "</p>";
        };
       $result.html (x);
     }
   );
 });
});
