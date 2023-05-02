
function getSoumissionInfos() {
    const soumissionLinearFeet = localStorage.getItem('beausite/soumissionInfos');
    const linearFeet = JSON.parse(soumissionLinearFeet);
    console.log(linearFeet);
    return linearFeet;
} 

function getLocalCedar() {
    const cedarString = localStorage.getItem('beausite/cedar');
    const cedar = JSON.parse(cedarString);
    return cedar;
}

function goBackToSoumission() {
    window.location.href = "https://beausite.qc.ca/soumission-rapide-plantation-haie-cedre-laval/";
}

function afficherSoumission() {
    let cedar = getLocalCedar();
    let linearFeet = getSoumissionInfos();
    let prix = linearFeet * cedar.price;


    var resultDiv = document.getElementById("cedar-picture");
    resultDiv.innerHTML = "<img src='" + cedar.picUrl + "' alt='Cedre Image'><br>"

    var containerResultat = document.getElementById("resultat");
    containerResultat.innerHTML =
        "<h4>Votre soumission</h4><hr><h2>Type de cèdres: </h2><h1>" + cedar.type + "</h1>"
        + "<h2>Hauteur de cèdres: </h2><h1>" + cedar.height + " pieds</h1>"
        + "<h2>Nombre de pieds linéaires: </h2><h1>" + linearFeet + "</h1><hr>"
        + "<h4>Total : " + prix + " $</h4>"
        + "<h5>+ Taxes applicables</h5>"
        + '<button onclick="goBackToSoumission();">Retour à la soumission</button>'


    let inputHeight = document.getElementById('input_8_70');
    let inputType = document.getElementById('input_8_71');
    let inputPrice = document.getElementById('input_8_72');
    let inputLinearFeet = document.getElementById('input_8_74');
    let soumissionPrice = document.getElementById('input_8_73')

    inputType.value = cedar.type;
    inputHeight.value = cedar.height;
    inputPrice.value = cedar.price;
    inputLinearFeet.value = linearFeet;
    soumissionPrice.value = prix;

    console.log('Show soumission done')
}

window.onload = function() {
    afficherSoumission();
}


