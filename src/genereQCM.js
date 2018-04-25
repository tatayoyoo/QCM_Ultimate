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

    /*    for(var i=0; i<4;i++){

     var button = document.createElement("button");
     button.setAttribute("name","A prendre de la BDD");
     button.setAttribute("id",""+i);
     button.setAttribute("style","width : 25px; height : 25px; margin : 2% 2% 2% 20%");
     button.setAttribute("onclick","envoieReponse()");
     button.innerHTML=""+i;

     var rep = document.createElement("span");
     rep.innerHTML=reponse[i];


     div_QCM.appendChild(button);
     div_QCM.appendChild(rep);
     div_QCM.appendChild(document.createElement("br"));

     }*/

    // var numQuestion = chargeQuestion();
    // alert(numQuestion);
    // if(numQuestion>0){
    //     var reps = chargeReponse(numQuestion).split(",");
    //     for(var i=0; reps.length; i++){
    //         var button = document.createElement("button");
    //         button.setAttribute("name",reps[i]);
    //         button.setAttribute("id",""+i);
    //         button.setAttribute("style","width : 25px; height : 25px; margin : 2% 2% 2% 20%");
    //         button.setAttribute("onclick","envoieReponse()");
    //         button.innerHTML=""+i;
    //
    //         var rep = document.createElement("span");
    //         rep.innerHTML=reps[i];
    //
    //
    //         div_QCM.appendChild(button);
    //         div_QCM.appendChild(rep);
    //         div_QCM.appendChild(document.createElement("br"));
    //     }
    // } else {
    //     alert("Erreur : chargement question. Il faut contacter TATA YOYO !! xD")
    // }

    chargeQuestion();

    var valider = document.createElement("button");

    valider.setAttribute("style","width : 120px; height : 60px; margin : 5% 5% 0% 20%;");
    valider.setAttribute("onclick","colorCase()");
    valider.innerHTML="Valider";

    div_QCM.appendChild(document.createElement("br"));
    div_QCM.appendChild(valider);


    document.getElementById("body").appendChild(div_QCM);
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
    xmlhttp1.overrideMimeType("text/html; charset=iso-8859-1");
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

    // for (var i = 0; reps.length; i++) {
    //     var button = document.createElement("button");
    //     button.setAttribute("name", reps[i]);
    //     button.setAttribute("id", "" + i);
    //     button.setAttribute("style", "width : 25px; height : 25px; margin : 2% 2% 2% 20%");
    //     button.setAttribute("onclick", "envoieReponse()");
    //     button.innerHTML = "" + i;
    //
    //     var rep = document.createElement("span");
    //     rep.innerHTML = reps[i];
    //
    //
    //     div_QCM.appendChild(button);
    div_QCM.appendChild(rep);
    //     div_QCM.appendChild(document.createElement("br"));
    //
    // }
}

function valideReponse() {

}

function getRandomInt(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);

    return Math.floor(Math.random()*(max-min)+min);
}