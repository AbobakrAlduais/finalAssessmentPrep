//=============================================================================
/*                                  Part 2                                   */
//=============================================================================
 /*

  Hint: write the function in question (b, c, d) outside the Player scope 

  Note : do not use (for, while, recursion) but you allowed to use the High order function
    like (.map, .each, .filter, .reduce,.....) if you don't know how to use it just Google it 
 
 today we will create a football team using what we learn,

  a - we need to create the players using OOP the player declaration
    should take the name of the player    ==> var player1 = Player("jony")

  b - after that we need function to add the other info for the player with addInfo function
    ==> player1.addInfo(age, position, level, availability );

  c- and create another function to increase the the level for the player by n value 
    ==> player1.increaseLevel(4); 

  d - we need another function to check if the player is available or not it should return true or false
    ==> player1.isAvailable();  true / false

  e - then we need to create 4 players and add the info for them and put them inside the arrayOfPlayers

  f - write function to iterate over the all players to decrease the level for the player if age larger the 30

  g - sort the players in the arrayOfPlayers by the key
    sortPalyerBy(arrayOfPlayers, "age");
    sortPalyerBy(arrayOfPlayers, "name");
 */

//writ your code here .....
var player1 = Player("jony");
var player2 = Player("ahmed");
var player3 = Player("mohammed");
var player4 = Player("sara");



var arrayOfPlayers=[player1,player2,player3,player4]
function Player(name){


  var obj={};
  obj.addInfo=addInfo;
  obj.name=name;
  obj.increaseLevel=increaseLevel;
  obj.isAvailable=isAvailable;
  obj.decreaseLevel=decreaseLevel;
  obj.sortPalyerBy=sortPalyerBy;
  return obj;

}

var addInfo=function(age, position, level, availability){
  
  this.age=age;
  this.position=position;
  this.level=level;
  this.availability=availability;
}
var increaseLevel=function(n){
      this.level+=n
}

var isAvailable=function(){
  return this.availability;  
}

var decreaseLevel=function(){
  for(var i=0;i<arrayOfPlayers.lngth;i++){
    if (arrayOfPlayers[i].age>30){
     tarrayOfPlayers[i].age--;
    }
  }

}
var sortPalyerBy=function(arrayOfPlayers,key){
      for(var i=0;i<arrayOfPlayers.lngth;i++){
        arrayOfPlayers.sort(arrayOfPlayers[i][key])
      }
      return arrayOfPlayers;

}