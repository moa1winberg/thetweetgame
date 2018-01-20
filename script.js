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
/*
tweets[2].

tweets= {
	tweet:"YADA Yada yada",
	Option1: Donald.jpg,
	Option2: Kanye.jpg,
	Correct: "1"
}





document.getElementById("imgleft").src = tweets[i].option1;
document.getElementById("imgright").src = tweets[i].option2;
document.getElementById("tweet").innerHTML = tweets[i].tweet;

for (var i = 0, i < 10 && i != cancel , i++){



	function 
} */

var tweets = [
 {

	tweet: "Everyone knows I am right that Robert Pattinson should dump Kristen Stewart. In a couple of years, he will thank me. Be smart, Robert.",
	imgL: "img/Donald.jpg" ,
	imgR:  "img/kanyewest.jpg",
	option1:  "Donald Trump",
	option2:  "Kanye West",

	correct:  "Donald Trump"
},
{
	tweet: "The U.S. cannot allow EBOLA infected people back. People that go to far away places to help out are great-but must suffer the consequences!",
	imgL: "img/Donald.jpg" ,
	imgR:  "img/BushJr.jpg",
	option1:  "Donald Trump",
	option2:  "George W Bush Jr.",

	correct:  "Donald Trump"
},
{
	tweet: "Pervert alert. @RepWeiner is back on twitter. All girls under the age of 18, block him immediately.",
	imgL: "img/Donald.jpg" ,
	imgR:  "img/jamesblunt.jpg",
	option1:  "Donald Trump",
	option2:  "James Blunt",

	correct:  "Donald Trump"
},
{

	tweet:  "Ariana Huffington is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.",
	imgL: "img/drake.jpg",
	imgR: "img/Donald.jpg",
	option1: "Drake",
	option2: "Donald Trump",

	correct: "Donald Trump"
},
{

	tweet: "Have you ever thought you were in love with someone but then realized that you were just staring in a mirror for 20 minutes?",
	imgL: "img/kanyewest.jpg",
	imgR: "img/bieber.jpg",
	option1:  "Kanye West",
	option2:  "Justin Bieber",

	correct:  "Kanye West"
},
{

	tweet: "26,000 unreported sexual assults in the military-only 238 convictions. What did these geniuses expect when they put men & women together?",
	imgL: "img/Donald.jpg",
	imgR: "img/arnold.jpg",
	option1:  "Donald Trump",
	option2:  "Arnold Schwarzenegger",

	correct:  "Donald Trump"
},
{

	tweet: "Sometimes I get emotional over fonts",
	imgL: "img/kanyewest.jpg",
	imgR: "img/Drake(1).jpg",
	option1:  "Kanye West",
	option2:  "Drake",

	correct:  "Kanye West"

},
{

	tweet: "It's a beautiful time. I love my friends. I love my family. I love people. The human race",
	imgL: "img/kanyewest.jpg",
	imgR: "img/Britney1.jpg",
	option1:  "Kanye West",
	option2:  "Britney Spears",

	correct:  "Kanye West"
},
{

	tweet: "Pandora.. Whoever you are!! thank you!! I get tweets about you playing my music all the time!!",
	imgL: "img/pratt.jpg",
	imgR: "img/gibson.jpg",
	option1:  "Chris Pratt",
	option2:  "Tyrese Gibson",

	correct:  "Tyrese Gibson"
},
{

	tweet: "I'm in love with Britney Spears!!!",
	imgL: "img/reynolds.jpg",
	imgR: "img/kimkardashian.jpg",
	option1:  "Ryan Renolds",
	option2:  "Kim Kardashian",

	correct:  "Kim Kardashian"
},
{

	tweet: "Nicole Richie reminds me of my jeep",
	imgL: "img/Minaj.jpg",
	imgR: "img/kimkardashian.jpg",
	option1:  "Nikki Minaj",
	option2:  "Kim Kardashian",

	correct:  "Kim Kardashian"
},
{

	tweet: "Have u ever thought someone was kinda cool, liked their vibe then saw their tweets and realized they are so lame? LOL",
	imgL: "img/AnnaKendrick.jpg",
	imgR: "img/kimkardashian.jpg",
	option1:  "Anna Kendrick",
	option2:  "Kim Kardashian",

	correct:  "Kim Kardashian"
},
{

	tweet:  "For a bottle of coconut water to cost 5 dollars it better give me wings and solve all my emotional problems",
	imgL: "img/cabello.jpg",
	imgR: "img/ChristineTeigen.jpg",
	option1: "Camilla Cabello",
	option2: "Christine Teigen",

	correct: "Camilla Cabello"
},
{

	tweet:  "I was about 2 feet from Beyoncé when she won for Lemonade. Yup. That happened. I said goddess. She said thank you. And now I'm preg w twins.",
	imgL: "img/GinaRodriguez.jpg",
	imgR: "img/ChristineTeigen.jpg",
	option1: "Gina Rodriguez",
	option2: "Christine Teigen",

	correct: "Gina Rodriguez"
},
{

	tweet:  "If not for the cowardly actions of John Wilkes Booth, Abraham Lincoln would have turned 207 today.",
	imgL: "img/pratt.jpg",
	imgR: "img/ChristineTeigen.jpg",
	option1: "Chris Pratt",
	option2: "Christine Teigen",

	correct: "Chris Pratt"
},
{

	tweet: "Does anyone think global warming is a good thing? I love Lady Gaga. I think she's a really interesting artist.",
	
	imgL: "img/Britney.jpg",
	imgR: "img/Minaj.jpg",
	option1:  "Britney Spears",
	option2:  "Nikki Minaj",

	correct:  "Britney Spears"
},
{

	tweet:  "Just an FYI: If you removed all veins, arteries, & capillaries from your body and laid them end to end, you will die.",
	
	imgL: "img/Depp.jpg",
	imgR: "img/neilDeGrasse .jpg",
	option1: "Johnny Depp",
	option2: "Astrophysicist",

	correct: "Astrophysicist"
},
{

	tweet: "Why is rhode island nor a road or an island",
	imgL: "img/jadensmith.jpg",
	imgR: "img/bieber.jpg",
	option1:  "Jaden Smith",
	option2:  "Justin Bieber",

	correct:  "Justin Bieber"
},
{

	tweet:  "On our 6am walk, my daughter asked where the moon goes each morning. I let her know it's in heaven, visiting daddy's freedom.",
	imgL: "img/reynolds.jpg",
	imgR: "img/pratt.jpg",
	option1: "Ryan Renolds",
	option2: "Chris Pratt",

	correct: "Ryan Renolds"
},
{

	tweet: "Do identical twins have the same exact DNA? Like if 1 twin murders someone & leaves their DNA, can the other twin get blamed?",
	imgL: "img/kimkardashian.jpg",
	imgR: "img/hilton.jpg",
	option1:  "Kim Kardashian",
	option2:  "Paris Hilton",

	correct:  "Kim Kardashian"
},
{

	tweet: 'Comes with fries #3wordsbetterthanIloveyou' , 
	imgL: 'img/cabello.jpg',
	imgR: 'img/AnnaKendrick.jpg' ,
	option1: 'Camila Cabello',
	option2: 'Anna Kendrick',
	correct: 'Anna Kendrick'
},
{

	tweet: 'People in LA are deathly afraid of gluten. I swear to god, you could rob a liquor store in  this city with a bagel.' , 
	imgL: 'img/reynolds.jpg',
	imgR: 'img/Shaq.jpg' ,
	option1: 'Ryan Reynolds',
	option2: 'Shaquille',
	correct: 'Ryan Reynolds'
},
{

	tweet:  "I wish i was aloud to use the n word sometimes (in a non racist way of course)",
	imgL: "img/skillrex.jpg",
	imgR: "img/Donald.jpg",
	option1: "Skrillex",
	option2: "Donald Trump",
	correct: "Skrillex"
}
];
var i = 0;
var test = 4;
var j = Math.floor((Math.random() * tweets.length) + 1);
var s = 0;




