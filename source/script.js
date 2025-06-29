function run() {
    let form = document.querySelector("#form")
    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        let word = ev.target.text.value;
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((content) => content.json()).then((wording) => {
            let display = document.querySelector("#display");
            let main = document.createElement("div");
            main.id = `${word}-id`
            main.className = "main"
            display.appendChild(main);
            main.innerHTML = `<h3>${word}</h3>

                <h4>${wording[0].phonetic}</h4>

                <p>${wording[0].meanings[0].partOfSpeech}</p>

                <p>${wording[0].meanings[0].definitions[0].definition}</p>`
            let other = main.appendChild(document.createElement("button"))
            other.innerText = "Other definitions"
            other.className = "actions"
            let more = main.appendChild(document.createElement("button"))
            more.innerText = "Know more about this word."
            more.className = "actions"
        });
    })
    
}

document.addEventListener("DOMContentLoaded", run)