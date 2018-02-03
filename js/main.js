
// data in array form to be manipulated
var data = [
    'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo',
    'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn'
]; 
var pickedColor;
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




// listens for color change, sets to variable to be used in further click listener

//clicklisteners for divs, toggle class for text style
// calls function
// createDivs();
// insertText();
// changeColor();
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

// take color from input, use it as option to change text


for(let i = 0; i < data.length; i++) {
  $('#div' + i).click( function(){
    if ($("#bold").hasClass("enabled")) {
    	$('#div' + i).toggleClass("bold");
    } else {
    	console.log("nah");
    }
});
}

for(let i = 0; i < data.length; i++) {
  $('#div' + i).click( function(){
    if ($("#italic").hasClass("enabled")) {
    	$('#div' + i).toggleClass("italic");
    } else {
    	console.log("nah")
    }
});
}
for(let i = 0; i < data.length; i++) {
  $('#div' + i).click( function(){
    if ($("#underline").hasClass("enabled")){
    	$('#div' + i).toggleClass("underline");
    } else {
    	console.log("nah")
    }
});
}

$("#color-picker").on("input", function(event) {
        pickedColor = event.target.value;
        console.log(pickedColor);
});

$("#color-clear").on("click", function(){
    pickedColor = '';
    console.log(pickedColor);
});


for(let i = 0; i < data.length; i++) {
    $('#div' + i).click( function() {
        
        $('#div' + i).css("color", pickedColor);
    })
}