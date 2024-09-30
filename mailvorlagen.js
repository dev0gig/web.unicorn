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

Für Rückfragen stehen wir selbstverständlich gerne zur Verfügung

Freundliche Grüße und danke für Ihr Vertrauen,

Wien Energie Kundenberatung

www.wienenergie.at/kontakt
www.wienenergie.at/impressum`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('anmeldung').addEventListener('click', function () {
	const mailVorlage = `
Guten Tag,

vielen Dank für Ihr Interesse an einer Neuanmeldung bei WienEnergie. Um Ihre Anfrage bearbeiten und Ihnen einen Vertrag für die Neuanmeldung zusenden zu können, benötigen wir folgende Daten:

- Ihren vollständigen Namen
- Ihre Adresse
- Ihr Geburtsdatum
- Ihre Telefonnummer
- Ihre E-Mail-Adresse

Sobald uns diese Informationen vorliegen, werden wir Ihnen umgehend den entsprechenden Vertrag zusenden.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('abmeldung').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,
				
wir bestätigen den Erhalt Ihrer Abmeldung vom Vertrag [Vertragsnummer] und haben diese wie gewünscht eingetragen.
Der Vertrag endet gemäß der 14-tägigen Kündigungsfrist am [Datum].

Für die Erstellung Ihrer Schlussrechnung benötigen wir Ihre Kontaktadresse. Bitte teilen Sie uns mit, ob Sie die Schlussrechnung per Post oder per E-Mail erhalten möchten.

