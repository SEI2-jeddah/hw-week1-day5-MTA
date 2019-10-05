var subwayLines = {
    l:["8th", "6th", "US", "3rd", "1st"],
    n:["81th", "US", "23rd", "28td", "34", "TS"],
    o:["33rd", "28th", "23rd", "US", "AP"]
  };
  function planTrip(startLine, startStation, endLine, endStation)
   {
      var startLineIndex = subwayLines[startLine];
      var endLineIndex = subwayLines[endLine];
      var startStationIndex = subwayLines[startLine].indexOf(startStation);
      var endStationIndex = subwayLines[endLine].indexOf(endStation);
  
      if(startLineIndex === endLineIndex)
      {
          if(endStationIndex > startStationIndex) 
          {
          return startLineIndex.slice(startStationIndex, endStationIndex + 1);
          } 
          else if (endStationIndex < startStationIndex)
          {
                return endLineIndex.slice(endStationIndex, startStationIndex + 1).reverse();
          }
      }
      if(startLineIndex != endLineIndex)
      {
       return "sorry, need to change Subway line in Union Square"
      }
    }
  planTrip("l","8th", "n", "3rd");