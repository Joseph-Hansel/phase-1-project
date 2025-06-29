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
            let num = 0;
            main.innerHTML = `<h3>${word}</h3>

                <h4>${wording[num].phonetic}</h4>

                <p>${wording[0].meanings[num].partOfSpeech}</p>

                <p>${wording[0].meanings[num].definitions[0].definition}</p>`

            let other = main.appendChild(document.createElement("button"))
            other.innerText = "Other definitions"
            other.className = "actions"
            other.addEventListener("click", ()=> {
                num ++;
                main.innerHTML = `<h3>${word}</h3>

                <h4>${wording[0].phonetic}</h4>

                <p>${wording[0].meanings[num].partOfSpeech}</p>

                <p>${wording[0].meanings[num].definitions[0].definition}</p>`
            })
        });
    })
    
}

document.addEventListener("DOMContentLoaded", run)