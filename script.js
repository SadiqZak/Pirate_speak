const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const output = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/pirate.json";

function errorHandler(error) {
    console.log("error occured")
} ;

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
};

function clickHandler() {
    const inputText = txtInput.value

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        const translatedText = json.contents.translated;
        output.innerText = translatedText
    }

    )
};

btnTranslate.addEventListener("click",clickHandler);

