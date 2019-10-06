# MTA Lab

## Objectives:

- Apply your knowledge of JavaScript to solve a real world problem.
- Get really good at array manipulation.

### Activity

- Create a program that models a simple subway system.

- The program takes the line and stop that a user is getting on at and the line
  and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

```javascript
planTrip("N", "Times Square", "6", "33rd"); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
```

- There are 3 subway lines:
  - The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
  - The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
  - The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
  - All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
- Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

### Hints:

- Work out how you would do it on paper first! Then start to explain that process in JavaScript.
- Focus on **a single line** before trying to tackle multiple lines!!
  - Hint: A multiple line trip could be considered two single line trips
- Don't worry about prompting the user for input. Hard code some values to get it working. You can use `prompt()` later, if you want, to make it more interactive.
- Consider drawing the lines by sketching out the subway lines and their stops and intersection.
- The key to the lab is finding the index positions of each stop. (hint: `.indexOf()` and `.includes()`)

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

