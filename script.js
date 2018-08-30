$(document).ready(function(){
    var botaoThumbs = $("#thumbs");
    var contador = $("#thumbs .contador span");
    var box = $(".box span");
    
    botaoThumbs.on('click', onclick);
   

    function onclick(){
        if(botaoThumbs.hasClass("disabled")){
            return;
        }
    
       var numeragem = parseInt(contador.text());
       contador.text(numeragem + 1);
       botaoThumbs.addClass("disabled");

      var box = $("<p>",
       { text :"Obrigado pela a sua avaliação!" });
         box.addClass("box");
    
       botaoThumbs.after(box);
   
    }

});