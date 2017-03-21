/**
 * NOM DU FICHIER : pswdCheck.js
 * CREATION : 21/03/2017
 * CREATEUR : ETIENNE BLANC-COQUAND (etienne1296pro@gmail.com)
 * FONCTIONS : VERIFIER LA COMPLEXITE D'UN MOT DE PASSE ET SON EQUIVALENCE ENTRE LES DEUX CHAMPS
 */

$(document).ready(function () {
    var $mdpBase = $("#nowPassword"),
        $mdpNew = $("#newPassword"),
        $mdpVerif = $("#confirmPassword"),
        $submit = $("#submit"),
        $reset = $("#reset"),
        $champPassword = $(".passwordChamp");

    function concordanceMdp(champ1, champ2) {
        if ($(champ2).val() != $(champ1).val()){ //Verification de la concordance des champs
            alert("Les mots de passes ne concordent pas");
        }
    }

    $submit.click(function (e) {
        e.preventDefault();
        concordanceMdp($mdpNew, $mdpVerif)
    })
});