let tripPlanner = (function(){
	let Lines = {
		N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
		L: ["8th", "6th", "Union Square", "3rd", "1st"],
		six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
	}

	function validateStops(line, ...stops){
		let result = true;
		for( stop of stops ){
			result &= Lines[line].indexOf(stop) === -1? false : true;
		}
		return result 
	}

	function validateLines(...lines){
		let result = true;
		for( line of lines ){
			result &= Lines[line] === undefined? false : true;
		}
		return result
	}

	function getRouteToEndDest(line, startDest, endDest, toPrint="Route: "){
		let startDestIndex = Lines[line].indexOf(startDest);
		let endDestIndex = Lines[line].indexOf(endDest);
		let positionIndecator =  endDestIndex > startDestIndex;

		for(var i = startDestIndex + (positionIndecator? 1 : -1), numberOfStops = 0; i !== endDestIndex; positionIndecator? ++i : --i, ++numberOfStops){
			toPrint += Lines[line][i]+", ";
		}

		return [toPrint + Lines[line][i] + ".", numberOfStops + 1];
	}

	function planTrip(startLine, startDest, endLine, endDest){
		startLine = startLine === "6" ? "six" : startLine
		endLine = endLine === "6" ? "six" : endLine

		let toPrint = "You must travel through the following stops on the "+startLine+" line: "

		if(!validateLines(startLine, endLine)){
			return "Lines requested does not exists"	
		}else if(startLine === endLine){
			if(startDest === endDest){
				return "You are here - no need to take the public trasportation"
			}else if(!validateStops(startLine, startDest, endDest)){
				return "Stops requested does not exists"
			}
			let routeInfo = getRouteToEndDest(startLine, startDest, endDest, toPrint);
			return  routeInfo[0] + "\n" + routeInfo[1] + " stops in total."
		}else{
			if(!(validateStops(startLine, startDest) && validateStops(endLine, endDest))){
				return "Stops requested does not exists"
			}
			let routeInfo = getRouteToEndDest(startLine, startDest, "Union Square", toPrint);
			toPrint = routeInfo[0] + "\nChange at Union Square.\nYour journey continues through the following stops: ";
			let routeInfo2 = getRouteToEndDest(endLine, "Union Square", endDest, toPrint);
			toPrint = routeInfo2[0]

			return  toPrint+ "\n" + (routeInfo[1] + routeInfo2[1])+ " stops in total."
		}
	}

	return {
		planTrip: planTrip
	}

})()

console.log(tripPlanner.planTrip("N", "Times Square", "6", "33rd")); 