document.getElementById('grundgeruest').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.



Für Rückfragen stehen wir selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('tois_vorlage').addEventListener('click', function () {
	const mailVorlage = `Liebe Kundin, lieber Kunde,

vielen Dank für Ihren Anruf. Wie vereinbart erhalten Sie im Anhang die gewünschten Informationen.

Bitte auf diese Nachricht nicht direkt antworten, sondern bei weiteren Fragen die unten angeführten Kontaktdaten verwenden.

Wussten Sie schon?
Sie können Ihre Rechnungen jederzeit in Ihrem persönlichen Kundenbereich unter meine.wienenergie.at einsehen.

Freundliche Grüße und danke für Ihr Vertrauen,

Wien Energie Kundenberatung

www.wienenergie.at/kontakt
www.wienenergie.at/impressum`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('abmeldung').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,
				
wir haben Ihre Abmeldung vom Vertrag [Vertragsnummer] erhalten und wie gewünscht eingetragen.

Der Vertrag endet daher unter Einhaltung der 14-tägigen Kündigungsfrist am [Datum].

Für die Erstellung Ihrer Schlussrechnung benötigen wir Ihre Kontaktadresse. Bitte teilen Sie uns mit, ob Sie die Schlussrechnung per Post oder per E-Mail erhalten möchten.

Sollten Sie noch Fragen haben, stehen wir Ihnen gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('gh_auszahlung_ausweis_fehlt').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht!

Um Ihr Guthaben auszahlen zu können, benötigen wir von Ihnen einen gültigen Lichtbildausweis. Dies dient lediglich der Legitimation und Ihre Daten werden selbstverständlich nicht gespeichert (DSGVO).

Bitte schicken Sie uns Ihren Lichtbildausweis oder bringen Sie ihn persönlich in unseren Service Treff in der Spittelau vorbei.

Sollten Sie in der Zwischenzeit Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.

Vielen Dank für Ihre Mitarbeit!`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('gh_auszahlung').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

Wie von Ihnen gewünscht, wird Ihr Guthaben in den nächsten 7-10 Werktagen auf das von Ihnen angegebene Konto überwiesen.

Sollten Sie in der Zwischenzeit Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('kdnr_benötigt').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

Um Ihre Anfrage weiter bearbeiten zu können, benötigen wir bitte noch Ihre Kundennummer oder Vertragskontonummer.

Ihre Kundennummer beginnt mit 12, Ihre Vertragskontonummer hingegen mit 22.

Für Rückfragen stehen wir selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('rp').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Anfrage bezüglich eines Ratenplans.

Wie von Ihnen gewünscht, haben wir einen Ratenplan erstellt, der Ihnen in den nächsten Tagen per Post zugestellt wird.

Der Ratenplan beinhaltet alle Informationen zu den einzelnen Raten und den Fälligkeitsterminen.

Sollten Sie vorab Fragen zu dem Ratenplan haben, zögern Sie bitte nicht, uns zu kontaktieren.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('rechnungskorrektur_zählerstände').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht! 

Für eine Rechnungskorrektur betreffend der Zählerstände, bitten wir Sie sich direkt mit den Wiener Netze GmbH in Verbindung zu setzen. 

Wiener Netze GmbH Kundenservice Kontaktinformationen: 

Allgemeine Anfragen: 050 128-10100 (Mo-Fr 08:00-17:00) 
E-Mail: info@wienernetze.at 

Adresse: 1090 Wien, Spittelauer Lände 45 
Öffnungszeiten: 

Montag, Dienstag, Mittwoch, Freitag: 08:00 - 15:00 
Donnerstag: 08:00 - 17:30 

Weitere Informationen: 
https://www.servicetreff.at/

Zusätzliche Hinweise: 
Sie können einen Rückruf für allgemeine Anfragen und Anfragen rund um Smart Meter buchen. 
Es gibt separate Telefonnummern für Beschwerden und Baustellenauskunft. 
Weitere Informationen und Online-Services finden Sie auf der Website der Wiener Netze: https://www.wienernetze.at/`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('sonnenstrom').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht!

Bitte senden Sie uns die folgenden Unterlagen vollständig und unterschrieben zurück:

Wien Energie Sonnenstrom Liefervertrag (Seite 1-7, Seite 7 unterschrieben)
Vollmacht (unterschrieben)
Energie Control GmbH Blatt (unterschrieben)
Wichtig: Ohne diese Unterlagen kann keine Anmeldung Ihrer Photovoltaikanlage erfolgen.

Nach dem Erhalt der Unterlagen, können wir die Anmeldung für Sonnenstrom schnellstmöglich veranlassen.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('verlassenschaft').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

wir möchten Ihnen unser aufrichtiges Beileid aussprechen. Es tut uns sehr leid, von Ihrem Verlust zu hören. 

Wir haben das Sterbedatum nun in unseren Unterlagen eingetragen, um sicherzustellen, dass alle relevanten Informationen korrekt erfasst sind. Sollten Sie weitere Fragen oder Anliegen haben, zögern Sie bitte nicht, sich an uns zu wenden. Wir sind hier, um Ihnen zu helfen.

Nochmals möchten wir Ihnen unser tiefstes Mitgefühl aussprechen. Wir hoffen, dass Sie in dieser Zeit der Trauer Trost und Unterstützung finden.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('trockenlegungsbrief').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

Wie gewünscht, senden wir Ihnen im Anhang den Trockenlegungsbrief. Bitte reichen Sie diesen bei Ihrer Hausverwaltung oder Haushaltsversicherung ein, um eine Erstattung für die entstandenen Mehrkosten zu erhalten.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('tw').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

Wie von Ihnen gewünscht, wird der Tarif zum [Datum] umgestellt.

Die PDF-Rechnung wurde ebenfalls aktiviert und Sie erhalten diese ab dem nächsten Rechnungslauf in digitaler Form.

Sollten Sie weitere Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('ummeldung_erfolgreich').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

wir möchten Ihnen mitteilen, dass wir Ihre Ummeldung wie gewünscht durchgeführt haben.

Sollten Sie noch Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('data_KS_allgemein').addEventListener('click', function () {
	const mailVorlage = `Wien Energie Servicezentren: 

Übersicht Standorte:

Service Treff Spittelau:

Adresse: Spittelauer Lände 45, 1090 Wien

Öffnungszeiten:
Mo-Do: 8:00-19:00 Uhr (mit Termin bis 20:00 Uhr)
Fr: 8:00-15:00 Uhr (mit Termin bis 16:00 Uhr)

Terminvereinbarung: https://www.servicetreff.at/

Hinweis: Tiere (ausgenommen Assistenzhunde) sind nicht erlaubt.

Servicepoint Erdberg:

Adresse: Thomas-Klestil-Platz 4, EG, 1030 Wien

Öffnungszeiten:
Mo-Do: 8:00-19:00 Uhr (mit Termin bis 20:00 Uhr)
Fr: 8:00-15:00 Uhr (mit Termin bis 16:00 Uhr)

Terminvereinbarung: https://www.servicetreff.at/

Hinweis: Tiere (ausgenommen Assistenzhunde) sind nicht erlaubt.

Servicepoint Guntramsdorf:

Adresse: Rathaus Viertel 1, 1. OG, 2353 Guntramsdorf

Öffnungszeiten:
Mo-Fr: 8:00-15:00 Uhr
Do: 8:00-17:30 Uhr

Hinweis: Tiere (ausgenommen Assistenzhunde) sind nicht erlaubt.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('data_spit').addEventListener('click', function () {
	const mailVorlage = `Kontaktdaten für den Service Treff Spittelau:

Adresse:
Spittelauer Lände 45
1090 Wien

Öffnungszeiten:
Montag - Donnerstag: 8:00 - 19:00 Uhr (bis 20:00 Uhr mit Termin)
Freitag: 8:00 - 15:00 Uhr (bis 16:00 Uhr mit Termin)

Website: https://www.servicetreff.at/

Anfahrt:
Mit öffentlichen Verkehrsmitteln: U-Bahnlinie U4, Station Spittelau
Mit dem Auto: Parkmöglichkeiten in der Nähe vorhanden

Terminvereinbarung:
Online Terminvereinbarung möglich: https://www.servicetreff.at/

Zusätzliche Informationen:
Im Service Treff Spittelau erhalten Sie Hilfe und Beratung zu allen Produkten und Dienstleistungen der Wiener Stadtwerke.
Sie können hier Ihre Strom-, Gas- und Fernwärmerechnungen bezahlen.
Barrierefreier Zugang vorhanden.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('data_wn').addEventListener('click', function () {
	const mailVorlage = `Wiener Netze GmbH Kundenservice Kontaktinformationen:

Allgemeine Anfragen: 050 128-10100 (Mo-Fr 08:00-17:00)
E-Mail: info@wienernetze.at

Service Treff der Wiener Stadtwerke
Adresse: 1090 Wien, Spittelauer Lände 45

Öffnungszeiten:
Montag, Dienstag, Mittwoch, Freitag: 08:00 - 15:00
Donnerstag: 08:00 - 17:30

Weitere Informationen:
https://www.servicetreff.at/

Zusätzliche Hinweise:
Sie können einen Rückruf für allgemeine Anfragen und Anfragen rund um Smart Meter buchen.
Es gibt separate Telefonnummern für Beschwerden und Baustellenauskunft.
Weitere Informationen und Online-Services finden Sie auf der Website der Wiener Netze: https://www.wienernetze.at/`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('waerme_anm').addEventListener('click', function () {
	const mailVorlage = `Sehr geehrter _kd_,
	
vielen Dank für Ihre Nachricht.

Um Ihr Anliegen bearbeitn zu können benötigen wir:
- Kopie Kaufvertrag oder
- Mietvertrag

Bitte senden Sie uns für die Anmeldung der Wärmelieferung im Zuge des Mieter- oder Eigentümerwechsels folgende Unterlagen zu:

Bei Mietwohnungen:
- Eine Bestätigung über den Beginn des Mietvertrages (unterschrieben) aus der das Datum des Mietvertragsende, die Verbrauchsstellenadresse sowie der vollständige Name des Vermieters und Mieters ersichtlich sind.

Bei Eigentumswohnungen:
- Eine Kopie des Kaufvertrages (unterschrieben) aus dem das Übergabedatum, die Verbrauchsstellenadresse sowie die vollständigen Namen des Verkäufers und Käufers ersichtlich sind.

Wir ersuchen Sie, diese Unterlagen elektronisch (als PDF-Dokument) zu senden.

Für weiter fragen zum Thema Fernwärme wenden Sie sich bitte an folgende Mail-Adresse: waerme@wienenergie.at.

Für Rückfragen stehen wir selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('grundgerüst').addEventListener('click', function () {
	const mailVorlage = ``;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('grundgerüst').addEventListener('click', function () {
	const mailVorlage = ``;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('grundgerüst').addEventListener('click', function () {
	const mailVorlage = ``;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('grundgerüst').addEventListener('click', function () {
	const mailVorlage = ``;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('grundgerüst').addEventListener('click', function () {
	const mailVorlage = ``;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('grundgerüst').addEventListener('click', function () {
	const mailVorlage = ``;

	document.getElementById('outputArea').value = mailVorlage;
});




document.getElementById('searchButton').addEventListener('click', function () {
	const searchTerm = document.getElementById('searchInput').value.toLowerCase();
	const results = [];

	for (const [key, value] of Object.entries(templates)) {
		if (value.toLowerCase().includes(searchTerm)) {
			results.push({ key, value });
		}
	}

	displayResults(results);
});

function displayResults(results) {
	const resultsDiv = document.getElementById('searchResults');
	resultsDiv.innerHTML = '';

	if (results.length === 0) {
		resultsDiv.innerHTML = 'Keine Vorlagen gefunden.';
		return;
	}

	results.forEach(result => {
		const resultButton = document.createElement('button');
		resultButton.textContent = result.key;
		resultButton.addEventListener('click', function () {
			document.getElementById('outputArea').value = result.value;
		});

		resultsDiv.appendChild(resultButton);
	});
}