
const cedars = [
    {
        id: '1',
        type: 'SEMI-CULTIVÉS (BLANCS)',
        height: 3,
        price: 19.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre1-example-removebg-preview.png'
    },
    {
        id: '2',
        type: 'SEMI-CULTIVÉS (BLANCS)',
        height: 4,
        price: 23.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre1-example-removebg-preview.png'

    },
    {
        id: '3',
        type: 'SEMI-CULTIVÉS (BLANCS)',
        height: 5,
        price: 28.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre1-example-removebg-preview.png'

    },
    {
        id: '4',
        type: 'NIGRAS CULTIVÉS',
        height: 3,
        price: 34.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre2-exemple-removebg-preview.png'


    },
    {
        id: '5',
        type: 'NIGRAS CULTIVÉS',
        height: 4,
        price: 38.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre2-exemple-removebg-preview.png'


    },
    {
        id: '6',
        type: 'NIGRAS CULTIVÉS',
        height: 5,
        price: 52.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre2-exemple-removebg-preview.png'

    },
    {
        id: '7',
        type: 'NIGRAS CULTIVÉS',
        height: 6,
        price: 63.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre2-exemple-removebg-preview.png'

    },
    {
        id: '8',
        type: 'NIGRAS CULTIVÉS',
        height: 7,
        price: 72.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre2-exemple-removebg-preview.png'


    },
    {
        id: '9',
        type: 'NIGRAS CULTIVÉS',
        height: 8,
        price: 112.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre2-exemple-removebg-preview.png'

    },
    {
        id: '10',
        type: 'FASTIGIATA',
        height: 3,
        price: 40.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre3-exemple-removebg-preview.png'

    },
    {
        id: '11',
        type: 'FASTIGIATA',
        height: 4,
        price: 49.50,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre3-exemple-removebg-preview.png'

    },
    {
        id: '12',
        type: 'FASTIGIATA',
        height: 5,
        price: 75.00,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre3-exemple-removebg-preview.png'


    },
    {
        id: '13',
        type: 'FASTIGIATA',
        height: 6,
        price: 100.00,
        picUrl: 'https://beausite.qc.ca/dev2016/wp-content/uploads/2023/03/Cedre3-exemple-removebg-preview.png'

    }
];

console.log('Listing cedars', cedars)

/* 
Config script
*/

function setLocalCedar(cedar) {
    const cedarString = JSON.stringify(cedar);
    localStorage.setItem('beausite/cedar', cedarString);
}

function setSoumissionLinearFeet(linearFeet) {
    const soumissionLinearFeet = JSON.stringify(linearFeet)
    localStorage.setItem('beausite/soumissionInfos', soumissionLinearFeet);
}

function getLocalCedar() {
    const cedarString = localStorage.getItem('beausite/cedar');
    const cedarObject = JSON.parse(cedarString);
    return cedarObject;
}

function reset() {
    localStorage.removeItem('beausite/cedar')
    console.log('clear local storage')
}

function getCedarPrice(type, height) {
    console.log("type selected : ", type, " ", "height selected :", height);
    const cedar = cedars.find(cedars => cedars.type === type && cedars.height === height);
    setLocalCedar(cedar);
    return cedar.price;
}

function calculer() {
    let linearFeet = parseInt(document.getElementById("linearFeet").value);
    let type = "";
    let height = 0;

    if (isNaN(linearFeet) || linearFeet <= 0) {
        alert("Veuillez entrer un nombre valide pour le nombre de pieds linéaires.");
        return;
    }

    if (document.getElementById("content1").style.display === "block") {
        type = "SEMI-CULTIVÉS (BLANCS)";
        let heightInput = document.querySelector('input[name="sauvages-height"]:checked');
        if (!heightInput) {
            alert("Veuillez sélectionner une hauteur pour les cèdres Semi-cultivés.");
            return;
        }
        height = parseInt(heightInput.value);
    } else if (document.getElementById("content2").style.display === "block") {
        type = "NIGRAS CULTIVÉS";
        let heightInput = document.querySelector('input[name="nigras-height"]:checked');
        if (!heightInput) {
            alert("Veuillez sélectionner une hauteur pour les cèdres Nigras cultivés.");
            return;
        }
        height = parseInt(heightInput.value);
    } else if (document.getElementById("content3").style.display === "block") {
        type = "FASTIGIATA";
        let heightInput = document.querySelector('input[name="fasti-height"]:checked');
        if (!heightInput) {
            alert("Veuillez sélectionner une hauteur pour les cèdres Fastigiata.");
            return;
        }
        height = parseInt(heightInput.value);
    }


    let prixCedar = getCedarPrice(type, height);
    let cedar = getLocalCedar()

    let prix = prixCedar * linearFeet;

    setSoumissionPrice(prix);
    setSoumissionLinearFeet(linearFeet);

    var resultDiv = document.getElementById("cedar-picture");
    resultDiv.innerHTML = "<img src='" + cedar.picUrl + "' alt='Cedre Image'><br>"

    var containerResultat = document.getElementById("resultat");
    containerResultat.innerHTML =
        "<h4>Votre soumission</h4><hr><h2>Type de cèdres: </h2><h1>" + type + "</h1>"
        + "<h2>Hauteur de cèdres: </h2><h1>" + height + " pieds</h1>"
        + "<h2>Nombre de pieds linéaires: </h2><h1>" + linearFeet + "</h1><hr>"
        + "<h4>Total : " + prix + " $</h4>"
        + "<h5>+ Taxes applicables</h5>"
        + '<button onclick="openSecondPage();">Envoyer ma soumission</button>'

    goToSection();

}

function openSecondPage() {
    let baseUrl = "https://beausite.qc.ca/envoyer-demande-de-estimation-de-soumission-en-ligne/";
    window.location.href = baseUrl;
}


/* 
    Config display content
*/

// Show content1 by default 
document.getElementById("content1").style.display = "block";

function activateSection(selectedSection) {
    // Deselect all sections
    let sections = document.querySelectorAll(".section1");
    sections.forEach((section) => {
        section.classList.remove("active");
    });

    // Select the clicked section
    selectedSection.classList.add("active");

}

// Show - div id content1 by default
document.getElementById("content1").style.display = "block";

function showContent(contentId) {

    // get all the element of class content
    var contents = document.getElementsByClassName("content");

    // Hide class content
    for (var i = 1; i < contents.length; i++) {
        contents[i].style.display = "none";
    }

    // Show class content at click
    var content = document.getElementById(contentId);
    content.style.display = "block";
    reset()
}

// Hide - Confirmation of soumission
function hideSendForm() {
    var sendFormButton = document.getElementById("sendForm");
    sendFormButton.style.display = "none";
}

// Show - Confirmation of soumission
function showSendForm() {
    var sendFormButton = document.getElementById("sendForm");
    sendFormButton.style.display = "block";
}

// Display Animation - View soumission
function goToSection() {
    var section = document.getElementById("resultat");
    var position = section.getBoundingClientRect().top + window.pageYOffset - 250;
    window.scrollTo({ top: position, behavior: "smooth" });
}

hideSendForm();
