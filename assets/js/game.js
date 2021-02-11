var playerName = window.prompt("What is your Robots Name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roborto", "Amy Android", "Robo Rrumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log("LetsBegin " + playerName);
// window.alert("Welcome to Robot Gladiators");

var fight = function (enemyName) {

    while (enemyHealth > 0 && playerHealth > 0) {



        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === 'FIGHT' || promptFight === 'fight') {
            enemyHealth = enemyHealth - playerAttack;
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");
            playerHealth = playerHealth - enemyAttack;
            console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

            if (playerHealth <= 0) {
                window.alert(playerName + " has died");
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left");
            }
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died");
                break;
            }
        }

        else if (promptFight === 'SKIP' || promptFight === 'skip') {
            var confirmSkip = window.confirm("Are you sure you eant to Quit?");
            if (confirmSkip) {

                window.alert(playerName + " has chosen to SKIP the fight. GoodBye!");
                playerMoney -= 10;
                console.log(playerName + " has " + playerMoney + " playerMoney left.");
                break;
            }
        }
        else {
            window.alert("Invalid Option. Try Again!");

        }


    };
};

// Function to start a new Game
var startGame = function () {
    //reset player stats
    playerHealth = 100;
    playerMoney = 10;
    playerAttack = 10;

    for (let i = 0; i < enemyName.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyName[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        // else {
        // window.alert("You have lost your robot in battle! Game Over!");
        // break;

        // }
        endGame();
    }
    //after the loop ends, the player is either out of health or enemies to fight

};

var endGame = function () {
    //if player is still alive, player wins.
    if (playerHealth > 0) {
        window.alert("Great Job,you've survived the game!")
    }
    else {
        //else Player Lost
        window.alert("You've lost your Robot in battle.");
    }
    //Ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    //if yes
    if (playAgainConfirm) {
        //re-start
        startGame();
    }
    //else endGame
    else {
        window.alert("Thankyou for playing Robot Gladiators! Come back soon!");
        //break;
    }
};

//Start the game when the page loads
startGame();