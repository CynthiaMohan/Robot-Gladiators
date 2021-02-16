var playerInfo = {
    name: prompt("What is your Robots Name"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money > 7) {
            window.alert("Refilling player's health by 20 for $7. ");
            this.health += 20;
            this.money -= 7;
        }
        else {
            alert("You dont have enough Money.");
        }


    },
    upgradeAttack: function () {
        if (this.money > 7) {
            window.alert("Upgrading players attack by 6 for $7. ");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            alert("You dont have enough Money.");
        }
    }
};

var enemy = [
    { name: "Roborto", attack: 12 },
    { name: "Amy Android", attack: 13 },
    { name: "Robo Trumble", attack: 14 }
];
console.log("LetsBegin " + playerInfo.name);
// window.alert("Welcome to Robot Gladiators");

var fight = function (enemy) {
    console.log(enemy);
    while (enemy.health > 0 && playerInfo.health > 0) {



        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.");

        if (promptFight === 'FIGHT' || promptFight === 'fight') {
            // enemy.health = Math.max(0, enemy.health - playerInfo.attack);

            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

            enemy.health = Math.max(0, enemy.health - damage);

            console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining");
            // playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);

            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining");

            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left");
            }
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died");
                break;
            }
        }

        else if (promptFight === 'SKIP' || promptFight === 'skip') {
            var confirmSkip = window.confirm("Are you sure you eant to Quit?");
            if (confirmSkip) {

                window.alert(playerInfo.name + " has chosen to SKIP the fight. GoodBye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log(playerInfo.name + " has " + playerInfo.money + " playerInfo.money left.");
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
    playerInfo.reset();
    enemy.health = randomNumber(40, 60);


    for (let i = 0; i < enemy.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemy[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            console.log(pickedEnemyObj);
            fight(pickedEnemyObj);
            // if not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemy.length - 1) {
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
    if (playerInfo.health > 0) {
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
            playerInfo.refillHealth();
            console.log("Player health refilled. Current player health: " + playerInfo.health);
            break;

        case "upgrade":
        case "UPGRADE":
            playerInfo.upgradeAttack();
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

var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};

//Start the game when the page loads
startGame();