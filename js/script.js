$(document).ready(function() {
	$(".question-1").hide();
	$(".question-2").hide();
	$(".question-3").hide();
	$(".question-4").hide();
	$(".question-5").hide();
	$(".outro").hide();

	var questionNum = 0;
	var correctAns = 0;
	var wrongAns = 0;

	$(".start-button").click(function() {
		$(".intro").hide()
		$(".question-1").show();
		questionNum++;
		console.log(questionNum);
	})

	$(".true").click(function() {
		if (questionNum == 1) {
			$(".question-1").hide();
			$(".question-2").show();
			correctAns++;
			return questionNum++;
		}
		else if (questionNum == 2) {
			$(".question-2").hide();
			$(".question-3").show();
			correctAns++;
			return questionNum++;
		}
		else if (questionNum == 3) {
			$(".question-3").hide();
			$(".question-4").show();
			correctAns++;
			return questionNum++;
		}
		else if (questionNum == 4) {
			$(".question-4").hide();
			$(".question-5").show();
			correctAns++;
			return questionNum++;
		}
		else if (questionNum == 5) {
			correctAns++
			$(".question-5").hide();
			$(".outro").show();
			$(".feedback").prepend("<h1>You got " + correctAns + " right and " + wrongAns + " wrong</h1>");
		}
	})
	
	$(".false").click(function() {
		if (questionNum == 1) {
			$(".question-1").hide();
			$(".question-2").show();
			wrongAns++;
			return questionNum++;
		}
		else if (questionNum == 2) {
			$(".question-2").hide();
			$(".question-3").show();
			wrongAns++;
			return questionNum++;
		}
		else if (questionNum == 3) {
			$(".question-3").hide();
			$(".question-4").show();
			wrongAns++;
			return questionNum++;
		}
		else if (questionNum == 4) {
			$(".question-4").hide();
			$(".question-5").show();
			wrongAns++;
			return questionNum++;
		}
		else if (questionNum == 5) {
			wrongAns++
			$(".question-5").hide();
			$(".outro").show();
			$(".feedback").prepend("<h1>You got " + correctAns + " right and " + wrongAns + " wrong</h1>");
		}
	})

	$(".new-round").click(function() {
		$(".outro").hide();
		$(".question-1").show();
		$(".feedback").remove();
		correctAns = 0;
		wrongAns = 0;
		return questionNum = 1;
	})
	
});