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
            // if not at the last enemy in the array
            if (playerHealth > 0 && i < enemyName.length - 1) {
                //ask if player wants to visit the shop before the next round begins
                var storeConfirm = confirm("The fight is over. Visit Store before the next round?");
                //if yes then take them to the store
                if (storeConfirm) {
                    shop();
                }

            }
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

        }
    }
};

var shop = function () {
    var shopOptionPrompt = prompt("Would you like to refill your health, Upgrade your Attack or Leave the store? Please enter one: 'REFILL' , 'UPGRADE' , or 'LEAVE' to make a choice");

    switch (shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if (playerMoney > 7) {
                window.alert("Refilling player's health by 20 for $7. ");

                playerHealth += 20;
                playerMoney -= 7;
                console.log("Player health refilled. Current player health: " + playerHealth);
            }
            else {
                alert("You dont have enough Money.");
            }

            break;

        case "upgrade":
        case "UPGRADE":
            if (playerMoney > 7) {
                window.alert("Upgrading players attack by 6 for $7. ");
                playerAttack += 6;
                playerMoney -= 7;
            }
            else {
                alert("You dont have enough Money.");
            }
            break;

        case "leave":
        case "LEAVE":
            alert("Leaving the store.");
            break;

        default:
            alert("You picked an Invalid option. Try again.");
            shop();
            break;
    }
};

//Start the game when the page loads
startGame();