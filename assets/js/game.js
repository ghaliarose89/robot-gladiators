var playerName= window.prompt("What's your Robo name?");
var playerHealth= 100;
var playerAttack=10;
var playerMoney =10;


var enemyName = ["Roborto","Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyName) {

    // repeat and execute as long as the enemy-robot is alive 
    while (enemyHealth>0 && playerHealth>0){

              // ask player if they'd like to fight or run        
                    var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


                    // if player choses to skip
                    if (promptFight === "skip" || promptFight === "SKIP") {
                
                        // confirm player wants to skip
                        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    
                        // if yes (true), leave fight
                            if (confirmSkip) {
                                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                                // subtract money from playerMoney for skipping
                                playerMoney = playerMoney -10;
                                console.log("playerMoney", playerMoney);
                                break;
                            } 
                        }
                
                    // remove enemy's health by subtracting the amount set in the playerAttack variable
                    enemyHealth = enemyHealth - playerAttack;
                    console.log(
                    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                    );
                    
                
                    // check enemy's health
                    if (enemyHealth <= 0) {
                    window.alert(enemyName + " has died!");
                    break;
                    }
                    
                    else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                    }
                
                    // remove player's health by subtracting the amount set in the enemyAttack variable
                    playerHealth = playerHealth - enemyAttack;
                    console.log(
                    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                    );
                
                    // check player's health
                    if (playerHealth <= 0) {
                    window.alert(playerName + " has died!");
                    break;
                    } 

                    else {
                    window.alert(playerName + " still has " + playerHealth + " health left.");
                    }
                
                
                   
                }
                 
                    
            

        
    };

    var  startGame=function (){
        // reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;


        for (var i=0; i<enemyName.length; i++) {

            if (playerHealth>0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        
            var pickedEnemyName = enemyName[i];
            enemyHealth=50;
            fight(pickedEnemyName);
            }
            // this line is not working bc line 63 has a break!
            else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
            }
            endGame();

        }

        function endGame() {
            // if player is still alive, player wins!
            if (playerHealth > 0) {
                window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
            } 
            else {
                window.alert("You've lost your robot in battle.");
            }
            // ask player if they'd like to play again
            var playAgainConfirm = window.confirm("Would you like to play again?");

            if (playAgainConfirm) {
            // restart the game
             startGame();
             } 

             else {
             window.alert("Thank you for playing Robot Gladiators! Come back soon!");
             break;
             }

            };
    };

// start the game when the page loads
startGame();

















