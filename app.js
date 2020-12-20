var btnTranslate= document.querySelector("#btn-translate")
var inputText=document.querySelector("#txt-input")
var outputText=document.querySelector("#output")
var server="https://api.funtranslations.com/translate/braille.json"


function translateText(text){
    return server+"?"+"text="+text
}
function errorHandler(error){
    console.log("error occured:",error)
}
function clickHandler(){
    var output=inputText.value;
    fetch(translateText(output))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputText.innerText=translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click", clickHandler)

