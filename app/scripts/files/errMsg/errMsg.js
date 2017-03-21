/**
 * NOM DU FICHIER : errMsg.js
 * CREATION : 20/03/2017
 * CREATEUR : ETIENNE BLANC-COQUAND (etienne1296pro@gmail.com)
 * FONCTIONS : RETOURNER DES MESSAGES D'ERREUR SI LA SAISIE N'EST PAS CORRECTE
 */
$(document).ready(function () {
    var $nom = $("#name_field"),
        $prenom = $("#surname_field"),
        $numTel = $("#phoneNbr_field"),
        $mail = $("#mail_field"),
        $genderMale = $("#gender_field_male"),
        $genderFemale = $("#gender_field_female"),
        $country = $("#country"),
        $submit = $("#submit"),
        $reset = $("#reset"),
        $errMsg = $("#errorMessage"),
        $champ = $(".champ");

    $numTel.keyup(function () {
        if($(this).val().length < 10 || $(this).val().length > 10){
            $(this).css({
                borderColor : 'red',
                color: 'red'
            })
        }else{
            $(this).css({
                borderColor : 'green',
                color: 'green'
            })
        }
    });

    $submit.click(function (e) {
        e.preventDefault(); //Annuler la fonction par défaut du bouton d'envoi

        verifier($nom);
        verifier($prenom);
        verifier($numTel);
        verifier($mail);
    });

    $reset.click(function () {
        $champ.css({
            borderColor : 'grey',
            color : 'color'
        });
        $errMsg.css('display', 'none');
    });

    function verifier(champ) {
        if (champ.val() == ""){
            $errMsg.css("display", "block");
            $nom.css({
                borderColor : 'red',
                color : 'red'
            });
            $prenom.css({
                borderColor : 'red',
                color: 'red'
            })
        }
    }
});