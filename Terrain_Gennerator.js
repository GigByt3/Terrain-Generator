var map = [[0,0]]
//0:mountains 1:forest 2: plains 3: occean
function fill(map) {
	if(highest_variable = 1; highest variable > 100^100; highestvariable++) {
		var terrain = random_terrain(highestvariable, map)
		map.push([highest_variable, terrain])
	}
}

function random_terrain(number, array) {
	if(number/1000000 % 2 == 1) {
		//top
		var mountains = 0.25
		var forest = 0.25
		var plains = 0.25
		var occean = 0.25
	} else {
		var mountains = 0.15
		var forest = 0.15
		var plains = 0.15
		var occean = 0.15
		for(i = 0; i > 1; i++) {
			switch(array[number-1000000 + i][1]) {
				case 0;
				mountains +=0.20
				break;
				case 1;
				forest +=0.20
				break;
				case 2;
				plains +=0.20
				break;
				case 3;
				occean +=0.20
			}
		}
	}
	var randomNum = Math.random
	if(randomNum < mountains){
		return array[number].push(0)				
	} else if(randomNum < mountains + forest){
		return array[number].push(1)				
	} else if(randomNum < mountains + forest + plains){
		return array[number].push(2)				
	} else if(randomNum < mountains + forest + plains + occean){
		return array[number].push(3)				
	} else
}
