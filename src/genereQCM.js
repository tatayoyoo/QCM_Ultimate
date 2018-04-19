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

    xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange =function(){
        if (xmlhttp.readyState===4 && xmlhttp.status===200){
            document.getElementById("champsQuestion").innerHTML=xmlhttp.responseText;
            chargeReponse(numQuestion);
        }
    };
    xmlhttp.open("GET","chargeQuestion.php?numQuestion="+numQuestion,true);
    xmlhttp.send();
}
function chargeReponse(numQuestion) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {

            var reps = xmlhttp.responseText.split(",");
            for (var i = 0; reps.length; i++) {
                var button = document.createElement("button");
                button.setAttribute("name", reps[i]);
                button.setAttribute("id", "" + i);
                button.setAttribute("style", "width : 25px; height : 25px; margin : 2% 2% 2% 20%");
                button.setAttribute("onclick", "envoieReponse()");
                button.innerHTML = "" + i;

                var rep = document.createElement("span");
                rep.innerHTML = reps[i];


                div_QCM.appendChild(button);
                div_QCM.appendChild(rep);
                div_QCM.appendChild(document.createElement("br"));

            }
        }
    };
    xmlhttp.open("GET", "chargeReponses.php?numQuestion=" + numQuestion, true);
    xmlhttp.send();
}

function valideReponse() {

}

function getRandomInt(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);

    return Math.floor(Math.random()*(max-min)+min);
}