const randNumb = (min, max) => {
    return Math.floor(Math.random() * (max + 1)) + min;
};

const randCharachter = () => {
    const charachter = {};
    const firstName = data.firstNames[randNumb(0, data.firstNames.length - 1)];
    const secondName = data.secondNames[randNumb(0, data.secondNames.length - 1)];
    charachter.name = randNumb(0, 1) === 0 ? `${firstName} ${secondName}` : `${secondName} ${firstName}`;
    charachter.coatColor = data.coatColors[randNumb(0, data.coatColors.length - 1)];
    charachter.eyesColor = data.eyesColors[randNumb(0, data.eyesColors.length - 1)];
    return charachter;
};

const getWizardContent = (name, coatColor, eyesColor) => {
    const wizard = document.createElement("div");
    const wizardTemplate = document.querySelector("#similar-wizard-template").content.cloneNode(true);

    const wizardName = wizardTemplate.querySelector(".setup-similar-label");
    const wizardCoatColor = wizardTemplate.querySelector(".wizard-coat");
    const wizardEyesColor = wizardTemplate.querySelector(".wizard-eyes");

    wizardName.textContent = name;
    wizardCoatColor.style.fill = coatColor;
    wizardEyesColor.style.fill = eyesColor;

    wizard.append(wizardTemplate);
    return wizard;
};

const data = {
    firstNames: ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита", "Вашингтон"],
    secondNames: ["да Марья", "Верон", "Мирабелла", "Вальц", "Онопко", "Топольницкая", "Нионго", "Ирвинг"],
    coatColors: [
        "rgb(101, 137, 164)",
        "rgb(241, 43, 107)",
        "rgb(146, 100, 161)", 
        "rgb(56, 159, 117)", 
        "rgb(215, 210, 55)", 
        "rgb(0, 0, 0)"
    ],
    eyesColors: ["black", "red", "blue", "yellow", "green"]
};
const list = document.querySelector(".setup-similar-list");
const charachters = [];

for (let i = 0; i < 4; i++) {
    charachters.push(randCharachter());
}
charachters.forEach(el => list.append(getWizardContent(el.name, el.coatColor, el.eyesColor)));