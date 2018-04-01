// Code your solution here:
// driversWithRevenueOver-
//   takes an array of driver JavaScript objects as the first argument
//     and a string called revenue as the second argument.
//   returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.
function driversWithRevenueOver(array,string){
  // return array.map( (obj) => {
  //   if( obj.revenue > string) {return obj}
  //   // obj.filter( self.revenue > string)
  // })
  return array.filter(obj => obj.revenue > string)
}

// driverNamesWithRevenueOver() - This function works the same way as driversWithRevenueOver().
//   returns an array of strings representing the name of each driver
//     who has a revenue greater than the specified amount.
//     // For example, driverNamesWithRevenueOver(drivers, 2000) will return ['Sammy'],
//      // as Sammy is the name of the matching driver object with a revenue greater than 2000.
//
function driverNamesWithRevenueOver(array,string){
  return driversWithRevenueOver(array,string).map( obj => obj.name)
}

// exactMatch() - This function takes an array of driver objects as the first argument and
//   a JavaScript object that specifies an attribute and corresponding value.
//   For example, exactMatch(drivers, { revenue: 3000 })
//   will return all drivers whose revenue attribute equals 3000,
//   and exactMatch(drivers, { name: 'Bob' }) will return all drivers whose name attribute equals Bob.
function exactMatch(array,match_obj){
  // return array.filter(obj => obj.map)//filter
  return array.filter(function(obj){
    for (var key in match_obj) {
    match = true
    if (match_obj.hasOwnProperty(key)) {
        // console.log(key + " -> " + p[key]);
        if (match_obj[key] !== obj[key]) { match = false}
    }
    if (match == true ){return obj}
  }
  })//filter
}


function exactMatchToList(array,match_obj){
  return exactMatch(array,match_obj).map( obj => obj.name)
}

//
// drivers = []
// drivers.push(
//   { name: 'Sally',   revenue: 400 },
//   { name: 'Annette', revenue: 200 },
//   { name: 'Jim',     revenue: 150 }
// );
//
// console.log(driverNamesWithRevenueOver(drivers, 199))
