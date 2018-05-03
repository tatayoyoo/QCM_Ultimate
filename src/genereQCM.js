/**
 * Created by Yoann on 11/04/2018.
 */

var nbsDeQuestionAPosee = 10;
var numerosQuestionFaite = [];
var tabResultat = [];
var nbsQuestionEnBDD = 16;
var div_QCM;
var score = 0;

function chargeQCM(){
    div_QCM = document.createElement("div");
    div_QCM.setAttribute("style","text-align : left;");

    numerosQuestionFaite = [];
    tabResultat = [];
    chargeQuestion();


}
function questionDejaPosee(numQuestion) {
    if (numerosQuestionFaite.length > 0) {
        for (var i = 0; i < numerosQuestionFaite.length; i++) {
            if (numerosQuestionFaite[i] == numQuestion) {
                return true;
            }
        }
    } else {
        return false;
    }

    return false;
}

function chargeQuestion(){
    var questionPosee = true;
    var numQuestion;

    while (questionPosee) {
        numQuestion = getRandomInt(1, nbsQuestionEnBDD + 1);

        questionPosee = questionDejaPosee(numQuestion);
    }
    alert("on ajoute la question : " + numQuestion + " \n tab : " + numerosQuestionFaite);
    numerosQuestionFaite.push(numQuestion);

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
    for (var i = 0; i < 4; i++) {
        var rep = reps[i].split(";");
        document.getElementById("label" + i).innerHTML = rep[0];
        document.getElementById("choix" + i).setAttribute("value", rep[1]);
    }
}

function valideReponse(tabRep, nbsRep) {
    var rep = true;
    for (var i = 0; i < nbsRep; i++) {
        if (tabRep[i].value == 1 && tabRep[i].checked == false) rep = false;
        if (tabRep[i].value == 0 && tabRep[i].checked == true) rep = false;
    }

    if (rep) {
        score++;
    }

    tabResultat.push(rep);

    if (numerosQuestionFaite.length == nbsDeQuestionAPosee) {
        finQCM();
    } else {
        chargeQuestion()
    }
}


function finQCM() {
    alert("QCM finit !!!! \n Vous avez obtenue un score de " + score + " bonne(s) réponse(s) sur " + nbsDeQuestionAPosee);
}



function getRandomInt(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);

    return Math.floor(Math.random()*(max-min)+min);
}