document.getElementById("imgleft").src = tweets[j].imgL;
document.getElementById("imgright").src = tweets[j].imgR;
document.getElementById("tweet").innerHTML = tweets[j].tweet;
document.getElementById("button-left").innerHTML = tweets[j].option1;
document.getElementById("button-right").innerHTML = tweets[j].option2;


/*--------------------------------------------------
//Problem 1: The test has 10 questions selected from a large bank of questions. We want 
//these questions to be in random order and a question must not be called twice for the 
//same test. 

var cancelQ = []; // defining an array to be filled with cancelled questions 
 //first random selection

for (var i = 0; i < 9; i++){ //number of questions
	while (cancelQ.includes(j)){
		var j = Math.floor((Math.random() * 9) + 1); //selection of the random question ( j ).
	}


--------------------------------------------------- */


	// put function Check() here

function pressLeftBut(){


		if (tweets[j].option1 == tweets[j].correct){
			document.getElementById("bl").style.background = 'green'
			document.getElementById('bn').style.display = "block";
				s= s+5;
			document.getElementById("score").innerHTML = "Score: " + s;
				document.getElementById('br').style.display = "none";

		}
		else{
			document.getElementById("bl").style.background = 'red'
			document.getElementById('bn').style.display = "block";
			document.getElementById('br').style.display = "none";
			
		}
			
}
function pressRightBut(){
	
	
		if (tweets[j].option2 == tweets[j].correct){
			console.log("Hi");
			document.getElementById("br").style.background = 'green'
				document.getElementById('bl').style.display = "none";
			document.getElementById('bn').style.display = "block";
					s= s+5;
			document.getElementById("score").innerHTML = "Score: " + s;

		}
		else{
			document.getElementById("br").style.background = 'red'
			document.getElementById('bn').style.display = "block";
				document.getElementById('bl').style.display = "none";

			
		}
		console.log(tweets[j].option2)
		console.log(tweets[j].correct)
			
}
	// put function Check() here

