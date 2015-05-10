$(document).ready(function() {
	$(".question-1").hide();
	$(".question-2").hide();
	$(".question-3").hide();
	$(".question-4").hide();
	$(".question-5").hide();
	$(".outro").hide();

	$(".start-button").click(function() {
		$(".intro").hide()
		$(".question-1").show();
		return questionNum++;
	})
});