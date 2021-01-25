<?php
$fileContent = [];
$lineNbr = 0;

function readerFile()
{
    $file = fopen('words.txt', 'r');
    $content = [];
    
    while(! feof($file)) {
        $line = fgets($file);
        array_push($content, trim($line, " "));
        
    }
    fclose($file);
    return $content;
}

function randomWord($array)
{
    $word = $array[random_int(0, count($array))];

    return trim($word, "\n| ");
}


//code
$fileContent = readerFile();
$word = randomWord($fileContent);
var_dump($word);

?>

<!DOCTYPE html> 
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Pendu">
        <meta name="author" content="Giuseppe Mazzeo">
        <meta name="viewport" content="width=device-width, initia-scale=1.0">
        <title>Jeu du Pendu</title>
    </head>
    <body>
    <script>
        let wrd = <?php echo($word) ?>
    </script>
        <canvas></canvas>
        <p id="word">
        <?php for ($i=0; $i < strlen($word); $i++) { ?>
            _ 
        <?php } ?>
    </body>
</html>