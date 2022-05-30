var openSandwich = document.querySelector('.sandwich-button')
var closeSandwich = document.getElementById('bar')


openSandwich.addEventListener('click', () => {
    document.querySelector(".head-nav.sandwich").style.display = "flex";
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".sandwich-button").style.display = "none";
})

closeSandwich.addEventListener('click', () => {
    document.querySelector(".head-nav.sandwich").style.display = "";
    document.querySelector(".logo").style.display = "";
    document.querySelector(".sandwich-button").style.display = "";
})


document.querySelectorAll('.learn-more').forEach(btnElement => {
    btnElement.addEventListener("click", (e) => {
        learnMoreFunction(e);
    });
});

document.querySelector(".modal-close-button").addEventListener("click", hideModal);
document.querySelector(".modal-background").addEventListener("click", hideModal);

function learnMoreFunction(e) {
    var id = e.target.id;

    fetch("assets/json/pets.json")
        .then(response => response.json())
        .then(data => {
            var petInfo = data[id.replace("button-", "")];
            var modalContent = buildModalContent(petInfo);

            document.querySelector(".modal-inner-content-div").innerHTML = modalContent;

            showModal()
        })
};

function hideModal() {
    document.querySelector(".modal-container").style.display = "none";
}

function showModal() {
    document.querySelector(".modal-container").style.display = "flex";
}

function buildModalContent(petInfo) {
    return document.getElementById("modal-template").innerHTML
        .replace("{{imgUrl}}", petInfo.imgUrl)
        .replace("{{breed}}", petInfo.breed)
        .replace("{{description}}", petInfo.description)
        .replace("{{age}}", petInfo.age)
        .replace("{{inoculations}}", petInfo.inoculations)
        .replace("{{diseases}}", petInfo.diseases)
        .replace("{{parasites}}", petInfo.parasites)
        .replace("{{title}}", petInfo.title);
}


