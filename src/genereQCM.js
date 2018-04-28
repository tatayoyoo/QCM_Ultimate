/**
 * Created by Yoann on 11/04/2018.
 */
var numerosQuestionFaite = [];
var reponse = ["Bond OU une prase plus ou moins longue cest possible","Marcher","Contact","Pique"];
var nbsQuestion = 2;
var div_QCM;

function chargeQCM(){
    div_QCM = document.createElement("div");
    div_QCM.setAttribute("style","text-align : left;");

    numerosQuestionFaite = [];

    chargeQuestion();


}


function chargeQuestion(){
    numQuestion = getRandomInt(1,nbsQuestion+1);
    chargeReponse(numQuestion);

    xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.overrideMimeType("text/html; charset=iso-8859-1");
    xmlhttp1.onreadystatechange = function () {
        if (xmlhttp1.readyState === 4 && xmlhttp1.status === 200) {
            var reponse = xmlhttp1.responseText;
            document.getElementById("champsQuestion").innerHTML = reponse;

        }
    };
    xmlhttp1.open("GET", "chargeQuestion.php?numQuestion=" + numQuestion, true);
    xmlhttp1.send();
}
function chargeReponse(numQuestion) {
    xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.overrideMimeType("text/html; charset=iso-8859-1");
    xmlhttp2.onreadystatechange = function () {
        if (xmlhttp2.readyState === 4 && xmlhttp2.status === 200) {

            var reps = xmlhttp2.responseText.split(",");
            afficheReponses(reps);
        }
    };
    xmlhttp2.open("GET", "chargeReponses.php?numQuestion=" + numQuestion, true);
    xmlhttp2.send();
}

function afficheReponses(reps) {
    var rep = document.createElement("span");
    rep.innerHTML += reps[0] + " ";
    rep.innerHTML += reps[1] + " ";
    rep.innerHTML += reps[2] + " ";
    rep.innerHTML += reps[3] + " ";

    for (var i = 0; i < 4; i++) {
        document.getElementById("label" + i).innerHTML = reps[i];
        document.getElementById("choix" + i).setAttribute("value", "true");
    }
}


function valideReponse() {

}

function getRandomInt(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);

    return Math.floor(Math.random()*(max-min)+min);
}