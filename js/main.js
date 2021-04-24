const startButton = document.querySelector('#startButton');

const inputBox = document.querySelector('#inputBox');

inputBox.disabled = true;

// Start Game
startButton.addEventListener('click', (e) => {
    levelOne();
    startButton.disabled = true;
    inputBox.disabled = false;
    inputBox.placeholder = '';
    inputBox.focus();
});

const wordsLevelOne = ['heal', 'eaux','west','crack','herb','shape','anger','fairy','queen'];

const wordsLevelTwo = ['perceive', 'fastidious', 'settle', 'problem', 'aquarium', 'transfer', 'bitter', 'business', 'person'];

const wordsLevelThree = ['interactive', 'bedroom', 'tune', 'light', 'heavy', 'threaten', 'effective', 'affair', 'gaffe'] ;


const print = document.querySelector('#results');

let sumPoints = 0;
let noPoints = 0;


const levelOne = () => {
    const random = Math.floor(Math.random() * wordsLevelOne.length);
    displayWord = wordsLevelOne[random];
    // console.log(displayWord);
    const wordBox = document.querySelector('#wordBox');
    wordBox.innerHTML = displayWord;

    setTimeout(() => {
        wordBox.innerHTML = '';
    }, 1500);
}

const levelTwo = () => {
    const random = Math.floor(Math.random() * wordsLevelTwo.length);
    displayWord = wordsLevelTwo[random];
    const wordBox = document.querySelector('#wordBox');
    wordBox.innerHTML = displayWord;

    setTimeout(() => {
        wordBox.innerHTML = '';
    }, 1000);
}

const levelThree = () => {
    const random1 = Math.floor(Math.random() * wordsLevelThree.length);
    const random2 = Math.floor(Math.random() * wordsLevelThree.length );

    const word1 = wordsLevelThree[random1];
    const word2 = wordsLevelThree[random2];
    
    displayWord = `${word1} ${word2}`;

    const wordBox = document.querySelector('#wordBox');
    wordBox.innerHTML = displayWord;

    setTimeout(() => {
        wordBox.innerHTML = '';
    }, 900);
}


inputBox.addEventListener('keypress', (e) => {
    const inputValue = document.getElementById('inputBox').value;

    if(inputValue != '' && e.key === 'Enter') {

        if (inputValue === displayWord) {

            sumPoints += 1;

            console.log(`Sum Points = ${sumPoints}`);
            
            
            print.innerHTML += `<span class="correct">Perfect!! (${displayWord})</span><br>`;


            if(sumPoints >= 6) {
                levelThree();
                console.log('Level Three');
            } else if(sumPoints >= 3) {
                levelTwo();
                console.log('Level Two');
            } else {
                levelOne();
            }

            document.getElementById("inputBox").value = "";

            
        } else {
            noPoints += 1;

            console.log(`No Points = ${noPoints}`);

            print.innerHTML += `<span class="wrong">Wrong Word!! Strike ${noPoints}</span><br>`;

            document.getElementById("inputBox").value = "";

            if(sumPoints <= 3) {
                levelOne();
            } else if(sumPoints > 3 && sumPoints <= 6) {
                levelTwo();
            } else {
                levelThree();
            }

            if(noPoints >= 3) {
                alert('Wrong Word!! Strike 3!! Game Over!! Try Again!!');
                location.reload();
            }

        }
    }
});