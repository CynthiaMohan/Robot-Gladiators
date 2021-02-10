var playerName = window.prompt("What is your Robots Name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
//Your Player
console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function () {
    window.alert("Welcome to Robot Gladiators");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");
    console.log(promptFight);
    if (promptFight === 'FIGHT' || promptFight === 'fight') {
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining");
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining");

        if (playerHealth <= 0) {
            window.alert(playerName + " has died");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
    }
    else if (promptFight === 'SKIP' || promptFight === 'skip') {
        var confirmSkip = window.confirm("Are you sure you eant to Quit?");
        if (confirmSkip) {
            window.alert(playerName + " has chosen to SKIP the fight. GoodBye!");
            playerMoney -= 2;
            console.log(playerName + " has " + playerMoney + " playerMoney left.");
        }
        else {
            fight();
        }
    }
    else {
        window.alert("Invalid Option. Try Again!");
    }
};
fight();