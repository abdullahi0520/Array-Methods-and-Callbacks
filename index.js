const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
//
const finals2014 = fifaData.filter(function(item){
    return item.Stage === 'Final' && item.Year === 2014;
    });

//(a) Home Team name for 2014 world cup final
console.log('task 1a:', finals2014[0]['Home Team Name'])
//(b) Away Team name for 2014 world cup final
console.log('task1b:', finals2014[0]['Away Team Name'])
//(c) Home Team goals for 2014 world cup final
console.log('task1c:', finals2014[0]['Home Team Goals'])
//(d) Away Team goals for 2014 world cup final
console.log('task1d:', finals2014[0]['Away Team Goals'])
//(e) Winner of 2014 world cup final */
console.log('task1e:', finals2014[0]['Win conditions'])

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/
//recieve array as parameter - this will be fifaData when u pass in arguement
function getFinals(data) {
  const finalTeam = data.filter(function(item){
      return item.Stage === 'Final';
  })
return finalTeam
   //can use filter here and stage ==== 'Final'
}
console.log('task2:',getFinals(fifaData))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/
// 2 paramater array and get finals callback
function getYears(data, getFinalscb) {
    return getFinalscb(data).map(item => item.Year);   
}
console.log('task3:', getYears(fifaData,getFinals));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 
//have 2 parameter array/get finals Cb
function getWinners(data, getFinalscb) {
    return getFinalscb(data).map(item => item['Home Team Goals'] > item['Away Team Goals'] ?
    item['Home Team Name'] : item['Away Team Name']);
    //use map
    //use conditional if home team goals > away team goals then we want home team name else away team name
}
console.log('task4',getWinners(fifaData,getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getFinals from task 2
3. Receive a callback function getYears from task 3
4. Receive a callback function getWinners from task 4
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */
//four parameters, array get finalscb, get yearscb, get winnerscb
function getWinnersByYear(data, getYearscb, getWinnerscb) {
    const winners = getWinnerscb(data,getFinals);
    const years = getYearscb(data,getFinals);
    return winners.map((item,index) => `In ${years[index]}, ${item} won the world cup!`);
    //use map - map over one array and grab each item, use index to grab item in other array
}
console.log('task 5', getWinnersByYear(fifaData, getYears,getWinners))



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/
//recieve getFinalscb, 
function getAverageGoals(data) {
 const averageHomeGoals = data.reduce(function(acc,item){
     return acc + item['Home Team Goals'] + item['Away Team Goals'];
 }, 0)
 return (averageHomeGoals / data.length).toFixed(2);
//use .reduce to add up all goals of home and away team
//then would divide by length of an array
//round to 2 decimal place ** look up toFixed
}
//getAverageGoals(getFinals(fifaData))
console.log('Task 6', getAverageGoals(fifaData));


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
