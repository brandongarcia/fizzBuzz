function fizzBuzz(length, marker){
	var x = 1, number = [];
	while(x <= length){
		number.push(x);
		x += 1;	
	}
	number.forEach(function(para){
		var answer = "";
		for(var i = 0; i < marker.length; i++){
			if(para % marker[i].number == 0){
				answer += marker[i].name
			}
		}
		answer == "" ? console.log(para) : console.log(answer)
	})
}

fizzBuzz(100, [{number: 3, name: "Fizz"},{number: 5, name: "Buzz"}]);
