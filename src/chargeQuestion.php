<?php
/**
 * User: Yoann
 * Date: 17/04/2018
 * Time: 16:26
 */

$idQuestion= $_GET['numQuestion'];
$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con,"question_ultimate");

$sql="SELECT question FROM questions where numQuestion  = ".$idQuestion."";
$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result)){
    echo $row['question'];
}
mysqli_close($con);

?>