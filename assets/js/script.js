function loadDoc() {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let word = this.responseText.trim();
            let screenWord = '';
            let letters = [];

            for (let i = 0; i < word.length; i++) {
                screenWord += '_';
                
            }
            console.log(word.length);
            console.log(word);

            document.getElementById("word").innerHTML = screenWord;
            let letter = document.getElementById("letter");
            let btn = document.getElementById("btn");

            btn.addEventListener('click', function(){
                console.log('btn');
            });

            letter.addEventListener('click', function(){
                screenWord = '';
                letters.push(letter.value);
                //non funziona ancora
                for (let c = 0; c < word.length; c++) {
                    screenWord += letters.includes(word[c]) ? letter.value : '_';
                    console.log(letters);
                }
                document.getElementById("word").innerHTML = screenWord;
            });
        }
    };

    xhttp.open("POST", "http://localhost/Pendu/api/getData.php?tr=12345", true);
    xhttp.send();
}

//code
loadDoc();