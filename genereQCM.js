/**
 * Created by Yoann on 11/04/2018.
 */
var numerosQuestion = [];
var reponse = ["Bond OU une prase plus ou moins longue cest possible","Marcher","Contact","Pique"];
var nbsQuestion = 2;

function chargeQCM(){
    var div_QCM = document.createElement("div");
    div_QCM.setAttribute("style","text-align : left;");

    numerosQuestion = [];

    for(var i=0; i<4;i++){

        var button = document.createElement("button");
        button.setAttribute("src","img/dosdecartes_alliance_hearthstone_.png");
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

    }

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
            // chargeReponses(numQuestion);
        }
    };
    xmlhttp.open("GET","chargeQuestion.php?numQuestion="+numQuestion,true);
    xmlhttp.send();
}
function valideReponse() {

}

function getRandomInt(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);

    return Math.floor(Math.random()*(max-min)+min);
}