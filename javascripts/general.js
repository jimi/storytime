var chapter;

$( document ).ready(function() {
	chapter = $("body").attr("data-chapter");
});

$(".chapterBtn").on("click", function(event) { 
	const index = $(this).attr("data-chapter"); 
	$(this).prop('disabled', true)	
	$("#chapterBtnText" + index).html('Loading...');
	$("#chapterBtnText" + index).addClass("animate-pulse");
	
	window.location.replace("chapter" + index + ".html");
});

$(".homeBtn").on("click", function(event) {  
	window.location.replace("index.html");
});

$(".nextBtn").on("click", function(event) {
	const index = $(this).attr("data-index");
	const next = parseInt(index) + 1;
	
	const narration = new Audio("./audio/chapter" + chapter + "/page" + next + ".m4a");
	narration.preload = 'auto';	
	
	$("#page" + index).fadeOut("slow", () => {
    $("#page" + next).fadeIn();	
		narration.play();
  });
});

$(".backBtn").on("click", function(event) {
	const index = $(this).attr("data-index");
	var back = parseInt(index) - 1;
	if (back < 0) { back = 0; }
	
	$("#page" + index).fadeOut("slow", () => {
    $("#page" + back).fadeIn();	
		// todo
  });
});

$(".replayBtn").on("click", function(event) {
	const index = $(this).attr("data-index");
	const narration = new Audio("./audio/chapter" + chapter + "/page" + index + ".m4a");
	narration.preload = 'auto';
	narration.play();
});
