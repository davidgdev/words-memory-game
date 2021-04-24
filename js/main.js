const startButton = document.querySelector('#startButton');

const inputBox = document.querySelector('#inputBox');

const body = document.querySelector('body');

inputBox.disabled = true;

// Start Game
startButton.addEventListener('click', (e) => {
    levelOne();
    // startButton.disabled = true;
    startButton.innerHTML = 'RESTART';
    startButton.classList.add('reload');
    inputBox.disabled = false;
    inputBox.placeholder = '';
    inputBox.focus();

    reload();
});

// Restart game
const reload = () => {
    let reloadButton = document.querySelector('.reload');
    
    reloadButton.addEventListener('click', (e) => {
        confirm('Do you want to restart the game?');
        location.reload();
    });

}


// Pool of Words
const wordsLevelOne = ['set','tree','damn','fleet','rebel','sock','guide','video','ask','exit','die','lemon','charm','wall','final','fork','main','bite','gain','range','marsh','user','craft','coin','air','money','hay','young','anger','vague','palm','flu','black','new','hover','item','widen','arch','star','delay','dry','north','mark','soil','trait','monk','moon','do','bus','motif'];

const wordsLevelTwo = ['degree','screen','favourite','episode','reckless','abridge','census','gradual','sleeve','shatter','estate','consolidate','peasant','profile','summary','profound','preparation','forest','serious','satellite','railcar','earthquake','secure','offense','spider','parking','filter','expression','ambition','background','distant','charge','reader','cemetery','origin','writer','cucumber','obligation','language','prosecute','teacher','fisherman','climate','creation','redundancy','plaster','linear','document','escape','student',];

const wordsLevelThree = ['policeman','flight','justify','vision','build','tent','engagement','deliver','wedding','comfort','critical','spill','insight','disagree','priority','radio','fox','presidency','throne','thesis','resign','displace','widen','material','celebration','reach','abuse','point','contract','environmental','revive','houseplant','ring','sow','vegetation','criticism','proclaim','formal','state','ghost','humor','overeat','trade','stomach','rebellion','transfer','belly','hypothesis','dozen','class',] ;


const print = document.querySelector('#results');

let sumPoints = 0;
let noPoints = 0;

// Levels
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

    body.classList.add('levelTwo');

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

    body.classList.remove('levelTwo');
    body.classList.add('levelThree');

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

            print.innerHTML += `<span class="wrong">Wrong Word!! Strike ${noPoints}!!</span><br>`;

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