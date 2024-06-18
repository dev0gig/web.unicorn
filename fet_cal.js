let zeilenZaehler = 5;

function neueZeileHinzufuegen() {
    zeilenZaehler++;

    const tabelle = document.getElementById("meineTabelle").getElementsByTagName('tbody')[0];
    const neueZeile = tabelle.rows[4].cloneNode(true); // Letzte (editierbare) Zeile klonen

    // IDs in der neuen Zeile aktualisieren
    neueZeile.querySelectorAll("input, td").forEach(element => {
        if (element.id) {
            element.id = element.id.replace(/_\d+/, `_${zeilenZaehler}`);
        }
    });

    tabelle.appendChild(neueZeile);

    // Event Listener hinzufügen (wie zuvor)
    const inputs = neueZeile.querySelectorAll("input");
    inputs.forEach(input => input.addEventListener("input", () => berechneZeile(neueZeile)));
}

function berechneZeile(zeile) {
    // Werte über IDs auslesen (Anpassung für vorausgefüllte Zeilen)
    const nVP = parseFloat(document.getElementById(`nVP_${zeile.rowIndex}`).textContent ||
        document.getElementById(`nVP_${zeile.rowIndex}`).value) || 0;
    const FET = parseFloat(document.getElementById(`FET_${zeile.rowIndex}`).textContent ||
        document.getElementById(`FET_${zeile.rowIndex}`).value) || 0;

    // Ihre Formeln hier:
    const bVP = nVP * 1.2;
    const rnVP = nVP * (1 - FET / 365);
    const rbVP = rnVP * 1.2;
    const rnVP_GA = rnVP * 1.06;
    const rbVP_GA = rbVP * 1.06;

    // Ergebnisse über IDs schreiben
    document.getElementById(`bVP_${zeile.rowIndex}`).textContent = bVP.toFixed(4);
    document.getElementById(`rnVP_${zeile.rowIndex}`).textContent = rnVP.toFixed(4);
    document.getElementById(`rbVP_${zeile.rowIndex}`).textContent = rbVP.toFixed(4);
    document.getElementById(`rnVP_GA_${zeile.rowIndex}`).textContent = rnVP_GA.toFixed(4);
    document.getElementById(`rbVP_GA_${zeile.rowIndex}`).textContent = rbVP_GA.toFixed(4);
}

// Vorausgefüllte Zeilen berechnen
for (let i = 1; i <= 4; i++) {
    berechneZeile(document.getElementById("meineTabelle").rows[i]);
}