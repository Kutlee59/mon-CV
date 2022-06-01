
/* tableau qui contient les liens de la barre NAV */
var lienMenu = document.querySelectorAll('nav ul li');
/* tableau qui contient les ecrans de ma page*/ 
var ecranAffiche = document.querySelectorAll(".ecran");
for (let i = 0; i < lienMenu.length; i++)
{
    lienMenu[i].addEventListener('click',
    function() {
        positionnerEcran(i);
    } );
    lienMenu[i].addEventListener('mouseover',
    function(){
        changerCurseur(i);
    });
}

function positionnerEcran(numEcran)
{
    ecranAffiche[numEcran].scrollIntoView(
        {block: 'end', inline: 'start', behavior: 'smooth' }
    );
}

function changerCurseur(numLien)
{
    lienMenu[numLien].style.cursor = 'pointer';
}

function success(){
    // message pour l'utilisateur
    lemessage.innerHTML ="Message envoyé ! <br>Nous vous recontacterons dès que possible.";
    //suppression du contenu des champs du formulaire
    nom.value = "";
    email.value = "";
    telephone.value = "";
    message.value = "";
    }
    function failed(){
    lemessage.style.color = 'red';
    lemessage.innerHTML ="Une erreur s'est produite,<br>veuillez réessayer.";
    }