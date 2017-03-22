/**
 * NOM DU FICHIER : pswdCheck.js
 * CREATION : 21/03/2017
 * CREATEUR : ETIENNE BLANC-COQUAND (etienne1296pro@gmail.com)
 * FONCTIONS : VERIFIER LA COMPLEXITE D'UN MOT DE PASSE ET SON EQUIVALENCE ENTRE LES DEUX CHAMPS
 */

$(document).ready(function () {
    var $olMdp = $('#oldPassword').val(),
        $newMdp = $('#newPassword').val(),
        $confMdp = $('#confirmPassword').val();

    $('input[type=password]').keyup(function() {
        var pswd = $(this).val();
        //Validate the length
        if (pswd.length < 5){
            $('#length').removeClass('valid').addClass('invalid');
        }else{
            $('#length').removeClass('invalid').addClass('valid');
        }
        //Validate letter
        if (pswd.match(/[A-z]/)){
            $('#letter').removeClass('invalid').addClass('valid');
        }else{
            $('#letter').removeClass('valid').addClass('invalid');
        }
        //Validate capital letter
        if (pswd.match(/[A-Z]/)){
            $('#capital').removeClass('invalid').addClass('valid');
        }else{
            $('#capital').removeClass('valid').addClass('invalid');
        }
        //Validate number
        if (pswd.match(/\d/)){
            $('#number').removeClass('invalid').addClass('valid');
        }else{
            $('#number').removeClass('valid').addClass('invalid');
        }
    }).focus(function() {
        $('#pswd_info').show();
    }).blur(function() {
        $('#pswd_info').hide();
    });

});