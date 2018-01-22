
// data in array form to be manipulated
var data = [
    'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo',
    'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'
]; 

var multipleStyles = []
// displays text on page
function createDivs() {
	var container = $("#textContent");
	var DivsToAppend = '';
	for (var i = 0; i < data.length; i++) {
		// each word within a span
		DivsToAppend += '<div class=div-text-default id=div' + i + '></div>';
	}
	$(container).append(DivsToAppend);
}

function insertText() {

	for (var i = 0; i < data.length; i++) {
		$("#div" + i).append(data[i]);
	}

}


//clicklisteners for divs, toggle class for text style
// calls function
createDivs();
insertText();

// for loop - click listener for text styles
$('#bold').on("click", function (){
	$('#bold').toggleClass("enabled");
});

$('#italic').on("click", function (){
	$('#italic').toggleClass("enabled");
});

$('#underline').on("click", function (){
	$('#underline').toggleClass("enabled");
});

// click listener for divs, use .hasClass()
for(var i = 0; i < data.length; i++) {
  $('#div' + i).click( function(){
    $('#div' + i).toggleClass(multipleStyles())
  });
}