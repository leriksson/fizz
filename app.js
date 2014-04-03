$(function(){

	function sortList(amount){
		for (var i = 1; i < amount; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				$('.numberlist').append(' fizz buzz,')
			} else if (i % 3 == 0) {
				$('.numberlist').append(' fizz,')
			} else if (i % 5 == 0) {
				$('.numberlist').append(' buzz,')
			} else {
				$('.numberlist').append(' '+i+',')
			}
		};
	}

	$('input').keypress(function(event) {
		if ( event.which == 13 ) {
			event.preventDefault();
			$('.numberlist').empty();
			var value = parseInt($('input[type="text"]').val());
			sortList(value);
		}

	});
});
	// var numList = [];
	// var value = parseInt($("input").val());

	// function addFizz() {
	// 	for (var i = 0; i < numList.length; i++) {
			// if (numList[i] % 3 == 0) {
			// 	numList.splice([i], 1, "fizz")
			// } else if (numList[i] % 5 == 0) {
			// 	numList.splice([i], 1, "buzz")
			// } else if (numList[i] % 7 == 0) {
			// 	numList.splice([i], 1, "buzz")
			// }
	// 	};
	// }

	// function makeList() {
	// 	$('#numberlist').empty();
	// 	for (var i = 0; i < numList.length; i++) {
	// 		$('#numberlist').append('<li>'+numList[i]+'</li>');
	// 	}
	// }

	// $('input').keypress(function(event) {
	// 	if ( event.which == 13 ) {
	// 		event.preventDefault();
	// 		var value = parseInt($('input[name="number"]').val());
	// 		console.log(value)
	// 		for (var i = 0; i < value; i++) {
	// 			numList.push(numList[i]);
	// 		};
			
	// 		addFizz();
	// 		makeList();

		// key click send val
		// to array

		// modify array
		// if 3 than fizz
		// if 5 than buzz
		// 	if 5 & 3 than fizz buzz

		// print array to ul

	// 	}
	// });
// });