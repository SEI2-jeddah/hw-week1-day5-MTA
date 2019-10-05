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

    
      
      else if(startLineIndex != endLineIndex)
      {
        let tripcomp = []
  
        function firstTrip(startLine,startStation)
        {
          var startLineIndex = subwayLines[startLine];
          var startStationIndex = subwayLines[startLine].indexOf(startStation);
          var unionSquareStation = subwayLines[startLine].indexOf("US");
          if( startStationIndex < unionSquareStation) 
              {
             return startLineIndex.slice(startStationIndex, unionSquareStation + 1);
             } 
          else if (startStationIndex > unionSquareStation)
             {
              return startLineIndex.slice(startStationIndex, unionSquareStation + 1).reverse();
             }

        }
        function secondTrip(endLine,endStation)
        {
          var endLineIndex = subwayLines[endLine];
          var endStationIndex = subwayLines[startLine].indexOf(endStation);
          var unionSquareStation = subwayLines[endLine].indexOf("US");
          if( endStationIndex < unionSquareStation) 
          {
             return endLineIndex.slice(endStationIndex, unionSquareStation + 1);
          } 
          else if (endStationIndex > unionSquareStation)
          {
              return endLineIndex.slice(endStationIndex, unionSquareStation + 1).reverse();
          }

        }
        tripcomp.push= firstTrip
        tripcomp.push= secondTrip

        return tripcomp
    }
  }
    planTrip ("o", "33rd", "o", "AP"); 
    planTrip ("n", "US", "o", "33rd"); 

    
 