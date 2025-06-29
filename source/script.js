function run() {
    let form = document.querySelector("#form")
    form.addEventListener("submit", (ev) => {
        ev.preventDefault();
        let word = ev.target.text.value;
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((content) => content.json()).then((word) => {
            
        });
    })
    
}

document.addEventListener("DOMContentLoaded", run)