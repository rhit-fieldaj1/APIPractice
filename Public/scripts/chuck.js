document.addEventListener('DOMContentLoaded', (event) => {
    const getQuote = document.getElementById("getQuote");
    const displayArea = document.getElementById("displayArea");

    getQuote.addEventListener('click', function() {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            let quote = data.value;
            displayArea.innerHTML = quote;
        });
    });
});