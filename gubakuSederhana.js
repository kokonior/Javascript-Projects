let again = true;
const start = alert('Welcome To GUBAKU GAMES\nBy Daniansyah\n\nYou have 3 Life');

while (again) {
    for (let i = 3; i > 0; i--) {
        let player = prompt('Choose Character : gunting, batu, kertas');

        let nyawa = i - 1;
        if (nyawa == 2) {
            nyawa = 'You have 2 Life';
        } else if (nyawa == 1) {
            nyawa = 'Hurry Up, left 1 life again';
        } else {
            nyawa = 'Uuupsss, GAME OVER';
        }

        let comp = Math.random();

        if (comp < 0.34) {
            comp = 'gunting';
        } else if (comp >= 0.34 && comp <= 0.66) {
            comp = 'batu';
        } else {
            comp = 'kertas';
        }

        let result = '';
        if (player == comp) {
            result = 'DRAW!';
        } else if (player == 'gunting') {
            result = (comp == 'batu') ? 'LOSE!' : 'WIN!';
        } else if (player == 'batu') {
            result = (comp == 'kertas') ? 'LOSE!' : 'WIN!';
        } else if (player == 'kertas') {
            result = (comp == 'gunting') ? 'LOSE!' : 'WIN!';
        } else {
            result = 'False input, Lets Try again!';
        }

        if (result == 'WIN!') {
            alert(`You : ${player}\nComputer : ${comp}\n\nCongratulations You ${result}`);
            i = 0;
        } else if (result == 'LOSE!') {
            alert(`You : ${player}\nComputer : ${comp}\n\nOh No, You ${result}\n\n${nyawa}`);
        } else if (result == 'DRAW!') {
            alert(`You : ${player}\nComputer : ${comp}\n\nHuuuhhh, You ${result}\n\n${nyawa}`);
        } else if (player == null) {
            alert(`Canceled, Your Games was ended`);
            i = 0;
        } else {
            alert(`You : ${player}\n\nSorry ${result}\n\n${nyawa}`);
        }
    }
    again = confirm('Play again ?');
}

alert('Computer : Thank You');