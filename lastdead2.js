let GameManager ={
    setGameStart: function(classType){
        this.resetPlayer(classType);
        this.setPreFight();
    },

    resetPlayer: function(classType){
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Rogue":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;
            case "Mage":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case "Hunter":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
        }

        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/'+ classType.toLowerCase() +'.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Mana: ' + player.mana + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },

    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Task: Find an Enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for an enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        
        //Create enemy!

        let enemy00 = new Enemy("Goblin", 100, 0, 50, 100, 100);
        let enemy01 = new Enemy("Troll", 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/'+ enemy.enemyType.toLowerCase() +'.jpg" class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}

//initiate attacks!
    if(getPlayerSpeed >= getEnemySpeed){
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit" + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");
        if(enemy.health<=0){
            alert("You win! Refresh browser to play again.");
            getPlayerHealth.innerHTML = 'Health: '+ player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        }else{
            getEnemyHealth.innerHTML = 'Health: '+ enemy.health;
            //enemy attacks
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit" + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
            if(player.health<=0){
            alert("You loose! Refresh browser to play again.");
            getPlayerHealth.innerHTML = 'Health: 0';
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }else{
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }
        }
    }
    else if(getEnemySpeed >= getPlayerSpeed){
        let enemyAttackValues = enemyAttack();
        let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
        player.health = player.health - totalDamage;
        alert("Enemy hit" + enemyAttackValues[0] + "damage" + enemyAttackValues[1] + "times.");
        if(player.health<=0){
            alert("You loose! Refresh browser to play again.");
            getEnemyHealth.innerHTML = 'Health: '+ enemy.health;
            getPlayerHealth.innerHTML = 'Health: 0';
        }else{
            getPlayerHealth.innerHTML = 'Health: '+ player.health;
            //Player attacks
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit" + playerAttackValues[0] + "damage" + playerAttackValues[1] + "times.");
            if(enemy.health<=0){
            alert("You win! Refresh browser to play again.");
            getEnemyHealth.innerHTML = 'Health: 0';
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            }else{
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
            }
        }
    }
    }
}
