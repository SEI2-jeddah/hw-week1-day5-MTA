var trip = (function() {
  var lines = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  };

  function planTrip(startLine, startHub, endLine, endHub) {
    var storedLine, storedLineEnd;
    if ( lines[startLine].includes(startHub) && lines[endLine].includes(endHub)) {
      if (startLine == endLine) {
        var indexStart = lines[startLine].indexOf(startHub);
        var indexend = lines[startLine].indexOf(endHub);

        var arr = [];
        for (var i = indexStart; i <= indexend; i++) {
          storedLine = lines[startLine][indexStart++];
          arr.push(storedLine);
        }
        return arr;
      } else {
        // if hubs are in diffrent lines
        var indexStart = lines[startLine].indexOf(startHub);
        var indexStartEnd = lines[startLine].length - 1;
        var indexend = lines[endLine].indexOf(endHub);
        var indexEndOfStartLine = lines[startLine].length - indexStart;

        var arr = [];
        for (var i = indexStart, j = 0;i <= indexend + indexEndOfStartLine;i++) {
          if (indexStart++ <= indexStartEnd) {
            storedLine = lines[startLine][i];
            arr.push(storedLine + " (" + startLine + ")");
          } else {
            storedLineEnd = lines[endLine][j];

            arr.push(storedLineEnd + " (" + endLine + ")");
            j++;
          }
        }
        return arr;
      }
    } else {
      console.log("wrong input");
    }

    
  }return {
      planTrip: planTrip
    };
})();

console.log(trip.planTrip("N", "Times Square", "6", "33rd"));
console.log("another trip");
console.log(trip.planTrip("N", "Times Square", "N", "23rd"));
