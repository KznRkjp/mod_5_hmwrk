
$(document).ready(function() {
 $(".btn1").click(function() {
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

 $(".btn2").click(function() {
   var obj = {};
   $(".data").each(function() {
    obj[$(this).attr('id')] = $(this).val();
    });

  $.each(obj, function(key, value){
    $("p").each(function() {
      var text = $(this).text();
      var n_key = "{"+key+"}"
      text = text.replace(n_key,obj[key]);
      $(this).text(text);
    });

  });

 });

});
