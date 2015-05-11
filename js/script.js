$(document).ready(function() {
	$(".question-1").hide();
	$(".question-2").hide();
	$(".question-3").hide();
	$(".question-4").hide();
	$(".question-5").hide();
	$(".outro").hide();

	var questionNum = 0
	
	$(".start-button").click(function() {
		$(".intro").hide()
		$(".question-1").show();
		questionNum++;
		console.log(questionNum);
	})
	$(".submit-button").click(function() {
		if (questionNum == 1) {
			console.log("click");
			$(".question-1").hide();
			$(".question-2").show();
			return questionNum++;
		}
		else if (questionNum == 2) {
			console.log("click 2");
			$(".question-2").hide();
			$(".question-3").show();
			return questionNum++;
		}
		else if (questionNum == 3) {
			console.log("click 3");
			$(".question-3").hide();
			$(".question-4").show();
			return questionNum++;
		}
		else if (questionNum == 4) {
			console.log("click 4");
			$(".question-4").hide();
			$(".question-5").show();
			return questionNum++;
		}
		else if (questionNum == 5) {
			console.log("fin");
			$(".question-5").hide();
			$(".outro").show();
			return questionNum++;
		}
	})
	$(".new-round").click(function() {
		$(".outro").hide();
		$(".question-1").show();
		return questionNum = 1;
	})
	
});