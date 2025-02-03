document.getElementById('openDivLink').addEventListener('click', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    document.getElementById('myDiv').classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    var myDiv = document.getElementById('myDiv');
    var openDivLink = document.getElementById('openDivLink');

    // Überprüfen, ob das Klickereignis außerhalb des Divs und des Links liegt
    if (event.target !== myDiv && event.target !== openDivLink && !myDiv.contains(event.target)) {
        myDiv.classList.add('hidden');
    }
});