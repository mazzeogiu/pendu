<?php
$fileContent = [];
$lineNbr = 0;

function readerFile()
{
    $file = fopen('../assets/data/words.txt', 'r');
    $content = [];
    
    while(!feof($file)) {
        $line = fgets($file);
        array_push($content, trim($line, " "));
        
    }
    fclose($file);
    return $content;
}

function randomWord($array)
{
    $word = '';
    while (strlen($word) < 4) {
        $word = $array[random_int(0, count($array))];
        trim($word, "\n| ");
    }

    return $word;
}


//code

$fileContent = readerFile();
$word = randomWord($fileContent);
echo($word);
?>