function nextBut(){

	if (i < 9){
		i = i+1;
		console.log(i);
		
		tweets.splice(j,1);
        j = Math.floor((Math.random() * tweets.length) + 1); //selection of the random question ( j ).
		console.log(j);
		console.log( tweets[j].tweet );
		
		document.getElementById("bl").style.background = 'transparent'
		document.getElementById("br").style.background = 'transparent'
		document.getElementById('bn').style.display = "none";
		document.getElementById('br').style.display = "block";
			document.getElementById('bl').style.display = "block";


		document.getElementById("imgleft").src = tweets[j].imgL;
		document.getElementById("imgright").src = tweets[j].imgR;
		document.getElementById("tweet").innerHTML = tweets[j].tweet;
		document.getElementById("button-left").innerHTML = tweets[j].option1;
		document.getElementById("button-right").innerHTML = tweets[j].option2;
		
	}
	else{

  document.getElementById('end-wrapper').style.display = "block";
  document.getElementById('bn').style.display = "none";
  document.getElementById('bl').style.display = "none";
  document.getElementById('br').style.display = "none";
  document.getElementById('tweet').style.display = "none";
  document.getElementById('header').style.display = "none";
  document.getElementById("tweetScore").innerHTML = s +" / 50";
		  document.getElementById('logo').style.display = "none";
		  document.getElementById('score').style.display = "none";

	
	}
 
}


/*function randomQuestion(){
	while (cancelQ.includes(j)){
		var j = Math.floor((Math.random() * 9) + 1);
	}
	cancelQ.push(j);
}



var j = Math.floor((Math.random() * 9) + 1);
var cancelQ = [j];
*/
