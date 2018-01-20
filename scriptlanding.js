jQuery(document).ready(function($) {  

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
    $('.se-pre-con').fadeOut('slow',function(){$(this).remove();});
});

});
//Preloads images start
<!--//--><![CDATA[//><!--
			var images = new Array()
			function preload() {
				for (i = 0; i < preload.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preload.arguments[i]
				}
			}
			preload(
				"https://moa1winberg.github.io/thetweetgame/img/reynolds.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Shaq.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/AnnaKendrick.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Britney.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Britney1.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/BushJr.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/BushSr.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/CharlesBarkley.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/ChristineTeigen.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Depp.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Donald.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Drake(1).jpg",
				"https://moa1winberg.github.io/thetweetgame/img/GIF_1.gif",
				"https://moa1winberg.github.io/thetweetgame/img/GIF_2.gif",
				"https://moa1winberg.github.io/thetweetgame/img/GinaRodriguez.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/MichaelJordan.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/Minaj.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/TomBrady.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/WhitneyCummings.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/arnold.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/barackobama.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/bieber.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/cabello.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/drake.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/gibson.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/hilton.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/jadensmith.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/jamesblunt.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/justinbieber.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/kaepernick.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/kanyewest.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/kimkardashian.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/neilDeGrasse .jpg",
				"https://moa1winberg.github.io/thetweetgame/img/pratt.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/putin.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/reynolds.jpg",
				"https://moa1winberg.github.io/thetweetgame/img/script.js"
			)
		//--><!]]>
//preload images end
