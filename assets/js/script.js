function design(nbrerror) {
    let svg = document.getElementById('svg');
    let output = '';
    let figure =
    [
        '<line x1="50" y1="300" x2="10" y2="330" style="stroke:rgb(46, 35, 5);stroke-width:6" />',
        '<line x1="55" y1="300" x2="55" y2="330" style="stroke:rgb(46, 35, 5);stroke-width:6" />',
        '<line x1="60" y1="300" x2="100" y2="330" style="stroke:rgb(46, 35, 5);stroke-width:6" />',
        '<rect x="50" y="0" width="10" height="300" style="fill:rgb(46, 35, 5);stroke-width:3;stroke:rgb(46, 35, 5)" />',
        '<rect x="60" y="0" width="120" height="10" style="fill:rgb(46, 35, 5);stroke-width:3;stroke:rgb(46, 35, 5)" />',
        '<line x1="60" y1="60" x2="110" y2="10" style="stroke:rgb(46,35, 5);stroke-width:6" />',
        '<line x1="150" y1="10" x2="150" y2="80" style="stroke:rgb(46, 35, 5);stroke-width:3" />',
        '<circle cx="150" cy="100" r="20" stroke="black" stroke-width="4" fill="grey" />',
        '<line x1="150" y1="120" x2="150" y2="200" style="stroke:rgb(0, 0, 0);stroke-width:5" />',
        '<line x1="150" y1="130" x2="125" y2="180" style="stroke:rgb(0, 0, 0);stroke-width:5" />',
        '<line x1="150" y1="130" x2="175" y2="180" style="stroke:rgb(0, 0, 0);stroke-width:5" />',
        '<line x1="150" y1="200" x2="130" y2="270" style="stroke:rgb(0, 0, 0);stroke-width:5" />',
        '<line x1="150" y1="200" x2="170" y2="270" style="stroke:rgb(0, 0, 0);stroke-width:5" />',
    ];

    for (let i = 0; i < nbrerror; i++) {
      output += figure[i];  
    }
    svg.innerHTML = output;        
}

function checkLetter(array, word) {
    let output = ''
    for (let c = 0; c < word.length; c++) {
        if (array.includes(word[c])) {
            output = output + word[c];
        }else {
            output = output + '_';
        }
    }
    document.getElementById("word").innerHTML = output;
}

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let word = this.responseText.trim();
            let hiddenWord = '';
            let nbrError = 0;
            let letters = [];
            let letter = document.getElementById("letter");
            let btn = document.getElementById("btn");

            //Inizialise word on screen
            for (let i = 0; i < word.length; i++) {
                hiddenWord += word[i] =='-' ? '-' : '_'; 
            }
            document.getElementById("word").innerHTML = hiddenWord;
           
            console.log(word);

            //Add new choose letter
            letter.addEventListener('click', function(){
                hiddenWord = '';
                letters.push(letter.value);

                checkLetter(letters, word);
                
                if (!word.includes(letter.value)) {
                    nbrError += 1;
                    design(nbrError);
                }
                
            });

            //check solution
            btn.addEventListener('click', function(){
                let solution = document.getElementById("solution").value;


                if(solution === word) {
                    document.getElementById("word").innerHTML = word;
                    console.log("win");
                }else {
                    nbrError += 1;
                    design(nbrError);
                    console.log("Lose + dessin")
                }
            });
        }
    };

    xhttp.open("POST", "http://localhost/Pendu/api/getData.php?tr=12345", true);
    xhttp.send();
}



//code
loadDoc();