var btnTranslate = document.querySelector("#btn"); 
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL="https://api.funtranslations.com/translate/yoda.json";

//function to generate API URL
function translationURL(text)
{
    return serverURL+"?"+"text="+text;
}

//function to Handle error
function errorHandler(error){
    console.log("error happened:"+error);
    alert("There is something wrong with server. Please try after some time.");
}

// Processing on server
function clickHandler() {
    var inputText=txtInput.value;

    fetch(translationURL(inputText))
        .then(response=>response.json())
        .then(json=>{
            var translatedText = json.contents.translated;
            outputDiv.innerText= translatedText;
            })
        .catch(errorHandler)
};

//Get the click and start process (Call clickhandler)
btnTranslate.addEventListener("click",clickHandler);