Sollten Sie noch Fragen haben, stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('gh_auszahlung_ausweis_fehlt').addEventListener('click', function () {
	const mailVorlage = `Vielen Dank für Ihre Anfrage.

Um Ihre Bankverbindung zu hinterlegen und Ihr Guthaben auszuzahlen, benötigen wir zur Authentifizierung eine Ausweiskopie. Dies dient ausschließlich der Betrugsprävention und gewährleistet die Sicherheit Ihrer Auszahlung. Die von Ihnen beigefügte Ausweiskopie wird nicht in unserem System gespeichert, sondern dient ausschließlich Ihrer Identifikation und wird nach dem Datenabgleich unwiderruflich gelöscht.

Wenn Sie keine Ausweiskopie per E-Mail senden möchten, können Sie Ihren Ausweis auch in einem unserer Servicecenter vorweisen.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('gh_auszahlung').addEventListener('click', function () {
	const mailVorlage = `Vielen Dank für Ihre Anfrage.

Die Authentifizierung mittels Ihrer Ausweiskopie wurde erfolgreich durchgeführt. Die von Ihnen beigefügte Ausweiskopie wurde nicht in unserem System gespeichert, sondern diente ausschließlich Ihrer Identifikation und wurde nach dem Abgleich Ihrer Daten unwiderruflich gelöscht.

Ihre Gutschrift erhalten Sie innerhalb der nächsten Werktage auf Ihr angegebenes Bankkonto überwiesen.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('kdnr_benötigt').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

um Ihre Anfrage weiter bearbeiten zu können, benötigen wir bitte noch Ihre Kundennummer oder Ihre Vertragskontonummer.
Ihre Kundennummer beginnt mit "12", Ihre Vertragskontonummer beginnt mit "22".

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('rp').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

gerne haben wir den gewünschten Ratenplan für Sie erstellt.
Bitte beachten Sie, dass die Raten pünktlich an den im Plan angegebenen Terminen überwiesen werden müssen. Achten Sie darauf, den exakten Betrag zu überweisen, da der Ratenplan ansonsten storniert wird.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.

Für Rückfragen stehen wir selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('rechnungskorrektur_zählerstände').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht! 

für eine Korrektur Ihrer Rechnung bezüglich der Zählerstände bitten wir Sie, sich direkt mit der Wiener Netze GmbH in Verbindung zu setzen.

Hier die Kontaktdaten der Wiener Netze GmbH Kundenservice:

Allgemeine Anfragen: 050 128-10100 (Mo-Fr 08:00-17:00)
E-Mail: info@wienernetze.at
Adresse: 1090 Wien, Spittelauer Lände 45

Öffnungszeiten:
Montag, Dienstag, Mittwoch, Freitag: 08:00 - 15:00
Donnerstag: 08:00 - 17:30

Weitere Informationen finden Sie auf der Website des Service Treffs: www.servicetreff.at
Bitte beachten Sie, dass Sie auch die Möglichkeit haben, einen Rückruf für allgemeine Anfragen sowie Fragen zu Smart Metern zu buchen. Für Beschwerden und Baustellenauskunft stehen separate Telefonnummern zur Verfügung. Detaillierte Informationen und Online-Services finden Sie auf der Website der Wiener Netze: www.wienernetze.at

Für weitere Fragen stehen wir Ihnen gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('sonnenstrom').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht!

Bitte senden Sie uns die folgenden Unterlagen vollständig und unterschrieben zurück:

- Wien Energie Sonnenstrom Liefervertrag (Seiten 1-6, Seite 6 unterschrieben)
- Datenschutzvereinbarung (unterschrieben)
- Vollmacht (unterschrieben)
- Energie Control GmbH Dokument (unterschrieben)

Bitte beachten Sie, dass ohne die vollständige Einreichung dieser Unterlagen keine Anmeldung Ihrer Photovoltaikanlage erfolgen kann.
Sobald wir die Unterlagen erhalten haben, werden wir die Anmeldung für Sonnenstrom umgehend veranlassen.

Für Rückfragen stehen wir selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('verlassenschaft').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

wir möchten Ihnen unser aufrichtiges Beileid aussprechen und bedauern zutiefst, von Ihrem Verlust zu erfahren.

Wir haben das Sterbedatum in unseren Unterlagen vermerkt, um sicherzustellen, dass alle relevanten Informationen korrekt erfasst sind.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('trockenlegungsbrief').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

Wie gewünscht, finden Sie im Anhang den Trockenlegungsbrief zur weiteren Verwendung.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('tw').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für Ihre Nachricht.

wie von Ihnen gewünscht, wird der Tarif zum [Datum] umgestellt.

Die PDF-Rechnung wurde ebenfalls aktiviert, und Sie werden diese ab dem nächsten Rechnungslauf in digitaler Form erhalten.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('ummeldung_erfolgreich').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

wir möchten Ihnen hiermit bestätigen, dass Ihre Ummeldung wie gewünscht erfolgreich durchgeführt wurde.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.

Mit freundlichen Grüßen,`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('data_KS_allgemein').addEventListener('click', function () {
	const mailVorlage = `Service Treff Spittelau:

Adresse: Spittelauer Lände 45, 1090 Wien

Öffnungszeiten:
Mo-Do: 8:00-19:00 Uhr (mit Termin bis 20:00 Uhr)
Fr: 8:00-15:00 Uhr (mit Termin bis 16:00 Uhr)

Terminvereinbarung: https://www.servicetreff.at/

##################################################################

Servicepoint Erdberg:

Adresse: Thomas-Klestil-Platz 4, EG, 1030 Wien

Öffnungszeiten:
Mo-Do: 8:00-19:00 Uhr (mit Termin bis 20:00 Uhr)
Fr: 8:00-15:00 Uhr (mit Termin bis 16:00 Uhr)

Terminvereinbarung: https://www.servicetreff.at/

##################################################################

Servicepoint Guntramsdorf:

Adresse: Rathaus Viertel 1, 1. OG, 2353 Guntramsdorf

Öffnungszeiten:
Mo-Fr: 8:00-15:00 Uhr
Do: 8:00-17:30 Uhr`;

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
	const mailVorlage = `Guten Tag,
	
vielen Dank für Ihre Nachricht.

Um Ihr Anliegen bearbeiten zu können, benötigen wir von Ihnen die folgenden Unterlagen:

Für Mietwohnungen:
Eine Bestätigung über den Beginn des Mietvertrages (unterschrieben), aus der das Datum des Mietvertragsendes, die Verbrauchsstellenadresse sowie die vollständigen Namen des Vermieters und Mieters hervorgehen.

Für Eigentumswohnungen:
Eine Kopie des Kaufvertrages (unterschrieben), aus dem das Übergabedatum, die Verbrauchsstellenadresse sowie die vollständigen Namen des Verkäufers und Käufers ersichtlich sind.

Bitte senden Sie uns diese Unterlagen elektronisch als PDF-Dokument zu.

Für weitere Fragen zur Fernwärme wenden Sie sich bitte an folgende E-Mail-Adresse: waerme@wienenergie.at.

Für Rückfragen stehen wir Ihnen selbstverständlich gerne zur Verfügung.`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('data_inkasso').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

Vielen Dank für Ihre Nachricht.

Für weitere Auskünfte zum aktuellen Saldo, wenden Sie sich bitte direkt an die Firma Riverty Services Austria GmbH.

Riverty Services Austria GmbH
Getrude-Fröhlich-Sandner-Straße 1/2
1100 Wien
Telefon: +43 (0)386 80 90 38
Homepage: www.riverty.com`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('waerme_an-/abm').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,

vielen Dank für ihre Nachricht.
 
wir haben Ihr Anliegen zur Kenntnis genommen und möchten Sie darüber informieren, dass wir alle An- und Abmeldungen direkt von der Hausverwaltung übermittelt bekommen.
Wir bitten Sie daher noch um etwas Geduld.
 
Die Schlussabrechnung wird bis spätestens 6 Monate nach Beendigung des Verrechnungsjahres erstellt und versendet. Bitte um Übermittelung Ihrer neuen Anschrift.
 
Sollten Sie in der Zwischenzeit Fragen haben, zögern Sie bitte nicht, uns zu kontaktieren.
`;

	document.getElementById('outputArea').value = mailVorlage;
});

// #####################################################################################################################

document.getElementById('waerme_mieterwechsel').addEventListener('click', function () {
	const mailVorlage = `Guten Tag,
 
der Mieterwechsel wurde wunschgemäß durchgeführt.
 
Zu Ihrer Information:
Aufgrund von gesetzlichen Vorgaben dürfen wir keine direkten Verträge mit Ihren Mieter*innen abschließen – im Sinne des HeizKG ist das nur mit Ihnen als Eigentümer*in möglich. 
Wichtig: Damit bleiben Sie auch in Zukunft unser(e) Vertragspartner*in und haften für anfallende Kosten.
Um Ihnen die Abwicklung so einfach wie möglich zu machen, bieten wir Ihnen ein besonderes Service: Wir tragen den/die Mieter*in als Rechnungsempfänger*in ein und schicken diesem/r alle Rechnungsunterlagen.
 
Sie möchten dieses Service nicht nutzen? Dann informieren Sie uns bitte unter waerme@wienenergie.at
 
Sie haben noch Fragen? Wir sind für Sie da – unter 0800 500 700 von Montag bis Freitag von
07:30 bis 16:00 Uhr oder unter waerme@wienenergie.at
 
Mit freundlichen Grüßen
 
Wien Energie`;

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
