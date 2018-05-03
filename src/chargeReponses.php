<?php
/**
 * Created by PhpStorm.
 * User: Yoann
 * Date: 18/04/2018
 * Time: 17:22
 */

$idQuestion = $_GET['numQuestion'];
$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, "question_ultimate");


$sql = "SELECT * FROM reponses where numeroQuestion = " . $idQuestion . "";
$result = mysqli_query($con, $sql);


while ($row = mysqli_fetch_array($result)) {
    echo $row['reponse'] . ";" . $row['bonneReponse'] . ",";
}
mysqli_close($con);

?>