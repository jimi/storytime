$(".homeBtn").on("click", function(event) {  
	window.location.replace("../index.html");
});

$(".nextBtn").on("click", function(event) {
	const chapter = $("body").attr("data-chapter");
	const index = $(this).attr("data-index");
	const next = parseInt(index) + 1;
	
	const narration = new Audio("../audio/chapter" + chapter + "/page" + next + ".m4a");
	narration.preload = 'auto';	
	
	$("#page" + index).fadeOut("slow", () => {
    $("#page" + next).fadeIn();	
		narration.play();
  });
});