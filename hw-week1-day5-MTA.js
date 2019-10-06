function planTrip(Pline, Pspot, Wline, Wspot) {

    var L = ['8th','6th','Union Square','3rd','1st']
    var N = ['TimesQuer','34th','28th','23rd','Union Square','8th']
    var six =['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    
    var steps = 0 
    var move =''
    var steps = 0
    var Location
    var goingTo
    var usi
    var sti
    
    // to get the index
    if (Pline == "L") 
    {
      Location = L
      usi = Location.indexOf(Pspot)
    }
    else if (Pline == "N") 
    {
       Location = N
       usi = Location.indexOf(Pspot)
    }
    else if (Pline == "6") 
    {
       Location = six
       usi = Location.indexOf(Pspot)
    }
    
    if (Wline == "L") 
    {
      goingTo = L
      sti = goingTo.indexOf(Wspot)
    }
    else if (Wline == "N") 
    {
      goingTo = N
      sti = goingTo.indexOf(Wspot)
    }
    else if (Wline == "6") 
    {
      goingTo = six
      sti = goingTo.indexOf(Wspot)
    }
    
    // check if there are difrent line 
    if (Pline == Wline)
    {
      // calculate the steps
    if (usi >= 2 )
    {
      for (var i = 0; i < sti - usi; i++ )
    {
        steps ++
    }
    }
    else if (usi == 1 )
    {
      for (var i = 1; i < sti; i++ )
    {
        steps ++
    }
    }
    else 
    {
      for (var i = 0 ; i < sti ; i++ )
    {
        steps ++
    } 
    }
    // get the spot
    for (var i =0 ;i< steps;i++,usi++)
    {
      move += Location[usi+1]+"," 
    }
    console.log("You must travel through the following stops on the " + Pline+" line: " + move)
    console.log(steps + " stops in total.")
    }
    else 
    {
      var countL = 0
      var countG = 0
      var L = Location.indexOf(Pspot)
      var G = goingTo.indexOf(Wspot)
    
      for (var i = 0; i < Location.length ;i++)
      {
    
      }
       for (var i = G ; i < goingTo.length ;i++)
      {
        if (goingTo[G] === 'US')
        {
          countG++
        }
      }
      console.log(countL)
      console.log(countG)
      // console.log("You must travel through the following stops on the " + Pline+" line: " + move)
      // console.log("Change at Union Square.")
      // console.log( "Your journey continues through the following stops: 23rd, 28th, 33rd.")
      // console.log(steps + " stops in total.")
    }
    }
    
    planTrip("6", "Grand Central", "6", "23rd")
    planTrip("6", "Grand Central", "N", "23rd")
    