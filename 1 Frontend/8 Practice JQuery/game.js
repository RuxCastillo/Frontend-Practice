var level = 0;

var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColour = buttonColours[randomNumber];
	gamePattern.push(randomChosenColour);
	
	$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomChosenColour);	
	animatePress(randomChosenColour);

	level++;
	$("h1").text("Level " + level);

};

$(".btn").click(function() { 
	var userChosenColour = $(this).attr("id");
	userClickedPattern.push(userChosenColour);
	playSound(userChosenColour);
	animatePress(userChosenColour);
	checkAnswer(userClickedPattern.length - 1);
});


function playSound(name) {
	
	var audio = $("h1").after("<audio src=sounds/" + name + ".mp3></audio>");

	$("audio")[0].play();

	console.log(audio);
}

function animatePress(currentColour) {
	$("#" + currentColour).addClass("pressed");

	setTimeout(function() {
		$("#" + currentColour).removeClass("pressed");
	}, 100);
}

$(document).one("keydown", function () {
	nextSequence();
});


function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

	if (userClickedPattern.length === gamePattern.length) {
		setTimeout(function() {
		nextSequence();
		},1000);
		userClickedPattern = [];
	}


	}else {var audio2 = $("h1").after("<audio src=sounds/wrong.mp3></audio>");
		$("audio")[0].play();
		$("body").addClass("game-over");
		setTimeout(function() {
			$("body").removeClass("game-over");
		},200);
		$("h1").text("Game Over, Press Any Key to Restart");
		startOver();
	}

}

function startOver() {
	level = 0;
	gamePattern = [];
	userClickedPattern = [];

	$(document).one("keydown", function() {
		nextSequence();
	});
}








