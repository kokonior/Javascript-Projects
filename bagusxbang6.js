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
